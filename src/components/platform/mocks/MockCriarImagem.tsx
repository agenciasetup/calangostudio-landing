"use client";
/**
 * MockCriarImagem
 * Pixel-faithful replica of tools/imagem_criativa/Wizard.tsx from Calango.studio.
 *
 * Tool accent: pink-400 / pink-500 icon badge (header palette icon).
 * Action accent: bg-primary (orange) — GERAR button, Loader2 spinner, progress bar.
 *
 * Forge sequence (loops):
 *   step 0 — Dashboard idle (no selection)
 *   step 1 — Dashboard: "Hero Style" card selected/highlighted
 *   step 2 — Config: refs loaded (✓ 4 OK thumbnails), stage EMPTY + blurred ghost
 *   step 3 — Config: GENERATING — orange Loader2 + progress bar over blurred ghost, button "GERANDO…"
 *   step 4 — Config: RESULT — contained image + NANO BANANA PRO badge + toolbar + thumbstrip below
 */
import Image from "next/image";
import {
  Palette,
  Cat,
  Car,
  Zap,
  User,
  Blocks,
  Landmark,
  ArrowLeft,
  Loader2,
  Wand2,
  Edit2,
  ChevronRight,
  Image as ImageIcon,
  Download,
  HardDrive,
  Store,
  CheckCircle2,
  Users,
  RefreshCw,
  Copy,
} from "lucide-react";
import { StudioTopBar } from "../StudioTopBar";
import { criarImagemStyles } from "../mockData";
import { useForge } from "../useForge";

// ─── Constants (mirrors real defaults.ts) ─────────────────────────────────────

const HERO_POWERS = [
  "Energia",
  "Eletricidade",
  "Fogo",
  "Água",
  "Vento",
  "Terra",
  "Telecinese",
  "Magnetismo",
  "Mutação",
  "Voar",
  "Psíquico",
] as const;

// 4 reference thumbnails — homem_foto.jpeg repeated (same person, real matched refs come later)
const REF_THUMBS = [
  "/images/resultados/homem_foto.jpeg",
  "/images/resultados/homem_foto.jpeg",
  "/images/resultados/homem_foto.jpeg",
  "/images/resultados/homem_foto.jpeg",
] as const;

// Generated result + blurred ghost background
const RESULT_IMAGE = "/images/resultados/hero_criativo.jpg";
const BG_GHOST_URL = RESULT_IMAGE; // same image used as desfocado ghost

// ─── Style cards data ─────────────────────────────────────────────────────────

const STYLE_CARDS = [
  {
    key: "animal",
    title: "Animal Art",
    desc: "Texturas animais, pelos e cenários fantásticos com profundidade real.",
    icon: Cat,
    colorClass: "bg-amber-500 text-black",
  },
  {
    key: "car",
    title: "Car Design",
    desc: "CGI publicitário de alto nível com iluminação dinâmica e reflexos automotivos premium.",
    icon: Car,
    colorClass: "bg-blue-500 text-white",
  },
  {
    key: "hero",
    title: "Hero Style",
    desc: "Pôsteres de heróis épicos com efeitos de energia e composição cinematográfica.",
    icon: Zap,
    colorClass: "bg-red-500 text-white",
  },
  {
    key: "business",
    title: "Business Style",
    desc: "Retratos ultra realistas para empreendedores com estética de estúdio profissional.",
    icon: User,
    colorClass: "bg-indigo-500 text-white",
  },
  {
    key: "craft",
    title: "Craft Style",
    desc: "Você realista dentro de um mundo Minecraft (cenário e objetos em voxel).",
    icon: Blocks,
    colorClass: "bg-emerald-500 text-black",
  },
  {
    key: "classic",
    title: "Classic Style",
    desc: "Você realista dentro de uma obra clássica (Renascimento/Barroco) com atmosfera de museu.",
    icon: Landmark,
    colorClass: "bg-yellow-500 text-black",
  },
] as const;

function getStyleImage(key: string): string {
  const found = criarImagemStyles.find((s) => s.key === key);
  return found?.image ?? `/images/resultados/${key}_criativo.jpg`;
}

// ─── Dashboard (style picker grid) ───────────────────────────────────────────

