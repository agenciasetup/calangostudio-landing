"use client";
/**
 * MockCriarCopy
 * Pixel-faithful replica of tools/copy_maker/Wizard.tsx from Calango.studio.
 *
 * Tool accent: orange-500 (FileText icon badge, format buttons, "Gerar tema" border,
 *              loading spinner, GERAR COPY button via btn-generate class).
 * Active sidebar key: "criar-copy" (Pencil, emerald-400 per Sidebar.tsx)
 *
 * Forge sequence (4 steps, loops, 1600ms interval):
 *   step 0 — IDLE: briefing filled, results area shows empty-state text
 *   step 1 — IDLE → button clicked: left panel unchanged, right panel: loading spinner
 *             + "ESCREVENDO COPY..." button label + skeleton cards (pulse)
 *   step 2 — RESULT: InstagramPostCard (Estático) fades/stagger in, toolbar visible
 *   step 3 — RESULT expanded: second card for Carrossel + "Gerar outra opção" button
 *   (loops back to 0)
 *
 * Post formats replicated: Estático, Carrossel, Reels.
 *
 * Lucide icons used:
 *   FileText, RefreshCw, Sparkles, Wand2, PencilRuler, Loader2,
 *   Palette, Save, Copy, Check,
 *   Heart, MessageCircle, Send, Bookmark (social icons on card)
 *   User, Users (ContextModeSelector buttons)
 *   Image (empty state icon)
 */
import {
  FileText,
  RefreshCw,
  Sparkles,
  Wand2,
  Loader2,
  Palette,
  Save,
  Copy,
  Check,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Image as ImageIcon,
  User,
  Users,
} from "lucide-react";
import { StudioTopBar } from "../StudioTopBar";
import { criarCopyPosts } from "../mockData";
import { useForge } from "../useForge";
import { useState } from "react";

// ─── Static brief data ────────────────────────────────────────────────────────

const BRIEF_DATA = {
  brand: "Calango Studio",
  niche: "Design e Tecnologia",
  theme: "Como a IA está mudando o design",
  summary:
    "Falar sobre agilidade, ferramentas novas, e como não perder a essência criativa mesmo com IA.",
  objective: "Comentar 'EU QUERO' para receber o link",
  tone: "Inspirador",
  funnelStage: "Topo",
};

// Post types from the real defaults.ts
const POST_TYPES = [
  { id: "post_estatico", label: "Estático" },
  { id: "carrossel", label: "Carrossel" },
  { id: "story_unico", label: "Story Único" },
  { id: "sequencia_story", label: "Seq. Story" },
  { id: "reels", label: "Reels" },
] as const;

// Extended copy for the result cards (beyond what's in mockData)
const RESULT_CARDS = [
  {
    brand: "Calango Studio",
    kind: "headline",
    content: `**A IA não roubou o seu emprego.**\n\nEla roubou as partes chatas — e devolveu o seu tempo para criar.\n\nDesigners que ainda recusam IA vão competir com designers que usam IA. Escolha com quem você quer competir.\n\n_Comentem 'EU QUERO' para receber o link_ 👇`,
  },
  {
    brand: "Calango Studio",
    kind: "body",
    title: "Card 2",
    content: `**3 horas virou 15 minutos.**\n\nEssa é a diferença entre fazer um briefing na mão e usar IA para estruturar. Não é magia — é processo.\n\nE processo é o que separa quem cresce de quem só trabalha muito.`,
  },
];

// ─── CopyButton (mirrors ui.tsx) ─────────────────────────────────────────────

function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        void navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-zinc-300 transition-all border border-white/10"
    >
      {copied ? (
        <Check size={14} className="text-green-400" />
      ) : (
        <Copy size={14} />
      )}
      {copied ? "Copiado!" : label}
    </button>
  );
}

// ─── FormattedText (mirrors ui.tsx) ──────────────────────────────────────────

