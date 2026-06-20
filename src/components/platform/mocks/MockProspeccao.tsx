"use client";
/**
 * MockProspeccao
 * Pixel-faithful replica of Fábrica de Clientes / PipelinePage (Kanban / Funil view)
 * from Calango.studio.
 *
 * Chrome decision: PlatformChrome with sidebar active="prospeccao" (Target icon,
 * text-primary / orange-amber accent). The real Fábrica de Clientes uses a fullscreen
 * SalesModeLayout with a horizontal top-bar nav (Hoje, Pipeline, Resultados, Serviços).
 * We replicate that sales-mode top-bar INSIDE the PlatformChrome content area so the
 * mock is carousel-consistent (sidebar visible) while still showing the faithful chrome.
 *
 * Content area shows:
 *   1. Sales-mode top-bar (← back, Sparkle icon + "Fábrica de Clientes" branding,
 *      center nav with Hoje/Pipeline/Resultados/Serviços, right CTA "+ Novo prospect")
 *   2. Pipeline page header (title + stats, search bar, Funil/Lista toggle, Novo button)
 *   3. Kanban columns (8 stages at NORMAL width ~248px each ≈ 1984px total)
 *      The row overflows to the right — the outer viewport's overflow:hidden crops it.
 *
 * Stage colors match fcUi.tsx STAGE_META exactly.
 *
 * Forge / animation: horizontal pan of the kanban row.
 *   PAN_POSITIONS: [ 0, -380, -760, -380 ] px (translateX on the row)
 *   Each step uses a CSS transition (ease-in-out 0.8s) so the pan is smooth.
 *   Reduced-motion → pinned to position 1 (-380px) showing middle columns.
 *   The forge timer advances steps 0→1→2→3→0→… at 2000ms per step.
 *
 * Card-lift accent: "Clínica Saúde+" lifts briefly when the pan crosses "Abordar".
 *   (lifted when step === 1, winId badge when step === 2)
 *
 * Lucide icons (matching real PipelinePage + SalesModeLayout + fcUi):
 *   Search, Send, Hourglass, HandCoins, Brain, XCircle, CheckCircle2, Repeat,
 *   ArrowLeft, Sparkle, Home, Kanban, BarChart3, Briefcase, Plus, CalendarClock,
 *   Users, Flame, MoreHorizontal, Target, List
 *
 * NO overflow-y-auto — FitFrame scales whole window; kanban row scrolls via animation only.
 */