function StyleDashboard({ selectedKey }: { selectedKey?: string }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="p-3 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20 shadow-glow flex-shrink-0">
            <Palette size={24} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3 group/title cursor-pointer overflow-hidden">
              <div className="min-w-0">
                <h1 className="text-xl md:text-3xl font-display font-bold text-white tracking-tighter truncate">
                  Nova Obra Criativa
                </h1>
              </div>
              <Edit2
                size={14}
                className="text-zinc-600 opacity-60 flex-shrink-0 mt-1.5"
              />
            </div>
            <p className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest font-black truncate">
              Inteligência Calango PRO
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 overflow-hidden pb-2">
        {STYLE_CARDS.map((card) => {
          const Icon = card.icon;
          const isSelected = selectedKey === card.key;
          return (
            <button
              key={card.key}
              className={`w-full text-left rounded-[28px] wiz-section p-0 transition-all duration-500 group relative overflow-hidden flex flex-col h-full
                ${
                  isSelected
                    ? "border-pink-400/60 ring-2 ring-pink-400/50 ring-offset-1 ring-offset-transparent -translate-y-1"
                    : "hover:border-primary/40"
                }`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <Image
                  src={getStyleImage(card.key)}
                  alt={card.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${isSelected ? "scale-110" : "group-hover:scale-110"}`}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div
                  className={`absolute bottom-3 left-3 w-10 h-10 rounded-2xl flex items-center justify-center ${card.colorClass} shadow-glow`}
                >
                  <Icon size={20} />
                </div>
                {isSelected && (
                  <div className="absolute inset-0 bg-pink-500/10 flex items-center justify-center">
                    <div className="bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Selecionado
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 flex-1">
                <h3 className="wiz-title text-base mb-1">{card.title}</h3>
                <p className="wiz-subtitle text-[11px] line-clamp-2">
                  {card.desc}
                </p>
                <div
                  className={`mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary
                    ${isSelected ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
                    transition-all`}
                >
                  Abrir Estúdio <ChevronRight size={12} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Blurred Ghost Background ─────────────────────────────────────────────────
// Replicated from PreviewStage.tsx: blur(40px) brightness(0.28) saturate(1.1) scale(1.15)

function GhostBackground({ url }: { url: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(40px) brightness(0.28) saturate(1.1)",
        transform: "scale(1.15)",
      }}
    />
  );
}

// ─── Config+Preview screen ────────────────────────────────────────────────────

type PreviewState = "empty" | "generating" | "result";

function ConfigPreviewScreen({
  previewState,
  progress,
}: {
  previewState: PreviewState;
  progress: number;
}) {
  const isGenerating = previewState === "generating";
  const isResult = previewState === "result";

  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex flex-col md:grid md:grid-cols-[minmax(280px,340px)_1fr] gap-2 md:gap-3 flex-1 min-h-0 items-stretch">

        {/* ─── INSPECTOR ─────────────────────────────────────────── */}
        <div className="flex flex-col min-h-0 gap-2 md:gap-3 relative z-10 rounded-t-[24px] md:rounded-none border-t border-white/15 md:border-0 bg-black/40 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-0 shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_-18px_38px_rgba(0,0,0,0.6)] md:shadow-none px-3 pt-3 md:p-0">
          <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-1 md:pr-2 space-y-4">
            <div className="space-y-5 md:space-y-6 md:glass-panel md:p-6 md:rounded-[32px] md:border md:border-white/5 md:bg-black/20">

              {/* 1. CONTEXTO DE CRIAÇÃO (OPCIONAL) ───────────────── */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Contexto de Criação (Opcional)
                </label>
                <div className="flex items-center gap-2">
                  {/* Para mim — "self" selected (orange accent) */}
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all bg-primary/15 border-primary/30 text-primary shadow-[0_0_15px_rgba(255,170,0,0.1)]"
                  >
                    <User size={14} />
                    Para mim
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all bg-white/5 border-white/10 text-white/50"
                  >
                    <Users size={14} />
                    Para meu cliente
                  </button>
                </div>
              </div>

              {/* 2. REFERÊNCIAS DE IDENTIDADE ─────────────────────── */}
              {/* Green "✓ 4 OK" header, bordered box with 4 face thumbnails + "+1 REF (4/3)" pill */}
              <div className="space-y-2">
                {/* Label row — mirrors wiz-label-row */}
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-zinc-500">Referências de Identidade</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <CheckCircle2 size={10} /> 4 OK
                  </span>
                </div>
                {/* Bordered dropzone with 4 thumbnails in a horizontal row */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-white/[0.03] p-3">
                  <div className="flex gap-2 items-center">
                    {REF_THUMBS.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0"
                      >
                        <Image
                          src={src}
                          alt="Referência"
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* "+1 REF (4/3)" pill */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-zinc-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    +1 REF (4/3)
                  </button>
                </div>
              </div>

              {/* 3. ESTÉTICA (OPCIONAL) ──────────────────────────── */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Estética (Opcional)
                </label>
                <input
                  readOnly
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
                  value="Armadura negra com detalhes dourados"
                />
              </div>

              {/* 4. PODERES (SELECIONE) ─────────────────────────── */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 block">
                  Poderes (Selecione)
                </label>
                <div className="flex flex-wrap gap-2">
                  {HERO_POWERS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold border transition-all
                        ${
                          p === "Energia"
                            ? "bg-red-500 border-red-500 text-white"
                            : "bg-white/5 border-white/10 text-gray-500"
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. ROUPA DO HERÓI ──────────────────────────────── */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Roupa do Herói
                </label>
                <input
                  readOnly
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
                  value="Armadura negra com detalhes dourados"
                />
              </div>

            </div>
          </div>

          {/* Generate button pinned at bottom */}
          <div className="shrink-0 space-y-3 pb-1">
            <button className="btn-generate" type="button">
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> GERANDO…
                </>
              ) : (
                <>
                  <Wand2 size={18} /> GERAR IMAGEM
                </>
              )}
            </button>
            {/* Show action bar in result state */}
            {isResult && (
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold"
                >
                  <RefreshCw size={12} /> Tentar novamente
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold"
                >
                  <Copy size={12} /> +3 Variações
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ─── PREVIEW STAGE ─────────────────────────────────────── */}
        {/*
          Fills the right column wide — NOT a centered 4:5 box.
          Mirrors PreviewStage with className="!h-full !max-h-none flex-1"
          wiz-preview overridden to fill column: h-full, no fixed aspect-ratio.
        */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0 h-[65%] md:h-auto">
          {/* Stage container — wide, fills flex column */}
          <div
            className="flex-1 relative rounded-[24px] border border-white/[0.08] bg-black/55 overflow-hidden flex items-center justify-center min-h-0"
          >
            {/* Blurred dark ghost — shown when no result (empty OR generating) */}
            {!isResult && (
              <GhostBackground url={BG_GHOST_URL} />
            )}

            {isResult ? (
              /* Result state: contained image */
              <>
                <img
                  src={RESULT_IMAGE}
                  alt="Imagem gerada"
                  className="relative z-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "18px",
                  }}
                />
                {/* Badge: top-left — green NANO BANANA PRO */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-[9px] font-black uppercase tracking-widest">
                    NANO BANANA PRO
                  </span>
                </div>
                {/* Top-right toolbar: download + DRIVE + amber save */}
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur text-white hover:bg-primary hover:text-black transition"
                    title="Baixar imagem"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur text-white hover:bg-primary hover:text-black transition text-[9px] font-black"
                    title="Salvar no Drive"
                  >
                    <HardDrive size={15} />
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition"
                    title="Vender imagem"
                  >
                    <Store size={17} />
                  </button>
                </div>
              </>
            ) : isGenerating ? (
              /* Generating state: orange spinner + label + orange progress bar */
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6 w-full max-w-xs">
                <Loader2 className="animate-spin text-primary" size={40} />
                <div className="w-full">
                  <p className="text-white font-bold text-sm mb-3">
                    Gerando obra de arte…
                  </p>
                  {/* Orange progress bar — track h-1.5 bg-white/10, fill bg-primary */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Empty state */
              <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <ImageIcon className="text-zinc-600" size={26} />
                </div>
                <div>
                  <p className="text-zinc-300 font-bold text-sm">
                    Estúdio de criação vazio
                  </p>
                  <p className="text-zinc-500 text-[12px] mt-1 max-w-[240px]">
                    Configure os controles e toque em Gerar imagem.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Below stage: result thumbnail + hint */}
          <div className="shrink-0 flex items-center gap-3 hidden md:flex">
            {isResult ? (
              <>
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 relative">
                  <Image
                    src={RESULT_IMAGE}
                    alt="Resultado"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <p className="text-zinc-500 text-[11px]">
                  Suas gerações vão aparecer aqui.
                </p>
              </>
            ) : (
              <p className="text-zinc-600 text-[11px] pl-1">
                Suas gerações vão aparecer aqui.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Forge sequence (5 steps, loops):
 *   0 → Dashboard idle (no selection)
 *   1 → Dashboard: Hero Style card selected
 *   2 → Config: refs loaded (✓ 4 OK), stage EMPTY with blurred ghost
 *   3 → Config: GENERATING — orange spinner + progress bar + "GERANDO…" button
 *   4 → Config: RESULT — contained image + NANO BANANA PRO badge + toolbar + thumbstrip
 */
export default function MockCriarImagem({ active }: { active?: boolean }) {
  // 5 steps, 1600ms per step for readable pacing
  const { step, ref } = useForge(5, { active, loop: true, interval: 1600 });

  const isDashboard = step <= 1;

  const previewState: PreviewState =
    step === 3 ? "generating" : step === 4 ? "result" : "empty";

  // Progress value for generating step
  const progress = step === 3 ? 65 : 0;

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
      {/* Header icon badge: pink/magenta (not orange) */}
      <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center flex-shrink-0">
        <Palette size={17} />
      </div>
      {isDashboard ? (
        <div className="flex items-start gap-3 group/title overflow-hidden">
          <span className="font-display font-bold text-white text-[15px] truncate">
            Nova Obra Criativa
          </span>
          <Edit2 size={12} className="text-zinc-600 flex-shrink-0 mt-0.5" />
        </div>
      ) : (
        <>
          <button
            type="button"
            className="group flex items-center gap-1.5 min-w-0"
          >
            <span className="font-display font-bold text-white text-[15px] truncate">
              Nova Obra Criativa
            </span>
            <Edit2
              size={12}
              className="text-zinc-600 group-hover:text-primary transition-colors flex-shrink-0"
            />
          </button>
          <button
            type="button"
            className="ml-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 flex-shrink-0"
          >
            <ArrowLeft size={12} /> Trocar
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-full gap-3" ref={ref}>
      <StudioTopBar titleSlot={titleSlot} />

      <div className="flex-1 min-h-0 overflow-hidden">
        {isDashboard ? (
          <StyleDashboard selectedKey={step === 1 ? "hero" : undefined} />
        ) : (
          <ConfigPreviewScreen
            previewState={previewState}
            progress={progress}
          />
        )}
      </div>
    </div>
  );
}
