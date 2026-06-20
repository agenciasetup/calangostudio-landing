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
 *   3. Kanban columns (5 active stages: Prospectar, Abordar, Não respondeu, Oferta feita,
 *      Pensando) + divider + 3 outcome stages (Fechou, Vender de novo, Não quis)
 *
 * Stage colors match fcUi.tsx STAGE_META exactly.
 *
 * Forge sequence (5 steps, 1500ms, loops):
 *   0 — IDLE:    Pipeline loaded, all cards visible, no animation active
 *   1 — LIFT:    "Clínica Saúde+" card in "Abordar" column lifts (scale + opacity highlight)
 *   2 — MOVE:    Card transitions into "Oferta feita" column (opacity in source drops, target glows)
 *   3 — LAND:    Card appears fully in "Oferta feita", counter on source column -1, target +1
 *   4 — SETTLE:  Back to idle with new state, brief green "win" badge shows on moved card
 *   (loops back to 0)
 *
 * Lucide icons (matching real PipelinePage + SalesModeLayout + fcUi):
 *   Search, Send, Hourglass, HandCoins, Brain, XCircle, CheckCircle2, Repeat,
 *   ArrowLeft, Sparkle, Home, Kanban, BarChart3, Briefcase, Plus, CalendarClock,
 *   Users, Flame, MoreHorizontal, Target, List
 *
 * NO overflow-y-auto — FitFrame scales whole window; kanban columns lay out fully.
 */

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
  Target,
  List,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { prospectosList } from "../mockData";
import { useForge } from "../useForge";

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

const ACTIVE_STAGES = ["prospectar", "abordar", "nao_respondeu", "oferta_feita", "pensando"];
const OUTCOME_STAGES = ["fechou", "vender_novamente", "nao_quis"];

// ─── Mock prospect data extended from prospectosList ─────────────────────────
// The mockData prospectosList has 5 prospects spread across 3 stages.
// Map them into the real 8-stage pipeline. We add more cards to make the
// kanban look populated and realistic.

