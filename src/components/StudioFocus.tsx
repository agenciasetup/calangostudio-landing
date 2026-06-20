"use client";

/**
 * StudioFocus
 *
 * Landing section spotlighting the Studio — the in-platform design editor.
 * "Uma seção que mostra o studio, foco nele."
 *
 * Layout: two-column on desktop (copy left, editor right), stacked on mobile.
 * The editor mock is the real MockStudio wrapped in FitFrame + PlatformChrome
 * with sidebar={false} (Studio is fullscreen — matches its `fullscreen: true`
 * registry flag and the exact PlatformChrome docs).
 *
 * Motion: framer-motion whileInView reveals, staggered. prefers-reduced-motion
 * respected via useReducedMotion.
 */

import { Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers, Type, Sliders, Download, PenLine } from "lucide-react";
import { FitFrame } from "@/components/platform/FitFrame";
import { PlatformChrome } from "@/components/platform/PlatformChrome";
import MockStudio from "@/components/platform/mocks/MockStudio";

// ─── Feature chips (shown below the subheadline) ──────────────────────────────

const CHIPS = [
  { icon: Layers, label: "Camadas" },
  { icon: Type, label: "Texto e formas" },
  { icon: Sliders, label: "Filtros" },
  { icon: Download, label: "Export em alta" },
] as const;

// ─── Skeleton fallback while MockStudio loads ─────────────────────────────────

function EditorSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#050505] animate-pulse rounded-[18px]">
      <div className="flex flex-col items-center gap-3 text-zinc-800">
        <PenLine size={28} strokeWidth={1.5} className="text-zinc-700" />
        <div className="h-2 w-28 rounded bg-white/[0.04]" />
        <div className="h-2 w-16 rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function StudioFocus() {
  const reduced = useReducedMotion();

  // Framer-motion base: if reduced motion is preferred, skip translate/scale,
  // just fade in (opacity only).
  const copyVariants = {
    hidden: { opacity: 0, x: reduced ? 0 : -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const editorVariants = {
    hidden: { opacity: 0, x: reduced ? 0 : 28, scale: reduced ? 1 : 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.28 + i * 0.07, duration: 0.35 },
    }),
  };

  return (
    <section
      id="studio"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      aria-label="Studio — editor de design"
    >
      {/* ── Ambient glows ──────────────────────────────────────────────────── */}
      {/* Brand amber glow — left, behind the copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/4 w-[480px] h-[480px] rounded-full blur-[160px]"
        style={{ background: "rgba(255,170,0,0.055)" }}
      />
      {/* Studio fuchsia glow — right, behind the editor */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 w-[420px] h-[420px] rounded-full blur-[140px]"
        style={{ background: "rgba(217,70,239,0.07)" }}
      />
      {/* Deep background vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(217,70,239,0.03) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

          {/* ── Left: copy ─────────────────────────────────────────────────── */}
          <motion.div
            className="flex-1 min-w-0 max-w-lg lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={copyVariants}
          >
            {/* Eyebrow */}
            <span className="badge-pill mb-6 inline-flex">
              <PenLine size={12} />
              O Studio
            </span>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl leading-[1.08] tracking-tight mb-5">
              Seu editor de design,{" "}
              <span className="text-gradient-animated">dentro da plataforma.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-txt-secondary text-base md:text-[1.05rem] leading-relaxed max-w-md mb-8">
              Camadas, texto, formas, filtros e exportação em alta — tudo dentro da
              plataforma. O que você faria no Photoshop ou no Canva, aqui, já com o
              contexto do cliente.
            </p>

            {/* Feature chips */}
            <ul className="flex flex-wrap gap-2.5 mb-10" aria-label="Recursos do Studio">
              {CHIPS.map(({ icon: Icon, label }, i) => (
                <motion.li
                  key={label}
                  custom={i}
                  variants={chipVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#d4d4d8",
                  }}
                >
                  <Icon size={13} className="text-accent flex-shrink-0" strokeWidth={2.5} />
                  {label}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#planos"
              className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
              aria-label="Abrir o Studio — ir para planos"
            >
              Abrir o Studio
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* ── Right: editor window ────────────────────────────────────────── */}
          <motion.div
            className="w-full lg:flex-1 lg:min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={editorVariants}
          >
            {/*
             * Editor window container — 16:10 aspect ratio, max 680px wide.
             * Glass border + fuchsia accent glow mimicking the Studio's own
             * accent color, so it feels like the tool's "halo" in page context.
             */}
            <div
              className="relative mx-auto w-full"
              style={{ maxWidth: 680 }}
            >
              {/* Outer glow ring — fuchsia, Studio's accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[22px]"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(217,70,239,0.25), 0 0 60px rgba(217,70,239,0.12), 0 0 120px rgba(217,70,239,0.07)",
                }}
              />

              {/* Window frame */}
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  background: "rgba(5,5,5,0.98)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
                  // 16:10 aspect ratio
                  aspectRatio: "16 / 10",
                }}
              >
                {/* Accent line at top edge */}
                <div
                  aria-hidden
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                  style={{
                    width: "40%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(217,70,239,0.5), transparent)",
                  }}
                />

                {/* FitFrame scales MockStudio to fill the 16:10 box */}
                <FitFrame className="h-full w-full" maxScale={1.0}>
                  <PlatformChrome active="studio" topbar={null} sidebar={false}>
                    <Suspense fallback={<EditorSkeleton />}>
                      <MockStudio active />
                    </Suspense>
                  </PlatformChrome>
                </FitFrame>
              </div>

              {/* Label pill — floats below the editor window */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30
                           flex items-center gap-2 px-3.5 py-1.5 rounded-full
                           text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                style={{
                  background: "rgba(10,10,12,0.9)",
                  border: "1px solid rgba(217,70,239,0.3)",
                  color: "#d946ef",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(217,70,239,0.15)",
                }}
              >
                <PenLine size={11} strokeWidth={2.5} />
                Studio
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