function FormattedText({ text, kind }: { text: string; kind?: string }) {
  const lines = text.split("\n");
  return (
    <div
      className={`flex flex-col gap-4 w-full ${
        kind === "headline"
          ? "text-center items-center justify-center h-full"
          : "text-left justify-center h-full"
      }`}
    >
      {lines.map((line, i) => {
        if (!line.trim()) return null;
        let isHeading = false;
        let content = line;
        if (line.startsWith("# ")) {
          isHeading = true;
          content = line.slice(2);
        } else if (line.startsWith("## ")) {
          isHeading = true;
          content = line.slice(3);
        }
        const isMainHeadline = (i === 0 && kind === "headline") || isHeading;
        const parts = content.split(/(\*\*.*?\*\*|\*.*?\*)/g);
        return (
          <p
            key={i}
            className={`${
              isMainHeadline
                ? "font-display text-2xl uppercase leading-tight text-white"
                : "text-sm leading-relaxed text-[#eeeeee]"
            }`}
          >
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="font-black text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith("*") && part.endsWith("*")) {
                return (
                  <em key={j} className="italic text-zinc-300">
                    {part.slice(1, -1)}
                  </em>
                );
              }
              return <span key={j}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

// ─── InstagramPostCard (mirrors ui.tsx) ──────────────────────────────────────

function InstagramPostCard({
  brand,
  content,
  title,
  kind,
}: {
  brand: string;
  content: string;
  title?: string;
  kind?: string;
}) {
  return (
    <div className="glass-panel border border-white/10 rounded-3xl overflow-hidden bg-black/40 max-w-sm w-full mx-auto shadow-2xl flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-zinc-900 border border-black" />
          </div>
          <span className="text-sm font-bold text-white">{brand}</span>
        </div>
        {title && (
          <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">
            {title}
          </span>
        )}
      </div>
      <div className="aspect-square bg-[#222222] text-[#eeeeee] flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
        <FormattedText text={content} kind={kind} />
      </div>
      <div className="p-4 flex flex-col gap-4 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <Heart size={22} />
            <MessageCircle size={22} />
            <Send size={22} />
          </div>
          <Bookmark size={22} className="text-white" />
        </div>
        <div className="flex justify-end">
          <CopyButton text={content} />
        </div>
      </div>
    </div>
  );
}

// ─── ReelsCard (mirrors ui.tsx) ──────────────────────────────────────────────

function ReelsCard({
  brand,
  content,
  title,
  kind,
}: {
  brand: string;
  content: string;
  title?: string;
  kind?: string;
}) {
  return (
    <div className="glass-panel border border-white/10 rounded-3xl overflow-hidden bg-black/40 w-full shadow-2xl p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-zinc-900" />
          </div>
          <span className="text-sm font-bold text-white">{brand} - Script Reels</span>
        </div>
        {title && (
          <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">
            {title}
          </span>
        )}
      </div>
      <div className="bg-[#222222] p-5 rounded-2xl border border-white/5 text-[#eeeeee]">
        <FormattedText text={content} kind={kind} />
      </div>
      <div className="flex justify-end">
        <CopyButton text={content} label="Copiar Script" />
      </div>
    </div>
  );
}

// ─── Left briefing panel (inspector) ─────────────────────────────────────────

function BriefingPanel({
  isGenerating,
  activeFormat,
}: {
  isGenerating: boolean;
  activeFormat: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden">
      {/* Scrollable content */}
      <div className="flex-1 p-4 space-y-5">
        {/* Formato */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
            Formato
          </label>
          <div className="grid grid-cols-2 gap-2">
            {POST_TYPES.map((pt) => {
              const active = activeFormat === pt.id;
              return (
                <button
                  key={pt.id}
                  type="button"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all ${
                    active
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-white/[0.08] bg-white/[0.02]"
                  }`}
                >
                  <FileText
                    size={13}
                    className={`shrink-0 ${active ? "text-orange-400" : "text-zinc-500"}`}
                  />
                  <span
                    className={`text-[11px] font-bold truncate ${
                      active ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {pt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contexto de criação */}
        <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-black/20 space-y-3">
          <div>
            <p className="text-sm font-bold text-white">
              Contexto de criação{" "}
              <span className="text-zinc-500 font-normal">(opcional)</span>
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              Selecione um contexto para personalizar a copy com o perfil
              completo do cliente.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all bg-orange-500/10 border-orange-500/30 text-orange-400"
            >
              <User size={14} /> Para mim
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all bg-white/5 border-white/10 text-white/50"
            >
              <Users size={14} /> Para meu cliente
            </button>
          </div>
        </div>

        {/* Marca + Nicho */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase">
              Marca / Especialista *
            </label>
            <input
              readOnly
              type="text"
              className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
              value={BRIEF_DATA.brand}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase">
              Nicho *
            </label>
            <input
              readOnly
              type="text"
              className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
              value={BRIEF_DATA.niche}
            />
          </div>
        </div>

        {/* Gerar tema */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-white/10 flex-1" />
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider"
          >
            <Wand2 size={14} />
            Gerar tema
            <span className="text-[9px] text-orange-500/60 font-normal ml-1">
              15cc
            </span>
          </button>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Tema Principal */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase">
            Tema Principal *
          </label>
          <input
            readOnly
            type="text"
            className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
            value={BRIEF_DATA.theme}
          />
        </div>

        {/* Resumo */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase">
            Resumo / Tópicos *
          </label>
          <textarea
            readOnly
            className="w-full glass-input p-3.5 rounded-2xl text-white text-sm resize-none"
            style={{ minHeight: 90 }}
            value={BRIEF_DATA.summary}
          />
        </div>

        {/* Objetivo */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase">
            Objetivo (CTA) *
          </label>
          <input
            readOnly
            type="text"
            className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
            value={BRIEF_DATA.objective}
          />
        </div>

        {/* Tom + Funil */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase">
              Tom de Voz
            </label>
            <div className="w-full glass-input p-3.5 rounded-2xl text-white text-sm">
              {BRIEF_DATA.tone}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase">
              Estágio do Funil
            </label>
            <div className="w-full glass-input p-3.5 rounded-2xl text-white text-sm">
              {BRIEF_DATA.funnelStage}
            </div>
          </div>
        </div>
      </div>

      {/* Footer: GERAR COPY */}
      <div className="shrink-0 p-3 border-t border-white/[0.06] bg-black/40">
        <button className="btn-generate w-full" type="button">
          {isGenerating ? (
            <>
              <RefreshCw size={20} className="animate-spin" /> ESCREVENDO COPY...
            </>
          ) : (
            <>
              <Sparkles size={20} /> GERAR COPY
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Skeleton copy cards (generating state) ───────────────────────────────────

function SkeletonCards() {
  return (
    <div className="flex gap-4 mt-4 opacity-30 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-44 h-56 bg-white/5 rounded-3xl border border-white/10 animate-pulse"
        />
      ))}
    </div>
  );
}

// ─── Result toolbar ───────────────────────────────────────────────────────────

function ResultToolbar() {
  return (
    <div className="shrink-0 flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.06] overflow-x-auto">
      <CopyButton text="copy" label="Copiar tudo" />
      <button
        type="button"
        className="shrink-0 px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-400 text-[11px] font-bold border border-pink-500/20 flex items-center gap-1.5"
      >
        <Palette size={13} /> Gerar imagem
      </button>
      <button
        type="button"
        className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/20 flex items-center gap-1.5"
      >
        <Save size={13} /> Salvar
      </button>
      <button
        type="button"
        className="shrink-0 ml-auto px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-[11px] font-bold border border-white/10 flex items-center gap-1.5"
      >
        <RefreshCw size={13} /> Refazer
      </button>
    </div>
  );
}

// ─── Right results area ───────────────────────────────────────────────────────

type ResultState = "empty" | "generating" | "result";

function ResultsArea({
  state,
  showCarousel,
}: {
  state: ResultState;
  showCarousel: boolean;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden">
      {state === "result" && <ResultToolbar />}

      <div className="flex-1 p-5">
        {state === "empty" && (
          <div className="h-full flex flex-col items-center justify-center text-center px-6" style={{ minHeight: 400 }}>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <FileText size={28} className="text-zinc-600" />
            </div>
            <h3 className="text-base font-bold text-white">
              Sua copy aparece aqui
            </h3>
            <p className="text-sm text-zinc-500 mt-1 max-w-xs leading-relaxed">
              Escolha o formato, preencha o briefing ao lado e clique em GERAR
              COPY. Texto humano, sem cara de robô.
            </p>
          </div>
        )}

        {state === "generating" && (
          <div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            style={{ minHeight: 400 }}
          >
            <RefreshCw size={44} className="animate-spin text-orange-500" />
            <div>
              <h3 className="text-lg font-bold text-white">
                Escrevendo a copy...
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                Caprichando no texto e tirando a cara de robô.
              </p>
            </div>
            <SkeletonCards />
          </div>
        )}

        {state === "result" && (
          <div className="space-y-8">
            {/* Opção 1 header */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                Opção 1
              </span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* Estático card */}
            <div className="flex justify-center">
              <InstagramPostCard
                brand={RESULT_CARDS[0].brand}
                content={RESULT_CARDS[0].content}
                kind={RESULT_CARDS[0].kind}
              />
            </div>

            {/* Carrossel preview (shows on step 3) */}
            {showCarousel && (
              <>
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-px bg-white/10 flex-1" />
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                    Versão Carrossel
                  </span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <div className="flex gap-5 overflow-hidden">
                  {RESULT_CARDS.map((card, i) => (
                    <div key={i} className="shrink-0 w-64">
                      <InstagramPostCard
                        brand={card.brand}
                        content={card.content}
                        title={`Card ${i + 1}`}
                        kind={card.kind}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Gerar outra opção */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase flex items-center gap-2"
              >
                <Sparkles size={16} className="text-orange-500" /> Gerar outra
                opção
              </button>
            </div>

            {/* Reels card below */}
            {showCarousel && (
              <div className="space-y-3 max-w-xl mx-auto">
                <ReelsCard
                  brand="Calango Studio"
                  title="GANCHO"
                  kind="gancho"
                  content={`**Você ainda faz design sem IA?**\n\nEntão você está competindo de faca contra metralhadora.\n\nNão é sobre substituição — é sobre potência. Os designers que dominam IA não trabalham mais: trabalham melhor.\n\n_Solta nos comentários como você tá usando IA hoje._ 👇`}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Forge sequence (4 steps, 1600ms each, loops):
 *   0 → IDLE — briefing filled, results area empty-state text
 *   1 → GENERATING — ESCREVENDO COPY... button + spinner + skeleton cards
 *   2 → RESULT — Estático post card fades in, toolbar visible
 *   3 → RESULT EXPANDED — Carrossel cards + Reels card + "Gerar outra opção"
 *   (loops to 0)
 */
export default function MockCriarCopy({ active }: { active?: boolean }) {
  const { step, ref } = useForge(4, { active, loop: true, interval: 1600 });

  const isGenerating = step === 1;
  const isResult = step === 2 || step === 3;
  const showCarousel = step === 3;

  const activeFormat =
    step === 3 ? "carrossel" : step >= 2 ? "post_estatico" : "post_estatico";

  const resultState: ResultState = isGenerating
    ? "generating"
    : isResult
    ? "result"
    : "empty";

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
      {/* Tool accent: orange-500 (matches real Wizard.tsx header badge) */}
      <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
        <FileText size={17} />
      </div>
      <div className="min-w-0 mr-auto">
        <h1 className="font-display font-bold text-white text-[15px] leading-tight">
          Criar Post
        </h1>
        <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest hidden sm:block">
          {POST_TYPES.find((p) => p.id === activeFormat)?.label ?? "Copy"}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <StudioTopBar titleSlot={titleSlot} />

      <div
        className="grid grid-cols-[minmax(300px,380px)_1fr] gap-3"
        style={{ minHeight: 640 }}
      >
        {/* Left: briefing inspector */}
        <BriefingPanel isGenerating={isGenerating} activeFormat={activeFormat} />

        {/* Right: results */}
        <ResultsArea state={resultState} showCarousel={showCarousel} />
      </div>
    </div>
  );
}
