"use client";
/**
 * MockCriarImagem
 * Pixel-faithful replica of tools/imagem_criativa/Wizard.tsx from Calango.studio.
 *
 * Tool accent: pink-400 / pink-500 (bg-pink-500/10 text-pink-400)
 *
 * Forge sequence (7 steps, loops):
 *   step 0 — Dashboard idle (no selection)
 *   step 1 — Dashboard: "Hero Style" card selected/highlighted
 *   step 2 — Config screen: empty upload slot, EMPTY 4:5 preview
 *   step 3 — Config screen: reference thumbnail IN upload slot, 4:5 preview still empty
 *   step 4 — Config screen: upload slot filled, 4:5 preview shows BLURRED image
 *   step 5 — Config screen: loading state (spinner + progress bar, GERANDO… button)
 *   step 6 — Config screen: result — sharp hero_criativo.jpg in 4:5 preview
 *
 * Preview is a centered 4:5 portrait frame (aspect-ratio: 4/5) inside the right panel,
 * NOT full-bleed. Matches real .wiz-preview from wizard-system.css.
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

// ─── Style cards data ─────────────────────────────────────────────────────────

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

// ─── Config+Preview screen ────────────────────────────────────────────────────

/**
 * previewState:
 *   "empty"      — 4:5 frame shows empty placeholder ("Sua geração vai aparecer aqui")
 *   "blur"       — 4:5 frame shows hero_criativo.jpg with blur + slight scale
 *   "generating" — 4:5 frame shows spinner + progress bar ("Gerando obra de arte…")
 *   "result"     — 4:5 frame shows sharp hero_criativo.jpg
 */
type PreviewState = "empty" | "blur" | "generating" | "result";

function ConfigPreviewScreen({
  uploadFilled,
  previewState,
  progress,
}: {
  uploadFilled: boolean;
  previewState: PreviewState;
  progress: number;
}) {
  const isGenerating = previewState === "generating";

  return (
    <div className="flex flex-col h-full gap-2">
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
                {/* Upload slot — empty or filled with reference thumbnail */}
                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-dashed border-white/15 h-24">
                  {uploadFilled ? (
                    /* Reference thumbnail fills the slot */
                    <>
                      <Image
                        src="/images/resultados/hero_criativo.jpg"
                        alt="Referência"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg">
                        1 foto
                      </div>
                    </>
                  ) : (
                    /* Empty dropzone */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-zinc-600 bg-white/[0.03]">
                      <User size={22} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Upload fotos
                      </span>
                    </div>
                  )}
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
                          ${
                            p === "Energia" || p === "Raio"
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

              {/* Luz */}
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
              {isGenerating ? (
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
          {/*
            Outer container: fills the available column space, centers the portrait frame.
            The 4:5 frame is NOT full-bleed — it's a centered portrait box,
            matching .wiz-preview from wizard-system.css:
              aspect-ratio: 4/5; height: clamp(320px,55vh,700px); centered.
          */}
          <div className="flex-1 min-h-0 flex items-center justify-center">
            <div
              className="relative rounded-[24px] border border-white/[0.08] bg-black/55 overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: "4 / 5",
                height: "clamp(220px, 55vh, 600px)",
                maxHeight: "100%",
                width: "auto",
                maxWidth: "100%",
              }}
            >
              {previewState === "result" ? (
                /* Sharp final result */
                <Image
                  src="/images/resultados/hero_criativo.jpg"
                  alt="Imagem gerada"
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              ) : previewState === "blur" ? (
                /* Blurred / processing state */
                <div className="absolute inset-0">
                  <Image
                    src="/images/resultados/hero_criativo.jpg"
                    alt="Processando"
                    fill
                    className="object-cover"
                    style={{
                      filter: "blur(16px)",
                      transform: "scale(1.08)",
                      transition: "all 0.5s ease",
                    }}
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-pink-400 animate-spin" />
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      Processando…
                    </p>
                  </div>
                </div>
              ) : previewState === "generating" ? (
                /* Loading state: spinner + progress bar */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
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
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <Loader2
                      size={28}
                      className="text-pink-400 animate-spin"
                      strokeWidth={1.5}
                    />
                    <p className="text-white font-bold text-sm">
                      Gerando obra de arte…
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Inteligência Calango PRO
                    </p>
                  </div>
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
                /* Empty state */
                <div className="flex flex-col items-center justify-center gap-3 text-center px-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-600">
                    <ImageIcon size={26} />
                  </div>
                  <p className="text-white font-bold text-sm">
                    Sua geração vai aparecer aqui
                  </p>
                  <p className="text-zinc-500 text-xs max-w-[200px] leading-relaxed">
                    Configure os controles e toque em Gerar imagem.
                  </p>
                </div>
              )}
            </div>
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
 * Forge sequence (7 steps, loops every ~1400ms):
 *   0 → Dashboard idle (no selection)
 *   1 → Dashboard: Hero Style card selected
 *   2 → Config screen: upload slot EMPTY, 4:5 preview EMPTY
 *   3 → Config screen: reference thumbnail IN upload slot, preview still EMPTY
 *   4 → Config screen: upload slot filled, 4:5 preview shows BLURRED image
 *   5 → Config screen: GENERATING state (spinner + progress bar + GERANDO… button)
 *   6 → Config screen: RESULT — sharp hero_criativo.jpg in 4:5 frame
 */
export default function MockCriarImagem({ active }: { active?: boolean }) {
  // 7 steps, 1400ms per step for readable pacing
  const { step, ref } = useForge(7, { active, loop: true, interval: 1400 });

  const isDashboard = step <= 1;

  // Config screen state derived from step
  const uploadFilled = step >= 3;
  const previewState: "empty" | "blur" | "generating" | "result" =
    step === 4
      ? "blur"
      : step === 5
        ? "generating"
        : step === 6
          ? "result"
          : "empty";

  // Progress value for generating step
  const progress = step === 5 ? 65 : 0;

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
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
            uploadFilled={uploadFilled}
            previewState={previewState}
            progress={progress}
          />
        )}
      </div>
    </div>
  );
}
