"use client";

/**
 * Hero — premium full-section hero for Calango Studio.
 *
 * Signature element: a LIVE design-editing animation. The right side is a
 * minimal design editor (top bar, tool rail, layers panel) wrapped around a
 * real artboard creative. A custom cursor glides in, snaps a selection box
 * onto the headline element, nudges a corner handle, then drags an opacity
 * slider while the element fades in sync — then rests "designed" and loops.
 *
 * Layout: copy LEFT, editor scene RIGHT (desktop) / stacked (mobile).
 * Brand: dark #030303, glass panels, accent orange→coral used ONLY for the
 * active selection / highlighted layer / opacity fill / CTA.
 *
 * The VSL lives in DemoSection.tsx — intentionally not here.
 * Respects prefers-reduced-motion: renders a static "designed" final state.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
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

// ── Artboard creative (verified to exist, 896×1200 → 3:4 portrait) ───────────
const ARTBOARD_IMAGE = "/images/resultados/car_criativo.jpg";

// ── Master loop timing ───────────────────────────────────────────────────────
// One shared duration keeps every track in lock-step. Keyframe `times` below
// are fractions of this duration, so the cursor, selection, handle nudge and
// opacity slider all hit their marks together.
const LOOP = 10.5; // seconds

const loopTransition = (times: number[]): Transition => ({
  duration: LOOP,
  times,
  repeat: Infinity,
  ease: "easeInOut",
});

// ─────────────────────────────────────────────────────────────────────────────
//  Editor cursor — custom SVG pointer with a tiny name tag
// ─────────────────────────────────────────────────────────────────────────────
function EditorCursor({ reduced }: { reduced: boolean }) {
  // Path through the artboard (% of the scene box). Beats:
  // park → glide to headline → hold on selection → grab corner handle →
  // travel to opacity control → drag → drift to color swatch → exit.
  const x = reduced
    ? ["44%"]
    : ["88%", "48%", "48%", "37%", "37%", "30%", "30%", "63%", "88%"];
  const y = reduced
    ? ["63%"]
    : ["18%", "60%", "60%", "70%", "70%", "84%", "84%", "40%", "18%"];
  const times = [0, 0.14, 0.26, 0.34, 0.44, 0.52, 0.66, 0.82, 1];

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-40"
      initial={reduced ? { x: "44%", y: "63%" } : false}
      animate={reduced ? { x, y } : { x, y }}
      transition={reduced ? undefined : loopTransition(times)}
      style={{ willChange: "transform" }}
    >
      <div className="relative -translate-x-1 -translate-y-1">
        {/* Pointer glyph */}
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
        {/* Name tag */}
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
//  Selection box — dashed accent border + 8 handles, overlaid on the headline
// ─────────────────────────────────────────────────────────────────────────────
function SelectionHandles() {
  // 8 handles on corners + edge midpoints, centered on the box border via
  // explicit left/top percentages + a -50%/-50% transform.
  const handles: Array<{ left: string; top: string }> = [
    { left: "0%", top: "0%" },
    { left: "50%", top: "0%" },
    { left: "100%", top: "0%" },
    { left: "0%", top: "50%" },
    { left: "100%", top: "50%" },
    { left: "0%", top: "100%" },
    { left: "50%", top: "100%" },
    { left: "100%", top: "100%" },
  ];
  return (
    <>
      {handles.map((h, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-[2px] border border-[#030303] bg-[#ffaa00] shadow-[0_0_6px_rgba(255,170,0,0.6)]"
          style={{
            left: h.left,
            top: h.top,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}

function SelectionBox({ reduced }: { reduced: boolean }) {
  // Selection appears around the headline, then the corner-grab nudges scale.
  const opacity = reduced ? 1 : [0, 0, 1, 1, 1, 1, 1, 0, 0];
  const scale = reduced ? 1 : [1, 1, 1, 1.045, 1.045, 1, 1, 1, 1];
  const times = [0, 0.18, 0.24, 0.34, 0.46, 0.52, 0.74, 0.82, 1];

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-30"
      // sits over the headline text element inside the artboard
      style={{
        left: "8%",
        right: "8%",
        top: "57%",
        height: "16%",
        transformOrigin: "left center",
        willChange: "transform, opacity",
      }}
      initial={reduced ? { opacity: 1, scale: 1 } : false}
      animate={{ opacity, scale }}
      transition={reduced ? undefined : loopTransition(times)}
    >
      <div className="absolute inset-0 rounded-[4px] border border-dashed border-[#ffaa00]" />
      <SelectionHandles />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Floating opacity control — thumb slides 100% → 55%, label syncs
// ─────────────────────────────────────────────────────────────────────────────
function OpacityControl({ reduced }: { reduced: boolean }) {
  // Panel fades in with the slider beat, fades out at rest.
  const panelOpacity = reduced ? 1 : [0, 0, 0, 1, 1, 1, 0, 0];
  const panelTimes = [0, 0.34, 0.42, 0.5, 0.66, 0.74, 0.8, 1];

  // Thumb position along the track (left %). 100% → 55%.
  const thumbLeft = reduced
    ? ["55%"]
    : ["100%", "100%", "100%", "55%", "55%", "100%"];
  const thumbTimes = [0, 0.42, 0.5, 0.6, 0.72, 0.8];

  // Live numeric label, flipped to 55% at ~58% of the loop and back at ~80%,
  // staying in phase with the slider thumb + element opacity beats.
  const [label, setLabel] = useState(reduced ? "55%" : "100%");
  useEffect(() => {
    if (reduced) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const ms = LOOP * 1000;
    const schedule = (atFraction: number, value: string) => {
      timers.push(setTimeout(() => setLabel(value), ms * atFraction));
    };
    const runCycle = () => {
      schedule(0.58, "55%");
      schedule(0.8, "100%");
    };
    runCycle();
    const loop = setInterval(runCycle, ms);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-40"
      style={{ left: "13%", bottom: "9%", willChange: "opacity" }}
      initial={reduced ? { opacity: 1 } : false}
      animate={{ opacity: panelOpacity }}
      transition={reduced ? undefined : loopTransition(panelTimes)}
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
          <span className="text-[10px] font-bold tabular-nums text-[#ffaa00]">
            {label}
          </span>
        </div>
        {/* Track */}
        <div className="relative h-1.5 w-32 rounded-full bg-white/10">
          {/* Accent fill follows the thumb (right→left) */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg,#ffaa00,#ff7b47)",
              willChange: "width",
            }}
            initial={reduced ? { width: "55%" } : false}
            animate={{ width: thumbLeft }}
            transition={reduced ? undefined : loopTransition(thumbTimes)}
          />
          {/* Thumb */}
          <motion.div
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#030303] bg-white shadow-[0_0_8px_rgba(255,170,0,0.5)]"
            initial={reduced ? { left: "55%" } : false}
            animate={{ left: thumbLeft }}
            transition={reduced ? undefined : loopTransition(thumbTimes)}
            style={{ willChange: "left" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Layers panel — the "Headline" row highlights in sync with the selection
// ─────────────────────────────────────────────────────────────────────────────
function LayersPanel({ reduced }: { reduced: boolean }) {
  // highlight on while selection is active
  const highlight = reduced ? 1 : [0, 0, 1, 1, 1, 1, 0, 0];
  const times = [0, 0.18, 0.24, 0.46, 0.7, 0.74, 0.8, 1];

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
      {rows.map((row, i) => {
        const Icon = row.icon;
        return (
          <div
            key={row.label}
            className="relative flex items-center gap-1.5 rounded-md px-1.5 py-1.5"
          >
            {/* highlight wash for the Headline row */}
            {row.active && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-md"
                style={{
                  background: "rgba(255,170,0,0.12)",
                  border: "1px solid rgba(255,170,0,0.35)",
                  willChange: "opacity",
                }}
                initial={reduced ? { opacity: 1 } : false}
                animate={{ opacity: highlight }}
                transition={reduced ? undefined : loopTransition(times)}
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
            {/* visibility dot */}
            <span
              className={`relative ml-auto h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-[#ffaa00]/70" : "bg-zinc-600"
              }`}
            />
          </div>
        );
      })}

      {/* swatch row — cursor "picks" a swatch near the end of the loop */}
      <div className="mt-auto flex items-center gap-1.5 px-1.5 pt-2">
        {["#ffaa00", "#ff7b47", "#ffffff", "#7c7c87"].map((c, i) => (
          <motion.span
            key={c}
            className="h-3 w-3 rounded-full border border-white/15"
            style={{ background: c, willChange: "transform" }}
            initial={reduced ? { scale: i === 1 ? 1.25 : 1 } : false}
            animate={
              reduced
                ? { scale: i === 1 ? 1.25 : 1 }
                : i === 1
                  ? { scale: [1, 1, 1, 1.35, 1, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 0 rgba(0,0,0,0)", "0 0 0 rgba(0,0,0,0)", "0 0 8px rgba(255,123,71,0.7)", "0 0 0 rgba(0,0,0,0)", "0 0 0 rgba(0,0,0,0)"] }
                  : { scale: 1 }
            }
            transition={
              reduced || i !== 1
                ? undefined
                : loopTransition([0, 0.78, 0.82, 0.86, 0.92, 1])
            }
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Tool rail — left edge, lucide tool icons (move tool stays active)
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
//  The artboard — the real creative being edited
// ─────────────────────────────────────────────────────────────────────────────
function Artboard({ reduced }: { reduced: boolean }) {
  // The selected headline element's opacity animates in sync with the slider.
  const elOpacity = reduced
    ? 0.55
    : [1, 1, 1, 1, 1, 0.55, 0.55, 1, 1];
  const elTimes = [0, 0.42, 0.5, 0.56, 0.6, 0.64, 0.74, 0.82, 1];

  return (
    <div className="relative flex flex-1 items-center justify-center bg-[#050506] p-5 sm:p-7">
      {/* faint artboard checker / glow floor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(255,170,0,0.05), transparent 60%)",
        }}
      />

      {/* the design (4:5-ish artboard) */}
      <div
        className="relative w-full max-w-[230px] overflow-hidden rounded-[14px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: "4 / 5" }}
      >
        {/* photo layer */}
        <Image
          src={ARTBOARD_IMAGE}
          alt="Criativo gerado no Calango Studio"
          fill
          priority
          sizes="(max-width: 640px) 60vw, 230px"
          className="object-cover"
        />
        {/* legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

        {/* small badge / shape element */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 backdrop-blur-sm">
          <Sparkles size={9} className="text-[#ffaa00]" />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-white/90">
            Nova coleção
          </span>
        </div>

        {/* headline text element — this is what gets selected + faded */}
        <motion.div
          className="absolute inset-x-3 bottom-4"
          initial={reduced ? { opacity: 0.55 } : false}
          animate={{ opacity: elOpacity }}
          transition={reduced ? undefined : loopTransition(elTimes)}
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
//  Editor scene — chrome + rail + artboard + layers + overlays
// ─────────────────────────────────────────────────────────────────────────────
function EditorScene() {
  const reduced = useReducedMotion() ?? false;

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
        {/* hairline accent at the very top */}
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffaa00]/50 to-transparent" />

        {/* ── top bar ─────────────────────────────────────────────── */}
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

          {/* center: artboard name */}
          <span className="mx-auto hidden text-[10px] font-medium text-zinc-500 md:inline">
            criativo-cliente · 1080×1350
          </span>

          {/* zoom pill */}
          <span className="ml-auto rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold tabular-nums text-zinc-400">
            100%
          </span>
        </div>

        {/* ── editor body ─────────────────────────────────────────── */}
        <div className="relative flex h-[330px] sm:h-[380px] md:h-[420px]">
          <ToolRail />

          {/* canvas region (holds artboard + all motion overlays) */}
          <div className="relative flex-1">
            <Artboard reduced={reduced} />
            {/* overlays are positioned relative to this canvas region */}
            <SelectionBox reduced={reduced} />
            <OpacityControl reduced={reduced} />
            <EditorCursor reduced={reduced} />
          </div>

          <LayersPanel reduced={reduced} />
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
      {/* ── ambient background: faint grid + one quiet accent glow ──── */}
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
        {/* ── LEFT: copy ───────────────────────────────────────────── */}
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

        {/* ── RIGHT: the live editor scene (signature) ─────────────── */}
        <div className="relative w-full">
          <EditorScene />
        </div>
      </div>
    </section>
  );
}