type MockProspect = {
  id: string;
  firstName: string;
  company: string;
  niche: string;
  value: string;      // display string
  valueNum: number;   // numeric for totals
  stage: string;
  temperature: "frio" | "morno" | "quente";
  followup?: string;  // "hoje" | "atrasado" | undefined
  nextStep?: string;  // short label
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

// ─── Avatar (mirrors fcUi.tsx Avatar component) ───────────────────────────────

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

// ─── Temperature dot (mirrors TEMP_META) ─────────────────────────────────────

const TEMP_DOT: Record<string, string> = {
  frio:   "bg-slate-400",
  morno:  "bg-amber-400",
  quente: "bg-emerald-400",
};

// ─── ProspectCard (mirrors PipelinePage FunnelColumn card) ───────────────────

function ProspectCard({
  p,
  lifted = false,
  faded = false,
  highlighted = false,
  showWin = false,
}: {
  p: MockProspect;
  lifted?: boolean;
  faded?: boolean;
  highlighted?: boolean;
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
        lifted ? "-translate-y-1 shadow-xl border-white/20 ring-1 ring-primary/30" :
        highlighted ? "border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-lg shadow-cyan-500/10" :
        "border-white/[0.07]"
      } ${faded ? "opacity-25 scale-95" : "opacity-100"}`}
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
        <div className="mt-2 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <HandCoins size={11} className="text-cyan-400 flex-shrink-0" />
          <span className="text-cyan-400 text-[10px] font-semibold">Oferta enviada!</span>
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

// ─── FunnelColumn (mirrors PipelinePage FunnelColumn) ────────────────────────

function FunnelColumn({
  stage,
  prospects,
  isOver = false,
  muted = false,
  liftedId,
  fadedId,
  highlightedId,
  winId,
}: {
  stage: string;
  prospects: MockProspect[];
  isOver?: boolean;
  muted?: boolean;
  liftedId?: string;
  fadedId?: string;
  highlightedId?: string;
  winId?: string;
}) {
  const meta = STAGE_META[stage];
  const Icon = meta.icon;
  const sum = prospects.reduce((s, p) => s + p.valueNum, 0);

  return (
    <div
      className={`flex flex-col flex-1 min-w-[140px] rounded-2xl border transition-all duration-200 ${
        isOver
          ? `${meta.border} ${meta.bg} ring-1 ring-inset ring-white/10`
          : `border-white/[0.05] ${muted ? "bg-transparent" : "bg-white/[0.015]"}`
      }`}
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
          <div className={`py-8 text-center rounded-xl border border-dashed transition-all ${
            isOver ? meta.border : "border-white/[0.04]"
          }`}>
            <p className="text-gray-700 text-[10px]">{isOver ? "Solte aqui" : "Vazio"}</p>
          </div>
        )}
        {prospects.map((p) => (
          <ProspectCard
            key={p.id}
            p={p}
            lifted={p.id === liftedId}
            faded={p.id === fadedId}
            highlighted={p.id === highlightedId}
            showWin={p.id === winId}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Sales-mode top bar (mirrors SalesModeLayout header) ──────────────────────

const NAV_ITEMS_SALES = [
  { icon: Home,     label: "Hoje",       active: false },
  { icon: Kanban,   label: "Pipeline",   active: true  },
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
        {/* Daily goal indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <Flame size={11} className="text-primary" />
          <div className="w-14 h-1 rounded-full bg-white/[0.07] overflow-hidden">
            <div className="h-full w-3/5 rounded-full bg-primary transition-all duration-500" />
          </div>
          <span className="text-[10px] font-bold tabular-nums text-primary">3/5</span>
        </div>
        {/* CTA */}
        <div className="flex items-center gap-1 pl-2.5 pr-3 py-1.5 rounded-xl bg-primary text-black text-[11px] font-bold shadow-lg shadow-primary/20">
          <Plus size={13} strokeWidth={2.5} />
          Novo prospect
        </div>
      </div>
    </div>
  );
}

// ─── Pipeline header (mirrors PipelinePage header) ────────────────────────────

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
 * Forge sequence (5 steps, 1500ms, loops):
 *   0 — IDLE:     Pipeline loaded, all cards in initial positions
 *   1 — LIFT:     "Clínica Saúde+" lifts in "Abordar" (highlighted, -translate-y, glow)
 *   2 — TRANSIT:  Card fades in source column (faded), target "Oferta feita" glows
 *   3 — LAND:     Card appears in "Oferta feita" (highlighted), "Abordar" count -1
 *   4 — SETTLE:   Win badge on moved card, columns normalize
 *   (loops to 0)
 */
export default function MockProspeccao({ active }: { active?: boolean }) {
  const { step, ref } = useForge(5, { active, loop: true, interval: 1500 });

  // The card that moves: "Clínica Saúde+" (id: p3), from "abordar" → "oferta_feita"
  const MOVING_CARD_ID = "p3";
  const MOVING_CARD = PROSPECTS.find((p) => p.id === MOVING_CARD_ID)!;

  // Build column data per step
  // step 0,1,2: card is in "abordar"; step 3,4: card is in "oferta_feita"
  const cardInSource = step < 3;
  const cardInTarget = step >= 3;

  const byStage = (stage: string): MockProspect[] => {
    return PROSPECTS.filter((p) => {
      if (p.id === MOVING_CARD_ID) {
        if (stage === "abordar") return cardInSource;
        if (stage === "oferta_feita") return cardInTarget;
        return false;
      }
      return p.stage === stage;
    });
  };

  // Animation states
  const liftedId    = step === 1 ? MOVING_CARD_ID : undefined;
  const fadedId     = step === 2 ? MOVING_CARD_ID : undefined;
  const highlightedId = step === 3 ? MOVING_CARD_ID : undefined;
  const winId       = step === 4 ? MOVING_CARD_ID : undefined;

  // Column glow: "oferta_feita" glows when card is about to land
  const ofertaOver  = step === 2;

  // Total prospects (active pipeline only, not outcomes)
  const activeProspects = PROSPECTS.filter((p) => !STAGE_META[p.stage]?.outcome);
  const totalCount = activeProspects.length;
  const pipelineValue = activeProspects.reduce((s, p) => s + p.valueNum, 0);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {/* Sales-mode top bar (folded in from topbar slot) */}
      <SalesModeTopBar />

      <div className="space-y-4">
        {/* Pipeline header */}
        <PipelineHeader totalCount={totalCount} pipelineValue={pipelineValue} />

        {/* Kanban board — all columns side by side, no overflow */}
        <div className="flex gap-2">
          {/* Active stages */}
          {ACTIVE_STAGES.map((stage) => (
            <FunnelColumn
              key={stage}
              stage={stage}
              prospects={byStage(stage)}
              isOver={stage === "oferta_feita" && ofertaOver}
              liftedId={stage === "abordar" ? liftedId : undefined}
              fadedId={stage === "abordar" ? fadedId : undefined}
              highlightedId={stage === "oferta_feita" ? highlightedId : undefined}
              winId={stage === "oferta_feita" ? winId : undefined}
            />
          ))}

          {/* Separator */}
          <div className="w-px bg-white/[0.06] mx-0.5 flex-shrink-0 self-stretch" />

          {/* Outcome stages */}
          {OUTCOME_STAGES.map((stage) => (
            <FunnelColumn
              key={stage}
              stage={stage}
              prospects={byStage(stage)}
              muted
            />
          ))}
        </div>
      </div>
    </div>
  );
}
