"use client";
/**
 * MockSessaoFotos
 * Pixel-faithful port of public/estudio-identico.html into React/Tailwind.
 * Tabler icons → lucide-react equivalents (see substitution notes below).
 *
 * Icon substitutions from Tabler → lucide-react:
 *   ti-typography     → Type
 *   ti-photo-plus     → ImagePlus
 *   ti-user           → User
 *   ti-users          → Users
 *   ti-camera         → Camera
 *   ti-photo          → Image (aliased as ImageIcon to avoid conflict with next/image)
 *   ti-chevron-down   → ChevronDown
 *   ti-pencil         → Pencil
 *   ti-plus           → Plus
 *   ti-trophy         → Trophy
 *   ti-key            → Key
 *   ti-coins          → Coins
 *   ti-user-star      → UserStar
 *   ti-package        → Package
 *
 * Forge sequence (4 steps, loops):
 *   0 → Idle: textarea empty, upload empty, preview EMPTY ("Sua foto aparecerá aqui") + blurred ghost
 *   1 → Fill: face thumbnail appears in upload, textarea types in a scene
 *   2 → Generate: GERAR FOTO → loading state (ORANGE spinner "Criando foto…" + ORANGE progress) over blurred ghost
 *   3 → Result: preview shows homem_foto.jpeg contained + download/save toolbar
 */
