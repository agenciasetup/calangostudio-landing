"use client";

/**
 * Hero — premium full-section hero for Calango Studio.
 *
 * Animation: step-machine driven by a setInterval (step 0–4, ~1800ms each).
 * Respects prefers-reduced-motion: pins to a static "designed" final state.
 *
 * Steps:
 *   0 — idle    cursor parked off-artboard, no selection, headline opacity 1
 *   1 — select  cursor on headline, selection box appears, layer highlighted
 *   2 — opacity cursor on slider, slider + headline opacity → 55%
 *   3 — color   cursor on swatches, swatch gets accent ring, opacity eases back
 *   4 — rest    selection fades, cursor drifts off → loop to 0
 */

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MousePointer2,
  Type as TypeIcon,
  Square,
  Brush,
  ImageIcon,
  Sparkles,
} from "lucide-react";

const ARTBOARD_IMAGE = "/images/resultados/car_criativo.jpg";
const STEP_MS = 1800;
const TOTAL_STEPS = 5; // 0…4

// ── Smooth spring transition used for all animated properties ────────────────
const SMOOTH = { type: "spring", stiffness: 160, damping: 28 } as const;
const EASE = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } as const;

// ─────────────────────────────────────────────────────────────────────────────
//  Step machine hook
// ─────────────────────────────────────────────────────────────────────────────
function useAnimStep(reduced: boolean): number {
  const [step, setStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    intervalRef.current = setInterval(() => {
      setStep((s) => (s + 1) % TOTAL_STEPS);
    }, STEP_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced]);

  return step;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Cursor positions per step (as % of the canvas region)
//  These are absolute pixel-fraction positions for the top-left of the cursor.
// ─────────────────────────────────────────────────────────────────────────────
const CURSOR_TARGETS: Record<number, { x: string; y: string }> = {
  0: { x: "90%", y: "8%" },   // idle — top-right corner, outside artboard
  1: { x: "50%", y: "62%" },  // select — on the headline text
  2: { x: "28%", y: "82%" },  // opacity — on the opacity slider
  3: { x: "55%", y: "82%" },  // color — on the swatch area
  4: { x: "92%", y: "10%" },  // rest — drift back off
};

// ─────────────────────────────────────────────────────────────────────────────
//  Editor cursor — absolutely positioned SVG pointer + "Você" tag
// ─────────────────────────────────────────────────────────────────────────────
function EditorCursor({ step, reduced }: { step: number; reduced: boolean }) {
  const target = reduced ? CURSOR_TARGETS[1] : CURSOR_TARGETS[step];

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-40"
      animate={{ x: target.x, y: target.y }}
      transition={EASE}
      style={{ willChange: "transform" }}
    >
      {/* nudge the tip to be the pointer hotspot */}
      <div className="relative -translate-x-1 -translate-y-1">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          <path
            d="M4 2.5 L18.5 11 L11.5 12.2 L8.4 18.8 Z"
            fill="#ffffff"
            stroke="#0b0b0b"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="absolute left-4 top-4 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-[#0b0b0b]"
          style={{ background: "linear-gradient(135deg,#ffaa00,#ff7b47)" }}
        >
          Você
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Selection box — dashed accent border + 8 square handles
//  Visible when step is 1 (select) or 2 (opacity) or 3 (color)
// ─────────────────────────────────────────────────────────────────────────────
const HANDLE_POSITIONS: Array<{ left: string; top: string }> = [
  { left: "0%", top: "0%" },
  { left: "50%", top: "0%" },
  { left: "100%", top: "0%" },
  { left: "0%", top: "50%" },
  { left: "100%", top: "50%" },
  { left: "0%", top: "100%" },
  { left: "50%", top: "100%" },
  { left: "100%", top: "100%" },
];

function SelectionBox({ step, reduced }: { step: number; reduced: boolean }) {
  const visible = reduced || (step >= 1 && step <= 3);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-30"
      style={{
        // positioned over the headline text area inside the artboard
        left: "16%",
        right: "16%",
        top: "60%",
        height: "14%",
        transformOrigin: "center center",
        willChange: "opacity, transform",
      }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.96 }}
      transition={SMOOTH}
    >
      {/* dashed accent border */}
      <div className="absolute inset-0 rounded-[4px] border border-dashed border-[#ffaa00]" />
      {/* 8 handles */}
      {HANDLE_POSITIONS.map((h, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-[2px] border border-[#030303] bg-[#ffaa00] shadow-[0_0_6px_rgba(255,170,0,0.6)]"
          style={{
            left: h.left,
            top: h.top,
            transform: "translate(-50%,-50%)",
          }}
        />
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Opacity control — floating mini-slider, appears only in step 2
// ─────────────────────────────────────────────────────────────────────────────
function OpacityControl({ step, reduced }: { step: number; reduced: boolean }) {
  const opacityValue = (reduced || step === 2) ? 0.55 : 1;
  const thumbPct = opacityValue * 100; // 55 or 100
  const label = `${Math.round(thumbPct)}%`;
  const visible = reduced || step === 2;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-40"
      style={{ left: "10%", bottom: "6%", willChange: "opacity" }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={SMOOTH}
    >
      <div
        className="rounded-xl border border-white/10 px-3 py-2.5 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div className="mb-2 flex items-center justify-between gap-6">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
            Opacidade
          </span>
          <motion.span
            className="text-[10px] font-bold tabular-nums text-[#ffaa00]"
            animate={{ opacity: 1 }}
            key={label}
          >
            {label}
          </motion.span>
        </div>
        {/* Track */}
        <div className="relative h-1.5 w-32 rounded-full bg-white/10">
          {/* Accent fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "linear-gradient(90deg,#ffaa00,#ff7b47)" }}
            animate={{ width: `${thumbPct}%` }}
            transition={EASE}
          />
          {/* Thumb */}
          <motion.div
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#030303] bg-white shadow-[0_0_8px_rgba(255,170,0,0.5)]"
            animate={{ left: `${thumbPct}%` }}
            transition={EASE}
            style={{ willChange: "left" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Layers panel — "Headline" row highlights when step ≥ 1 and ≤ 3
// ─────────────────────────────────────────────────────────────────────────────
function LayersPanel({ step, reduced }: { step: number; reduced: boolean }) {
  const highlighted = reduced || (step >= 1 && step <= 3);

  const rows = [
    { icon: TypeIcon, label: "Headline", active: true },
    { icon: ImageIcon, label: "Foto", active: false },
    { icon: Square, label: "Fundo", active: false },
  ];

  return (
    <div className="hidden h-full w-[112px] shrink-0 flex-col gap-1 border-l border-white/[0.06] bg-white/[0.012] p-2 sm:flex">
      <div className="mb-1 px-1 text-[9px] font-bold uppercase tracking-wider text-zinc-600">
        Camadas
      </div>
      {rows.map((row) => {
        const Icon = row.icon;
        return (
          <div
            key={row.label}
            className="relative flex items-center gap-1.5 rounded-md px-1.5 py-1.5"
          >
            {row.active && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-md"
                animate={{
                  opacity: highlighted ? 1 : 0,
                }}
                transition={SMOOTH}
                style={{
                  background: "rgba(255,170,0,0.12)",
                  border: "1px solid rgba(255,170,0,0.35)",
                  willChange: "opacity",
                }}
              />
            )}
            <Icon
              size={11}
              className={`relative ${row.active ? "text-[#ffaa00]" : "text-zinc-500"}`}
            />
            <span
              className={`relative text-[10px] font-medium ${
                row.active ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              {row.label}
            </span>
            <span
              className={`relative ml-auto h-1.5 w-1.5 rounded-full ${
                row.active ? "bg-[#ffaa00]/70" : "bg-zinc-600"
              }`}
            />
          </div>
        );
      })}

      {/* swatch row — swatch 2 gets accent ring on step 3 */}
      <div className="mt-auto flex items-center gap-1.5 px-1.5 pt-2">
        {["#ffaa00", "#ff7b47", "#ffffff", "#7c7c87"].map((c, i) => {
          const swatchActive = (reduced || step === 3) && i === 1;
          return (
            <motion.span
              key={c}
              className="h-3 w-3 rounded-full border border-white/15"
              style={{ background: c }}
              animate={{
                scale: swatchActive ? 1.35 : 1,
                boxShadow: swatchActive
                  ? "0 0 0 2px #ffaa00"
                  : "0 0 0 0px transparent",
              }}
              transition={SMOOTH}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Tool rail
// ─────────────────────────────────────────────────────────────────────────────
function ToolRail() {
  const tools = [
    { icon: MousePointer2, active: true },
    { icon: TypeIcon, active: false },
    { icon: Square, active: false },
    { icon: Brush, active: false },
    { icon: ImageIcon, active: false },
  ];
  return (
    <div className="hidden w-9 shrink-0 flex-col items-center gap-1.5 border-r border-white/[0.06] bg-white/[0.012] py-3 sm:flex">
      {tools.map((t, i) => {
        const Icon = t.icon;
        return (
          <div
            key={i}
            className={`flex h-6 w-6 items-center justify-center rounded-md ${
              t.active
                ? "bg-[#ffaa00]/15 text-[#ffaa00]"
                : "text-zinc-600"
            }`}
          >
            <Icon size={13} />
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  The artboard — headline text opacity is bound to the step
// ─────────────────────────────────────────────────────────────────────────────
function Artboard({ step, reduced }: { step: number; reduced: boolean }) {
  // Headline is faded to 55% only during step 2 (opacity beat)
  const headlineOpacity = (reduced || step === 2) ? 0.55 : 1;

  return (
    <div className="relative flex flex-1 items-center justify-center bg-[#050506] p-5 sm:p-7">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(255,170,0,0.05), transparent 60%)",
        }}
      />

      {/* artboard card */}
      <div
        className="relative w-full max-w-[230px] overflow-hidden rounded-[14px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: "4 / 5" }}
      >
        <Image
          src={ARTBOARD_IMAGE}
          alt="Criativo gerado no Calango Studio"
          fill
          priority
          sizes="(max-width: 640px) 60vw, 230px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

        {/* badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 backdrop-blur-sm">
          <Sparkles size={9} className="text-[#ffaa00]" />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-white/90">
            Nova coleção
          </span>
        </div>

        {/* headline — opacity controlled by step */}
        <motion.div
          className="absolute inset-x-3 bottom-4"
          animate={{ opacity: headlineOpacity }}
          transition={EASE}
          style={{ willChange: "opacity" }}
        >
          <p className="font-display text-[1.15rem] font-black leading-[1.05] tracking-tight text-white">
            Calango
            <br />
            Studio
          </p>
          <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-[#ffaa00]">
            Direção criativa · IA
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Editor scene — assembles all pieces
// ─────────────────────────────────────────────────────────────────────────────
function EditorScene() {
  const reduced = useReducedMotion() ?? false;
  const step = useAnimStep(reduced);

  return (
    <div className="relative">
      {/* ambient glow behind the editor window */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[40px] opacity-70 blur-[60px]"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 30%, rgba(255,170,0,0.18), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[22px] border border-white/[0.09]"
        style={{
          background: "rgba(10,10,12,0.9)",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* hairline accent */}
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffaa00]/50 to-transparent" />

        {/* top bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.015] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-md"
              style={{ background: "linear-gradient(135deg,#ffaa00,#ff7b47)" }}
            >
              <span className="h-2 w-2 rounded-[3px] bg-[#0b0b0b]" />
            </span>
            <span className="font-display text-[11px] font-bold tracking-tight text-zinc-200">
              Calango Studio
            </span>
          </div>
          <span className="mx-auto hidden text-[10px] font-medium text-zinc-500 md:inline">
            criativo-cliente · 1080×1350
          </span>
          <span className="ml-auto rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold tabular-nums text-zinc-400">
            100%
          </span>
        </div>

        {/* editor body */}
        <div className="relative flex h-[330px] sm:h-[380px] md:h-[420px]">
          <ToolRail />

          {/* canvas region — all overlays are positioned relative to this */}
          <div className="relative flex-1">
            <Artboard step={step} reduced={reduced} />
            <SelectionBox step={step} reduced={reduced} />
            <OpacityControl step={step} reduced={reduced} />
            <EditorCursor step={step} reduced={reduced} />
          </div>

          <LayersPanel step={step} reduced={reduced} />
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Hero
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  const handleScrollToFuncoes = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#funcoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-10">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid-bg absolute inset-0" />
        <div
          className="absolute left-[62%] top-[30%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,170,0,0.14), rgba(255,123,71,0.05) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        {/* LEFT: copy */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.6rem] font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Faça criativos
            <br className="hidden sm:block" /> usando{" "}
            <span className="text-gradient-animated">IA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-txt-secondary md:text-lg lg:mx-0"
          >
            Crie copy, gere imagens, faça sessão de fotos e construa suas artes —
            tudo conectado com a identidade e o contexto do seu cliente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start"
          >
            <a
              href="#planos"
              className="btn-primary group flex items-center gap-2 px-9 py-4 text-sm tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaa00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              Começar agora
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#funcoes"
              onClick={handleScrollToFuncoes}
              className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              Ver funcionando
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-7 text-[11px] font-medium text-zinc-500 md:text-xs"
          >
            ⭐ 4,9 — designers e social medias já operam no Calango Studio
          </motion.p>
        </div>

        {/* RIGHT: live editor scene */}
        <div className="relative w-full">
          <EditorScene />
        </div>
      </div>
    </section>
  );
}
