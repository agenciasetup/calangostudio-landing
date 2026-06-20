"use client";
/**
 * MockCriarImagem
 * Pixel-faithful replica of tools/imagem_criativa/Wizard.tsx from Calango.studio.
 *
 * Tool accent: pink-400 / pink-500 (bg-pink-500/10 text-pink-400)
 * Forge sequence (4 steps, loops):
 *   step 0 — Dashboard: grid of 6 style cards (idle)
 *   step 1 — Dashboard: "Hero Style" card gets selected ring highlight
 *   step 2 — Config+Preview screen: "gerando" state (shimmer + Loader2 + progress bar)
 *   step 3 — Config+Preview screen: result filled with hero_criativo.jpg
 *
 * Icons from real component:
 *   Palette (tool icon), Cat, Car, Zap, User, Blocks, Landmark, ArrowLeft, Loader2, Wand2,
 *   Edit2, RefreshCw, ChevronRight, ImageIcon (Image)
 *
 * Token constraint: accent = #ffaa00 on landing. Coral #ff7b47 → [#ff7b47] literal.
 * Pink tool accent is native Tailwind pink-400/pink-500 — no collision.
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
} from "lucide-react";
import { StudioTopBar } from "../StudioTopBar";
import { criarImagemStyles } from "../mockData";
import { useForge } from "../useForge";

// ─── Style cards data (mirrors real component's ModeItem calls) ───────────────

const STYLE_CARDS = [
  {
    key: "animal",
    title: "Animal Art",
    desc: "Texturas animais, pelos e cenários fantásticos com profundidade real.",
    icon: Cat,
    colorClass: "bg-amber-500 text-black",
    imageKey: "animal",
  },
  {
    key: "car",
    title: "Car Design",
    desc: "CGI publicitário de alto nível com iluminação dinâmica e reflexos automotivos premium.",
    icon: Car,
    colorClass: "bg-blue-500 text-white",
    imageKey: "car",
  },
  {
    key: "hero",
    title: "Hero Style",
    desc: "Pôsteres de heróis épicos com efeitos de energia e composição cinematográfica.",
    icon: Zap,
    colorClass: "bg-red-500 text-white",
    imageKey: "hero",
  },
  {
    key: "business",
    title: "Business Style",
    desc: "Retratos ultra realistas para empreendedores com estética de estúdio profissional.",
    icon: User,
    colorClass: "bg-indigo-500 text-white",
    imageKey: "business",
  },
  {
    key: "craft",
    title: "Craft Style",
    desc: "Você realista dentro de um mundo Minecraft (cenário e objetos em voxel).",
    icon: Blocks,
    colorClass: "bg-emerald-500 text-black",
    imageKey: "craft",
  },
  {
    key: "classic",
    title: "Classic Style",
    desc: "Você realista dentro de uma obra clássica (Renascimento/Barroco) com atmosfera de museu.",
    icon: Landmark,
    colorClass: "bg-yellow-500 text-black",
    imageKey: "classic",
  },
] as const;

// Find image path for a given style key
function getStyleImage(key: string): string {
  const found = criarImagemStyles.find((s) => s.key === key);
  return found?.image ?? `/images/resultados/${key}_criativo.jpg`;
}

// ─── Dashboard (style picker grid) ───────────────────────────────────────────

function StyleDashboard({ selectedKey }: { selectedKey?: string }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header row — mirrors real dashboard header */}
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

      {/* Style cards grid */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 overflow-hidden pb-2">
        {STYLE_CARDS.map((card) => {
          const Icon = card.icon;
          const isSelected = selectedKey === card.key;
          return (
            <button
              key={card.key}
              className={`w-full text-left rounded-[28px] wiz-section p-0 transition-all duration-500 group relative overflow-hidden flex flex-col h-full
                ${isSelected
                  ? "border-pink-400/60 ring-2 ring-pink-400/50 ring-offset-1 ring-offset-transparent -translate-y-1"
                  : "hover:border-primary/40"
                }`}
            >
              {/* Card image */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <Image
                  src={getStyleImage(card.imageKey)}
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
                {/* Selected indicator overlay */}
                {isSelected && (
                  <div className="absolute inset-0 bg-pink-500/10 flex items-center justify-center">
                    <div className="bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Selecionado
                    </div>
                  </div>
                )}
              </div>
              {/* Card body */}
              <div className="p-4 flex-1">
                <h3 className="wiz-title text-base mb-1">{card.title}</h3>
                <p className="wiz-subtitle text-[11px] line-clamp-2">{card.desc}</p>
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

// ─── Config+Preview screen (mirrors real non-dashboard mode layout) ───────────

function ConfigPreviewScreen({
  generating,
  resultImage,
  progress,
}: {
  generating: boolean;
  resultImage: string | null;
  progress: number;
}) {
  return (
    <div className="flex flex-col h-full gap-2">
      {/* "Back" + title in topbar area (rendered here inside the content slot) */}
      {/* Inspector + Preview grid */}
      <div className="flex flex-col md:grid md:grid-cols-[minmax(280px,340px)_1fr] gap-2 md:gap-3 flex-1 min-h-0 items-stretch">

        {/* ─── INSPECTOR ─────────────────────────────────── */}
        <div className="flex flex-col min-h-0 gap-2 md:gap-3 relative z-10 rounded-t-[24px] md:rounded-none border-t border-white/15 md:border-0 bg-black/40 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-0 shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_-18px_38px_rgba(0,0,0,0.6)] md:shadow-none px-3 pt-3 md:p-0">
          <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-1 md:pr-2 space-y-4">
            <div className="space-y-5 md:space-y-6 md:glass-panel md:p-6 md:rounded-[32px] md:border md:border-white/5 md:bg-black/20">

              {/* Identidade section */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Referências de Identidade
                </label>
                {/* Upload dropzone */}
                <div className="relative w-full rounded-2xl bg-white/[0.03] border-2 border-dashed border-white/15 h-24 flex items-center justify-center text-zinc-600">
                  <div className="flex flex-col items-center gap-1.5 text-zinc-600">
                    <User size={22} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Upload fotos</span>
                  </div>
                </div>
              </div>

              {/* Estética field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Estética (Opcional)
                </label>
                <input
                  readOnly
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
                  placeholder="Ex: herói urbano, sci-fi, dark hero..."
                  value="Dark Hero • Energia Cósmica"
                />
              </div>

              {/* Poderes tags */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 block">
                  Poderes (Selecione)
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Energia", "Raio", "Fogo", "Escuridão", "Velocidade"].map(
                    (p) => (
                      <button
                        key={p}
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-bold border transition-all
                          ${p === "Energia" || p === "Raio"
                            ? "bg-red-500 border-red-500 text-white"
                            : "bg-white/5 border-white/10 text-gray-500"
                          }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Roupa field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Roupa do Herói
                </label>
                <input
                  readOnly
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-sm"
                  placeholder="Ex: armadura preta minimalista..."
                  value="Armadura negra com detalhes dourados"
                />
              </div>

              {/* Luz select-like */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Luz
                </label>
                <div className="w-full flex items-center justify-between gap-2 bg-black/50 border border-white/10 rounded-xl pl-3 pr-2.5 py-2.5 text-[12px] text-white">
                  <span>Luz cinematográfica</span>
                </div>
              </div>

              {/* Extra details */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Detalhes Extras
                </label>
                <textarea
                  readOnly
                  className="w-full glass-input p-3 rounded-2xl text-white text-sm"
                  style={{ minHeight: 72, resize: "none" }}
                  placeholder="Clima, objetos, cores, atmosfera..."
                  value="Névoa de energia azul elétrico, pôster cinematográfico"
                />
              </div>
            </div>
          </div>

          {/* Generate button */}
          <div className="shrink-0 pb-1">
            <button className="btn-generate" type="button">
              {generating ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Gerando…
                </>
              ) : (
                <>
                  <Wand2 size={18} /> Gerar imagem
                </>
              )}
            </button>
          </div>
        </div>

        {/* ─── PREVIEW STAGE ─────────────────────────────── */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0 flex-1">
          <div className="flex-1 w-full rounded-[24px] border border-white/[0.08] bg-black/55 overflow-hidden relative flex items-center justify-center">
            {resultImage ? (
              // Show result image
              <Image
                src={resultImage}
                alt="Imagem gerada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            ) : generating ? (
              // Generating shimmer state
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
                {/* Shimmer bars */}
                <div className="w-full space-y-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s linear infinite",
                    }}
                  />
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 w-4/5"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s linear infinite 0.3s",
                    }}
                  />
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 w-3/5"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s linear infinite 0.6s",
                    }}
                  />
                </div>
                {/* Loader + label */}
                <div className="flex flex-col items-center gap-2 mt-2">
                  <Loader2
                    size={28}
                    className="text-pink-400 animate-spin"
                    strokeWidth={1.5}
                  />
                  <p className="text-white font-bold text-sm">Gerando obra de arte…</p>
                  <p className="text-zinc-500 text-xs">Inteligência Calango PRO</p>
                </div>
                {/* Progress bar */}
                <div className="w-full mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                      Progresso
                    </span>
                    <span className="text-[10px] font-black text-pink-400">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-[#ff7b47] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Empty state
              <div className="flex flex-col items-center justify-center gap-3 text-center px-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-600">
                  <ImageIcon size={26} />
                </div>
                <p className="text-white font-bold text-sm">Estúdio de criação vazio</p>
                <p className="text-zinc-500 text-xs max-w-[240px] leading-relaxed">
                  Configure os controles e toque em Gerar imagem.
                </p>
              </div>
            )}
          </div>
          {/* History strip placeholder */}
          <p className="text-zinc-600 text-[11px] shrink-0 pl-1 hidden md:block">
            Suas gerações vão aparecer aqui.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Forge sequence (4 steps, loops every ~1.1s):
 *   0 → Dashboard idle (no selection)
 *   1 → Dashboard: Hero Style card highlighted/selected
 *   2 → Config+Preview in "gerando" state (shimmer + spinner + progress ~65%)
 *   3 → Config+Preview with hero_criativo.jpg result
 */
export default function MockCriarImagem({ active }: { active?: boolean }) {
  // 4 steps, interval 1600ms for more readable animation timing
  const { step, ref } = useForge(4, { active, loop: true, interval: 1600 });

  const isDashboard = step <= 1;
  const isGenerating = step === 2;
  const hasResult = step === 3;

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
      {/* Tool icon badge */}
      <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center flex-shrink-0">
        <Palette size={17} />
      </div>
      {/* Session title */}
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
            <Edit2 size={12} className="text-zinc-600 group-hover:text-primary transition-colors flex-shrink-0" />
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
      {/* StudioTopBar */}
      <StudioTopBar titleSlot={titleSlot} />

      {/* Content area */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {isDashboard ? (
          <StyleDashboard selectedKey={step === 1 ? "hero" : undefined} />
        ) : (
          <ConfigPreviewScreen
            generating={isGenerating}
            resultImage={hasResult ? "/images/resultados/hero_criativo.jpg" : null}
            progress={isGenerating ? 65 : 0}
          />
        )}
      </div>
    </div>
  );
}
