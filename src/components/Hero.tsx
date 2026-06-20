"use client";

/**
 * Hero — premium full-section hero for Calango Studio.
 *
 * LEFT column: copy (headline / subhead / CTAs / proof line) — unchanged.
 *
 * RIGHT column: CreativeScene — a curated, ambient, ABSTRACT composition.
 * NOT a literal editor. ~8 overlapping design-tool motifs (shapes, swatches,
 * floating creative card, tool glyphs, a hint of a selection box) drifting and
 * bobbing on offset timings, with a couple of accents smoothly cycling hue
 * (filter: hue-rotate over ~16–20s) — the "mudando o HSL" the user asked for.
 *
 * Motion is GPU-friendly (transform / opacity / filter only). With
 * prefers-reduced-motion the scene renders as a calm, beautifully-arranged
 * STATIC composition (every animate prop collapses to its resting value and the
 * hue-rotate keyframes are disabled via inline style).
 */

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MousePointer2,
  Type as TypeIcon,
  Pipette,
  SlidersHorizontal,
  Sparkles,
  Square,
} from "lucide-react";

const FLOATING_IMAGE = "/images/resultados/car_criativo.jpg";

// A slow looping float helper — keeps every element on its own offset so the
// composition reads as organic rather than synchronized.
function floatTransition(duration: number, delay: number): Transition {
  return {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
//  Squircle "artboard" — soft glass tile drifting + slow rotate
// ─────────────────────────────────────────────────────────────────────────────
function Squircle({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-[8%] top-[14%] h-[150px] w-[128px] sm:h-[190px] sm:w-[164px]"
      style={{
        borderRadius: "38% 42% 40% 36% / 40% 38% 42% 40%",
        background:
          "linear-gradient(150deg, rgba(255,170,0,0.16), rgba(255,123,71,0.05) 60%, transparent)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(2px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
        willChange: "transform",
      }}
      animate={
        reduced
          ? { rotate: -6 }
          : { y: [0, -18, 0], x: [0, 8, 0], rotate: [-7, -2, -7] }
      }
      transition={reduced ? undefined : floatTransition(13, 0)}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Hue-cycling gradient orbs — the "mudando o HSL" accents.
//  The hue-rotate runs as a CSS keyframe (className) so it loops independently
//  of framer-motion's transform float; under reduced-motion we drop the class.
// ─────────────────────────────────────────────────────────────────────────────
function HueOrb({
  reduced,
  className,
  size,
  duration,
  delay,
  drift,
}: {
  reduced: boolean;
  className: string;
  size: number;
  duration: number;
  delay: number;
  drift: { y: number; x: number };
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${
        reduced ? "" : "hero-hue-cycle"
      } ${className}`}
      style={{
        height: size,
        width: size,
        background:
          "radial-gradient(circle at 35% 30%, #ffd27a, #ffaa00 38%, #ff7b47 72%, rgba(255,123,71,0.15))",
        filter: "blur(0.5px)",
        mixBlendMode: "screen",
        opacity: 0.85,
        willChange: "transform, filter",
      }}
      animate={
        reduced
          ? undefined
          : { y: [0, drift.y, 0], x: [0, drift.x, 0] }
      }
      transition={reduced ? undefined : floatTransition(duration, delay)}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Floating creative card — grounds the scene as "criativos"
// ─────────────────────────────────────────────────────────────────────────────
function CreativeCard({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute right-[6%] top-[20%] z-20 w-[150px] sm:w-[182px]"
      style={{ willChange: "transform" }}
      animate={
        reduced
          ? { rotate: 5 }
          : { y: [0, 16, 0], rotate: [4, 7, 4] }
      }
      transition={reduced ? undefined : floatTransition(11, 0.6)}
    >
      <div
        className="relative overflow-hidden rounded-[18px] border border-white/12"
        style={{
          aspectRatio: "4 / 5",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        <Image
          src={FLOATING_IMAGE}
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 45vw, 182px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
        <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 backdrop-blur-sm">
          <Sparkles size={9} className="text-[#ffaa00]" />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-white/90">
            Criativo · IA
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Hint of a selection box — dashed accent border + 4 corner handles, drifting
// ─────────────────────────────────────────────────────────────────────────────
const CORNERS = [
  { left: "0%", top: "0%" },
  { left: "100%", top: "0%" },
  { left: "0%", top: "100%" },
  { left: "100%", top: "100%" },
];

function SelectionHint({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-[26%] top-[58%] z-30 h-[78px] w-[120px] sm:h-[96px] sm:w-[150px]"
      style={{ willChange: "transform, opacity" }}
      animate={
        reduced
          ? { opacity: 0.9, rotate: -3 }
          : { y: [0, -12, 0], x: [0, -6, 0], rotate: [-4, 0, -4], opacity: [0.75, 1, 0.75] }
      }
      transition={reduced ? undefined : floatTransition(15, 1.2)}
    >
      <div className="absolute inset-0 rounded-[6px] border border-dashed border-[#ffaa00]/80" />
      {CORNERS.map((c, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-[2px] border border-[#030303] bg-[#ffaa00] shadow-[0_0_6px_rgba(255,170,0,0.6)]"
          style={{ left: c.left, top: c.top, transform: "translate(-50%,-50%)" }}
        />
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Floating tool glyph — frosted chip with a lucide icon, gentle bob
// ─────────────────────────────────────────────────────────────────────────────
function ToolGlyph({
  reduced,
  Icon,
  className,
  duration,
  delay,
  drift,
  accent = false,
}: {
  reduced: boolean;
  Icon: typeof MousePointer2;
  className: string;
  duration: number;
  delay: number;
  drift: { y: number; x: number; r: number };
  accent?: boolean;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute z-30 flex h-9 w-9 items-center justify-center rounded-xl border backdrop-blur-md sm:h-10 sm:w-10 ${className}`}
      style={{
        background: accent
          ? "linear-gradient(135deg, rgba(255,170,0,0.22), rgba(255,123,71,0.12))"
          : "rgba(255,255,255,0.05)",
        borderColor: accent ? "rgba(255,170,0,0.4)" : "rgba(255,255,255,0.12)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
        willChange: "transform",
      }}
      animate={
        reduced
          ? { rotate: drift.r * 0.4 }
          : { y: [0, drift.y, 0], x: [0, drift.x, 0], rotate: [0, drift.r, 0] }
      }
      transition={reduced ? undefined : floatTransition(duration, delay)}
    >
      <Icon size={16} className={accent ? "text-[#ffaa00]" : "text-zinc-300"} />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Opacity chip — a small "Opacidade" slider, a wink of "editing"
// ─────────────────────────────────────────────────────────────────────────────
function OpacityChip({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute bottom-[12%] left-[14%] z-30"
      style={{ willChange: "transform" }}
      animate={
        reduced
          ? { rotate: 2 }
          : { y: [0, -10, 0], rotate: [0, 2, 0] }
      }
      transition={reduced ? undefined : floatTransition(12, 1.8)}
    >
      <div
        className="rounded-xl border border-white/12 px-3 py-2 backdrop-blur-md"
        style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}
      >
        <div className="mb-1.5 flex items-center gap-1.5">
          <SlidersHorizontal size={10} className="text-[#ffaa00]" />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-zinc-400">
            Opacidade
          </span>
        </div>
        <div className="relative h-1.5 w-24 rounded-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0 w-[62%] rounded-full"
            style={{ background: "linear-gradient(90deg,#ffaa00,#ff7b47)" }}
          />
          <div className="absolute left-[62%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#030303] bg-white shadow-[0_0_8px_rgba(255,170,0,0.5)]" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Color swatches strip — a hue-cycling accent (the playful HSL move)
// ─────────────────────────────────────────────────────────────────────────────
function SwatchStrip({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute right-[16%] bottom-[16%] z-30"
      style={{ willChange: "transform" }}
      animate={
        reduced
          ? { rotate: -4 }
          : { y: [0, 14, 0], x: [0, -8, 0], rotate: [-3, 1, -3] }
      }
      transition={reduced ? undefined : floatTransition(14, 0.4)}
    >
      <div
        className={`flex gap-1.5 rounded-2xl border border-white/12 p-2 backdrop-blur-md ${
          reduced ? "" : "hero-hue-cycle"
        }`}
        style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 12px 30px rgba(0,0,0,0.45)" }}
      >
        {["#ffaa00", "#ff7b47", "#ff5d8f", "#7c5cff"].map((c, i) => (
          <span
            key={c}
            className="h-5 w-5 rounded-full border border-white/20"
            style={{
              background: c,
              boxShadow: i === 0 ? "0 0 0 2px rgba(255,170,0,0.5)" : undefined,
            }}
          />
        ))}
        <span className="ml-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-black/30">
          <Pipette size={11} className="text-zinc-300" />
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  CreativeScene — assembles the floating composition
// ─────────────────────────────────────────────────────────────────────────────
function CreativeScene() {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px]"
    >
      {/* soft ambient glow blobs behind everything */}
      <div
        className="pointer-events-none absolute left-[28%] top-[22%] h-[60%] w-[60%] rounded-full opacity-70 blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,170,0,0.20), rgba(255,123,71,0.06) 50%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[14%] bottom-[18%] h-[42%] w-[42%] rounded-full opacity-60 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.16), transparent 70%)",
        }}
      />

      {/* layered composition (back → front via z-index) */}
      <Squircle reduced={reduced} />

      <HueOrb
        reduced={reduced}
        className="left-[2%] bottom-[20%] z-10"
        size={92}
        duration={17}
        delay={0.3}
        drift={{ y: -22, x: 10 }}
      />
      <HueOrb
        reduced={reduced}
        className="right-[2%] top-[6%] z-10"
        size={64}
        duration={20}
        delay={1.4}
        drift={{ y: 18, x: -12 }}
      />

      <CreativeCard reduced={reduced} />
      <SelectionHint reduced={reduced} />
      <OpacityChip reduced={reduced} />
      <SwatchStrip reduced={reduced} />

      {/* drifting design-tool glyphs */}
      <ToolGlyph
        reduced={reduced}
        Icon={MousePointer2}
        className="left-[40%] top-[6%]"
        duration={10}
        delay={0.2}
        drift={{ y: 14, x: 6, r: -8 }}
        accent
      />
      <ToolGlyph
        reduced={reduced}
        Icon={TypeIcon}
        className="left-[4%] top-[44%]"
        duration={13}
        delay={1.1}
        drift={{ y: -16, x: 8, r: 6 }}
      />
      <ToolGlyph
        reduced={reduced}
        Icon={Square}
        className="right-[8%] top-[58%]"
        duration={12}
        delay={0.7}
        drift={{ y: 12, x: -8, r: -6 }}
      />
      <ToolGlyph
        reduced={reduced}
        Icon={Sparkles}
        className="right-[34%] top-[10%]"
        duration={11}
        delay={1.6}
        drift={{ y: 16, x: -6, r: 8 }}
        accent
      />
    </motion.div>
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

        {/* RIGHT: ambient creative scene */}
        <div className="relative w-full">
          <CreativeScene />
        </div>
      </div>
    </section>
  );
}