import Image from "next/image";
import {
  Camera,
  Type,
  ImagePlus,
  User,
  Users,
  Image as ImageIcon,
  Pencil,
  Plus,
  Trophy,
  Key,
  Coins,
  UserStar,
  Package,
  Loader2,
  Download,
  HardDrive,
  Store,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { StudioTopBar, StudioSelect } from "../StudioTopBar";
import { sessaoFotosData } from "../mockData";
import { useForge } from "../useForge";

// ─── Constants ────────────────────────────────────────────────────────────────

const RESULT_IMAGE = "/images/resultados/homem_foto.jpeg";
const BG_GHOST_URL = RESULT_IMAGE; // same image used as desfocado ghost

// The scene text shown being "typed" in the filling step
const SCENE_TEXT =
  "Foto profissional corporativa em estúdio com fundo cinza neutro, vestindo terno slim azul marinho, iluminação Rembrandt suave, expressão confiante...";

// ─── Blurred Ghost Background ─────────────────────────────────────────────────
// Matches PreviewStage: blur(40px) brightness(0.28) saturate(1.1) scale(1.15)

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

// ─── Preview state type ───────────────────────────────────────────────────────

type PreviewState = "empty" | "generating" | "result";

// ─── Main component ───────────────────────────────────────────────────────────

export default function MockSessaoFotos({ active }: { active?: boolean }) {
  const d = sessaoFotosData;

  // 4 steps, 1700ms per step for readable pacing
  const { step, ref } = useForge(4, { active, loop: true, interval: 1700 });

  // Derive animation state from step
  const hasFaceRef = step >= 1; // face thumbnail visible in upload
  const hasSceneText = step >= 1; // textarea has scene text
  const previewState: PreviewState =
    step === 2 ? "generating" : step === 3 ? "result" : "empty";
  const isGenerating = previewState === "generating";
  const isResult = previewState === "result";

  // Progress value for generating step
  const progress = isGenerating ? 62 : 0;

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
      {/* Tool icon badge */}
      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
        <Camera size={17} />
      </div>
      {/* Session title */}
      <button className="group flex items-center gap-1.5 min-w-0">
        <span className="font-display font-bold text-white text-[15px] truncate">
          {d.sessionTitle}
        </span>
        <Pencil size={12} className="text-zinc-600" />
      </button>
      {/* Mode switcher tabs */}
      <div className="ml-1 hidden sm:flex items-center gap-0.5 bg-black/40 border border-white/10 rounded-lg p-0.5 flex-shrink-0">
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-cyan-500/20 text-cyan-300">
          <Camera size={12} />
          <span className="hidden lg:inline">Estúdio</span>
        </button>
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide text-zinc-500">
          <UserStar size={12} />
          <span className="hidden lg:inline">UGC</span>
        </button>
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide text-zinc-500">
          <Package size={12} />
          <span className="hidden lg:inline">Produto</span>
        </button>
      </div>
    </div>
  );

  const rightSlot = (
    <>
      {/* Trophy / rewards button */}
      <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-amber-300 flex items-center justify-center">
        <Trophy size={16} />
      </button>
      {/* Key + Coins widget */}
      <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-2.5 py-1.5">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider flex items-center gap-1">
          <Key size={13} /> Key
        </span>
        <span className="flex items-center gap-1 text-[12px] font-black text-primary bg-primary/10 rounded-lg px-2 py-1">
          <Coins size={13} /> {d.coins}
        </span>
        <button className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center">
          <Plus size={13} />
        </button>
      </div>
    </>
  );

  return (
    <div className="flex flex-col gap-3" ref={ref}>
      {/* StudioTopBar */}
      <StudioTopBar titleSlot={titleSlot} rightSlot={rightSlot}>
        <StudioSelect label="Modelo de IA" value={d.model} width="190px" />
        <StudioSelect label="Formato" value={d.format} width="120px" />
        <StudioSelect label="Qualidade" value={d.quality} width="126px" />
      </StudioTopBar>

      {/* Main grid: inspector + preview */}
      <div className="grid md:grid-cols-[minmax(300px,400px)_1fr] gap-3 items-start">

        {/* ─── INSPECTOR ─────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="pr-2 space-y-4">

            {/* Card: Tipo de sessão + Contexto */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-4">
              {/* Tipo de sessão */}
              <div className="space-y-1.5">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.18em] ml-0.5">
                  Tipo de sessão
                </p>
                <div className="flex gap-1 bg-black/40 border border-white/10 p-1 rounded-xl">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <Type size={13} /> Prompt
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-500">
                    <ImagePlus size={13} /> Referência
                  </button>
                </div>
                <p className="text-[10px] text-zinc-600 leading-snug ml-0.5">
                  Descreva a cena: a IA fotografa você nela.
                </p>
              </div>

              {/* Contexto */}
              <div className="space-y-1.5 pt-3 border-t border-white/5">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.18em] ml-0.5">
                  Contexto (opcional) · usa as fotos cadastradas
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-[12px] font-bold">
                    <User size={15} /> Para mim
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-[12px] font-bold">
                    <Users size={15} /> Para meu cliente
                  </button>
                </div>
              </div>
            </div>

            {/* Card: Quem será fotografado */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <User size={16} />
                </div>
                <h2 className="text-sm font-bold text-white">Quem será fotografado</h2>
              </div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Fotos do rosto (até 5)
              </label>
              {/* Upload dropzone — shows face thumbnail once filling starts */}
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-white/[0.03] border-2 border-dashed border-white/15 transition-all duration-500"
                style={{ height: 128 }}
              >
                {hasFaceRef ? (
                  /* Face thumbnail visible in fill/generate/result steps */
                  <div className="absolute inset-0 flex items-center justify-center gap-3 px-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 shadow-lg">
                      <Image
                        src={RESULT_IMAGE}
                        alt="Referência de rosto"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-green-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                        <CheckCircle2 size={10} /> 1 foto carregada
                      </span>
                      <span className="text-zinc-500 text-[10px] leading-snug">
                        Adicione mais 2–4 fotos para melhor resultado
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Empty upload state */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-zinc-500">
                    <User size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Upload</span>
                  </div>
                )}
              </div>
              <div className="flex">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase text-zinc-400">
                  <Plus size={12} /> +1 Ref ({hasFaceRef ? "1" : "0"}/5)
                </button>
              </div>
              <p className="text-[10px] text-zinc-500 leading-snug">
                3–5 fotos da mesma pessoa, ângulos diferentes, boa luz e rosto visível.
              </p>
            </div>

            {/* Card: A cena */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <Type size={16} />
                </div>
                <h2 className="text-sm font-bold text-white">A cena</h2>
              </div>
              <textarea
                className="w-full glass-input p-4 rounded-2xl text-white text-sm resize-y transition-all duration-500"
                style={{ minHeight: 140 }}
                placeholder={d.scenePlaceholder}
                value={hasSceneText ? SCENE_TEXT : ""}
                readOnly
              />
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Destaque extra (opcional)
                </label>
                <input
                  type="text"
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-xs"
                  placeholder={d.detailPlaceholder}
                  readOnly
                />
              </div>
            </div>

          </div>

          {/* Footer: Generate button */}
          <div className="shrink-0 space-y-3">
            <button className="btn-generate" type="button">
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Criando foto…
                </>
              ) : (
                <>
                  <Camera size={18} /> {isResult ? "Gerar de novo" : "Gerar foto"}
                </>
              )}
            </button>
            {/* Result action bar */}
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
                  <Camera size={12} /> +3 Variações
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ─── PREVIEW STAGE ─────────────────────────────── */}
        {/*
          Wide stage filling the right column — matches PreviewStage pattern from MockCriarImagem.
          GhostBackground shown when NOT in result state (empty + generating).
        */}
        <div className="flex flex-col gap-3">
          {/* Stage container — wide, fixed minHeight so content never collapses */}
          <div
            className="relative rounded-[24px] border border-white/[0.08] bg-black/55 overflow-hidden flex items-center justify-center"
            style={{ minHeight: 400 }}
          >
            {/* Blurred dark ghost — shown when no result (empty OR generating) */}
            {!isResult && <GhostBackground url={BG_GHOST_URL} />}

            {isResult ? (
              /* ── RESULT: contained image + toolbar ── */
              <>
                <img
                  src={RESULT_IMAGE}
                  alt="Foto gerada"
                  className="relative z-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "18px",
                  }}
                />
                {/* Top-right toolbar: download + save to drive + sell */}
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur text-white hover:bg-primary hover:text-black transition"
                    title="Baixar foto"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur text-white hover:bg-primary hover:text-black transition"
                    title="Salvar no Drive"
                  >
                    <HardDrive size={15} />
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition"
                    title="Vender esta sessão"
                  >
                    <Store size={17} />
                  </button>
                </div>
              </>
            ) : isGenerating ? (
              /* ── GENERATING: ORANGE spinner + label + ORANGE progress bar ── */
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6 w-full max-w-xs">
                <Loader2 className="animate-spin text-primary" size={40} />
                <div className="w-full">
                  <p className="text-white font-bold text-sm mb-3">
                    Criando foto…
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
              /* ── EMPTY: placeholder with blurred ghost behind ── */
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center px-6">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-600">
                  <ImageIcon size={30} />
                </div>
                <p className="text-white font-bold text-sm">Sua foto aparecerá aqui</p>
                <p className="text-zinc-500 text-xs max-w-[260px] leading-relaxed">
                  Envie o rosto, descreva a cena e toque em Gerar.
                </p>
              </div>
            )}
          </div>

          {/* Below stage: result thumbnail + hint */}
          <div className="shrink-0 hidden md:flex items-center gap-3">
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
                  Suas fotos vão aparecer aqui.
                </p>
              </>
            ) : (
              <p className="text-zinc-600 text-[11px] pl-1">Suas fotos vão aparecer aqui.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