import { useRef, useEffect, useState } from "react";
import {
  Search,
  Send,
  Hourglass,
  HandCoins,
  Brain,
  XCircle,
  CheckCircle2,
  Repeat,
  ArrowLeft,
  Sparkle,
  Home,
  Kanban,
  BarChart3,
  Briefcase,
  Plus,
  CalendarClock,
  Flame,
  MoreHorizontal,
  List,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Stage meta (mirrors fcUi.tsx STAGE_META exactly) ────────────────────────

type StageMeta = {
  label: string;
  icon: LucideIcon;
  text: string;
  bg: string;
  border: string;
  dot: string;
  outcome: boolean;
};

const STAGE_META: Record<string, StageMeta> = {
  prospectar:       { label: "Prospectar",       icon: Search,       text: "text-sky-400",     bg: "bg-sky-500/10",     border: "border-sky-500/20",     dot: "bg-sky-400",     outcome: false },
  abordar:          { label: "Abordar",          icon: Send,         text: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/20",  dot: "bg-violet-400",  outcome: false },
  nao_respondeu:    { label: "Não respondeu",    icon: Hourglass,    text: "text-orange-400",  bg: "bg-orange-500/10",  border: "border-orange-500/20",  dot: "bg-orange-400",  outcome: false },
  oferta_feita:     { label: "Oferta feita",     icon: HandCoins,    text: "text-cyan-400",    bg: "bg-cyan-500/10",    border: "border-cyan-500/20",    dot: "bg-cyan-400",    outcome: false },
  pensando:         { label: "Pensando",         icon: Brain,        text: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/20",   dot: "bg-amber-400",   outcome: false },
  nao_quis:         { label: "Não quis",         icon: XCircle,      text: "text-rose-400",    bg: "bg-rose-500/10",    border: "border-rose-500/20",    dot: "bg-rose-400",    outcome: true },
  fechou:           { label: "Fechou",           icon: CheckCircle2, text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", dot: "bg-emerald-400", outcome: true },
  vender_novamente: { label: "Vender de novo",   icon: Repeat,       text: "text-purple-400",  bg: "bg-purple-500/10",  border: "border-purple-500/20",  dot: "bg-purple-400",  outcome: true },
};

// All 8 stages in display order
const ALL_STAGES = [
  "prospectar",
  "abordar",
  "nao_respondeu",
  "oferta_feita",
  "pensando",
  "fechou",
  "vender_novamente",
  "nao_quis",
];

const OUTCOME_STAGES = new Set(["fechou", "vender_novamente", "nao_quis"]);

// ─── Horizontal pan positions (translateX on the kanban row) ──────────────────
// Content area ≈ 1200px. Each column = 248px + 8px gap ≈ 256px.
// Position 0: columns 0-4 visible (Prospectar→Pensando)
// Position 1: columns 1-5 visible (Abordar→Fechou), shift -380px
// Position 2: columns 3-7 visible (Oferta feita→Não quis), shift -760px
// Sequence: 0 → 1 → 2 → 1 → 0 → … (pendulum, stays centered on interesting columns)
const PAN_POSITIONS = [0, -380, -760, -380];
// PAN_STEPS is the count of positions in the sequence
const PAN_STEP_COUNT = PAN_POSITIONS.length; // 4

// ─── Mock prospect data ───────────────────────────────────────────────────────

type MockProspect = {
  id: string;
  firstName: string;
  company: string;
  niche: string;
  value: string;
  valueNum: number;
  stage: string;
  temperature: "frio" | "morno" | "quente";
  followup?: string;
  nextStep?: string;
  nextUrgency?: "critical" | "high" | "medium" | "low";
};

const PROSPECTS: MockProspect[] = [
  // prospectar
  { id: "p1", firstName: "Bella Modas",        company: "Bella Modas",        niche: "Moda",        value: "R$ 1.200/mês",  valueNum: 1200,  stage: "prospectar",    temperature: "morno",  followup: undefined,  nextStep: "Enviar DM",       nextUrgency: "medium" },
  { id: "p2", firstName: "Tech Inovação",       company: "Tech Inovação",       niche: "SaaS",        value: "R$ 3.500/mês",  valueNum: 3500,  stage: "prospectar",    temperature: "frio",   followup: undefined,  nextStep: "Pesquisar perfil", nextUrgency: "low" },
  // abordar
  { id: "p3", firstName: "Clínica Saúde+",      company: "Clínica Saúde+",      niche: "Saúde",       value: "R$ 2.800/mês",  valueNum: 2800,  stage: "abordar",       temperature: "quente", followup: "hoje",     nextStep: "Follow-up",       nextUrgency: "high" },
  // nao_respondeu
  { id: "p4", firstName: "Gourmet House",        company: "Gourmet House",        niche: "Gastronomia", value: "R$ 1.800/mês",  valueNum: 1800,  stage: "nao_respondeu", temperature: "morno",  followup: "atrasado", nextStep: "Reabordar",       nextUrgency: "critical" },
  { id: "p6", firstName: "Prime Imóveis",        company: "Prime Imóveis",        niche: "Imobiliária", value: "R$ 2.200/mês",  valueNum: 2200,  stage: "nao_respondeu", temperature: "frio",   followup: undefined,  nextStep: "Aguardar",        nextUrgency: "low" },
  // oferta_feita
  { id: "p5", firstName: "Construtora Opus",     company: "Construtora Opus",     niche: "Construção",  value: "R$ 4.200/mês",  valueNum: 4200,  stage: "oferta_feita",  temperature: "quente", followup: undefined,  nextStep: "Aguardar resposta", nextUrgency: "medium" },
  // pensando
  { id: "p7", firstName: "Estúdio Criativo",     company: "Estúdio Criativo",     niche: "Design",      value: "R$ 1.500/mês",  valueNum: 1500,  stage: "pensando",      temperature: "morno",  followup: "hoje",     nextStep: "Lembrar amanhã", nextUrgency: "medium" },
  // fechou (outcome)
  { id: "p8", firstName: "Agência Nova Era",     company: "Agência Nova Era",     niche: "Marketing",   value: "R$ 3.000/mês",  valueNum: 3000,  stage: "fechou",        temperature: "quente", followup: undefined,  nextStep: undefined,         nextUrgency: "low" },
  // vender_novamente (outcome)
  { id: "p9", firstName: "Brasa Burger",         company: "Brasa Burger",         niche: "Alimentação", value: "R$ 900/mês",    valueNum: 900,   stage: "vender_novamente", temperature: "quente", followup: undefined, nextStep: undefined,        nextUrgency: "low" },
  // nao_quis (outcome)
  { id: "p10", firstName: "Digital Panda",       company: "Digital Panda",        niche: "Tecnologia",  value: "R$ 1.200/mês",  valueNum: 1200,  stage: "nao_quis",      temperature: "frio",   followup: undefined,  nextStep: undefined,         nextUrgency: "low" },
];

// Avatar gradient palette (matches fcUi.tsx AVATAR_HUES)
const AVATAR_HUES = [
  "from-sky-500/30 to-blue-600/30 text-sky-300",
  "from-violet-500/30 to-purple-600/30 text-violet-300",
  "from-emerald-500/30 to-teal-600/30 text-emerald-300",
  "from-amber-500/30 to-orange-600/30 text-amber-300",
  "from-rose-500/30 to-pink-600/30 text-rose-300",
  "from-cyan-500/30 to-sky-600/30 text-cyan-300",
];

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({ name, company, size = "sm" }: { name: string; company?: string; size?: "sm" | "md" }) {
  const hue = AVATAR_HUES[hashName(name) % AVATAR_HUES.length];
  const initials = (
    name.trim().charAt(0) +
    (company?.trim().charAt(0) || name.trim().split(" ")[1]?.charAt(0) || "")
  ).toUpperCase();
  const cls = size === "sm" ? "w-8 h-8 text-[11px] rounded-lg" : "w-10 h-10 text-sm rounded-xl";
  return (
    <div
      className={`${cls} bg-gradient-to-br ${hue} border border-white/10 flex items-center justify-center font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

// ─── Temperature dot ──────────────────────────────────────────────────────────

const TEMP_DOT: Record<string, string> = {
  frio:   "bg-slate-400",
  morno:  "bg-amber-400",
  quente: "bg-emerald-400",
};

// ─── ProspectCard ─────────────────────────────────────────────────────────────

function ProspectCard({
  p,
  lifted = false,
  showWin = false,
}: {
  p: MockProspect;
  lifted?: boolean;
  showWin?: boolean;
}) {
  const showAlert = p.nextStep && (p.nextUrgency === "critical" || p.nextUrgency === "high");
  const urgencyText =
    p.nextUrgency === "critical" ? "text-rose-400" :
    p.nextUrgency === "high" ? "text-amber-400" :
    p.nextUrgency === "medium" ? "text-sky-400" : "text-gray-500";
  const urgencyDot =
    p.nextUrgency === "critical" ? "bg-rose-400" :
    p.nextUrgency === "high" ? "bg-amber-400" :
    p.nextUrgency === "medium" ? "bg-sky-400" : "bg-gray-500";
  const fuStatus = p.followup === "atrasado" ? "overdue" : p.followup === "hoje" ? "today" : null;

  return (
    <div
      className={`rounded-xl bg-[#101013] border p-3 shadow-sm transition-all duration-300 ${
        lifted
          ? "-translate-y-1 shadow-xl border-white/20 ring-1 ring-primary/30"
          : "border-white/[0.07]"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Avatar name={p.firstName} company={p.company} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-white text-[13px] font-semibold truncate">{p.firstName}</span>
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${TEMP_DOT[p.temperature]}`} />
          </div>
          <span className="block text-gray-500 text-[11px] truncate">{p.niche}</span>
        </div>
      </div>

      {/* Win badge */}
      {showWin && (
        <div className="mt-2 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
          <HandCoins size={11} className="text-primary flex-shrink-0" />
          <span className="text-primary text-[10px] font-semibold">Em contato!</span>
        </div>
      )}

      {/* Next step pill / value / followup */}
      {!showWin && (showAlert || p.valueNum > 0 || fuStatus) && (
        <div className="flex items-center gap-2 mt-2.5 flex-wrap">
          {showAlert && p.nextStep && (
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${urgencyText}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${urgencyDot} ${p.nextUrgency === "critical" ? "animate-pulse" : ""}`} />
              {p.nextStep}
            </span>
          )}
          {p.valueNum > 0 && (
            <span className={`text-emerald-400/80 text-[11px] font-bold tabular-nums ${showAlert ? "ml-auto" : ""}`}>
              {p.value.split("/")[0]}
            </span>
          )}
          {fuStatus && !showAlert && (
            <span className={`ml-auto inline-flex items-center gap-1 text-[10px] font-semibold ${
              fuStatus === "overdue" ? "text-rose-400" : "text-amber-400"
            }`}>
              <CalendarClock size={10} />
              {fuStatus === "overdue" ? "Atrasado" : "Hoje"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ─── FunnelColumn ─────────────────────────────────────────────────────────────

function FunnelColumn({
  stage,
  prospects,
  muted = false,
  liftedId,
  winId,
}: {
  stage: string;
  prospects: MockProspect[];
  muted?: boolean;
  liftedId?: string;
  winId?: string;
}) {
  const meta = STAGE_META[stage];
  const Icon = meta.icon;
  const sum = prospects.reduce((s, p) => s + p.valueNum, 0);

  return (
    <div
      className={`flex flex-col rounded-2xl border transition-all duration-200 flex-shrink-0 ${
        `border-white/[0.05] ${muted ? "bg-transparent" : "bg-white/[0.015]"}`
      }`}
      style={{ width: 248 }}
    >
      {/* Column header */}
      <div className="px-3 pt-3 pb-2 flex items-center gap-2">
        <Icon size={12} className={muted ? "text-gray-600" : meta.text} />
        <span className={`text-[10px] font-bold uppercase tracking-wider ${muted ? "text-gray-600" : meta.text}`}>
          {meta.label}
        </span>
        <span className="ml-auto text-[10px] text-gray-500 font-bold bg-white/[0.05] px-1.5 py-0.5 rounded-md tabular-nums">
          {prospects.length}
        </span>
      </div>
      {sum > 0 && !muted && (
        <span className="px-3 -mt-1 pb-2 text-[10px] font-semibold text-emerald-400/70 tabular-nums">
          {sum.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
        </span>
      )}

      {/* Cards */}
      <div className="flex-1 px-2 pb-2 space-y-2">
        {prospects.length === 0 && (
          <div className="py-8 text-center rounded-xl border border-dashed border-white/[0.04]">
            <p className="text-gray-700 text-[10px]">Vazio</p>
          </div>
        )}
        {prospects.map((p) => (
          <ProspectCard
            key={p.id}
            p={p}
            lifted={p.id === liftedId}
            showWin={p.id === winId}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Sales-mode top bar ───────────────────────────────────────────────────────

const NAV_ITEMS_SALES = [
  { icon: Home,      label: "Hoje",       active: false },
  { icon: Kanban,    label: "Pipeline",   active: true  },
  { icon: BarChart3, label: "Resultados", active: false },
  { icon: Briefcase, label: "Serviços",   active: false },
];

function SalesModeTopBar() {
  return (
    <div className="flex items-center justify-between gap-3 px-4 h-12 bg-white/[0.02] rounded-2xl border border-white/[0.06]">
      {/* Left: back + brand */}
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-500">
          <ArrowLeft size={14} />
        </div>
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary/25 to-amber-500/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Sparkle size={11} className="text-primary" />
        </div>
        <div className="leading-tight min-w-0">
          <span className="block text-[12px] font-bold text-white truncate">Fábrica de Clientes</span>
          <span className="block text-[9px] text-gray-600 -mt-0.5">Modo vendas</span>
        </div>
      </div>

      {/* Center: nav */}
      <nav className="flex items-center gap-0.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.05]">
        {NAV_ITEMS_SALES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                item.active ? "bg-white/[0.09] text-white shadow-sm" : "text-gray-500"
              }`}
            >
              <Icon size={13} className={item.active ? "text-primary" : ""} />
              {item.label}
            </div>
          );
        })}
        <div className="flex items-center px-2 py-1.5 rounded-lg text-gray-500">
          <MoreHorizontal size={13} />
        </div>
      </nav>

      {/* Right: daily goal + CTA */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <Flame size={11} className="text-primary" />
          <div className="w-14 h-1 rounded-full bg-white/[0.07] overflow-hidden">
            <div className="h-full w-3/5 rounded-full bg-primary transition-all duration-500" />
          </div>
          <span className="text-[10px] font-bold tabular-nums text-primary">3/5</span>
        </div>
        <div className="flex items-center gap-1 pl-2.5 pr-3 py-1.5 rounded-xl bg-primary text-black text-[11px] font-bold shadow-lg shadow-primary/20">
          <Plus size={13} strokeWidth={2.5} />
          Novo prospect
        </div>
      </div>
    </div>
  );
}

// ─── Pipeline header ──────────────────────────────────────────────────────────

function PipelineHeader({ totalCount, pipelineValue }: { totalCount: number; pipelineValue: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <h1 className="text-xl font-bold text-white">Pipeline</h1>
        <p className="text-gray-500 text-[11px] mt-0.5">
          {totalCount} prospects
          <span className="text-gray-600"> · </span>
          <span className="text-emerald-400/80 font-semibold">
            {pipelineValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
          </span>
          <span className="text-gray-600"> em jogo</span>
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
        <div className="w-40 pl-8 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-gray-600 text-[11px]">
          Buscar prospect...
        </div>
      </div>

      {/* Funil/Lista toggle */}
      <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.07]">
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.09] text-white text-[11px] font-semibold shadow-sm">
          <Kanban size={12} /> Funil
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 text-gray-500 text-[11px] font-semibold">
          <List size={12} /> Lista
        </div>
      </div>

      {/* Novo button */}
      <div className="flex items-center gap-1 px-3 py-2 rounded-xl bg-primary text-black text-[11px] font-bold shadow-lg shadow-primary/15">
        <Plus size={13} strokeWidth={2.5} /> Novo
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Animation: horizontal pan (translateX) of the kanban row.
 *
 * Pan sequence (pendulum):
 *   step 0 → translateX(  0px)  — shows Prospectar … Pensando
 *   step 1 → translateX(-380px) — shows Abordar … Fechou
 *   step 2 → translateX(-760px) — shows Oferta feita … Não quis
 *   step 3 → translateX(-380px) — swings back to center
 *   → loops back to step 0
 *
 * Card lift accent: "Clínica Saúde+" (id p3, stage "abordar") lifts at step 1
 *   and shows a small badge at step 2 (visible when pan is centred on Abordar column).
 *
 * Reduced-motion: pinned to step 1 (−380px), showing a balanced mid-view.
 */
export default function MockProspeccao({ active }: { active?: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  // IntersectionObserver
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Step ticker — respects visibility, active, and reduced-motion
  useEffect(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setStep(1); // pin to mid-view
      return;
    }

    if (!visible || active === false) return;

    let i = step;
    const t = setInterval(() => {
      i = (i + 1) % PAN_STEP_COUNT;
      setStep(i);
    }, 2000);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, active]);

  // Pan translateX driven by current step
  const translateX = PAN_POSITIONS[step] ?? 0;

  // Card accent: lift p3 when centred on Abordar column (step 1)
  const liftedId = step === 1 ? "p3" : undefined;
  // Show win badge on p3 when at step 2 (pan moved past, still in column)
  const winId = step === 2 ? "p3" : undefined;

  // Stats
  const activeProspects = PROSPECTS.filter((p) => !OUTCOME_STAGES.has(p.stage));
  const totalCount = activeProspects.length;
  const pipelineValue = activeProspects.reduce((s, p) => s + p.valueNum, 0);

  // Prospects per stage
  const byStage = (stage: string) => PROSPECTS.filter((p) => p.stage === stage);

  return (
    <div ref={outerRef} className="flex flex-col gap-4">
      {/* Sales-mode top bar */}
      <SalesModeTopBar />

      <div className="space-y-4">
        {/* Pipeline header */}
        <PipelineHeader totalCount={totalCount} pipelineValue={pipelineValue} />

        {/*
          Kanban board — overflow hidden wrapper so columns beyond the right edge
          are simply cropped by the existing viewport overflow:hidden.
          The row itself is wider than the content area (~1984px for 8 columns).
        */}
        <div className="overflow-hidden">
          <div
            className="flex gap-2"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.85s cubic-bezier(0.45, 0, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {ALL_STAGES.map((stage) => (
              <FunnelColumn
                key={stage}
                stage={stage}
                prospects={byStage(stage)}
                muted={OUTCOME_STAGES.has(stage)}
                liftedId={stage === "abordar" ? liftedId : undefined}
                winId={stage === "abordar" ? winId : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
