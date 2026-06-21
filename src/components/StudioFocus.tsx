"use client";

/**
 * StudioFocus — immersive, full-bleed spotlight on the in-platform editor.
 *
 * The whole section reads as the Studio's own dark environment: the real
 * MockStudio is rendered LARGE and centered as the hero object, floating in
 * fuchsia-lit black space with a pointer-reactive 3D tilt and scroll parallax.
 * Copy is kept compact above it so the product — not a wall of text — leads.
 *
 * Motion: ambient glows + window + copy drift at different scroll rates
 * (useParallax), the window tilts toward the cursor (useTilt). All collapse to
 * a calm static composition under prefers-reduced-motion.
 */

import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Type, Sliders, Download, PenLine } from "lucide-react";
import { FitFrame } from "@/components/platform/FitFrame";
import { PlatformChrome } from "@/components/platform/PlatformChrome";
import MockStudio from "@/components/platform/mocks/MockStudio";
import { useScrollProgress, useParallax, useTilt } from "@/lib/useParallax";
import { reveal, revealScale, staggerContainer, inView } from "@/lib/motion";

const CHIPS = [
  { icon: Layers, label: "Camadas" },
  { icon: Type, label: "Texto e formas" },
  { icon: Sliders, label: "Filtros" },
  { icon: Download, label: "Export em alta" },
] as const;

function EditorSkeleton() {
  return (
    <div className="flex h-full w-full animate-pulse items-center justify-center rounded-[18px] bg-[#050505]">
      <div className="flex flex-col items-center gap-3 text-zinc-800">
        <PenLine size={28} strokeWidth={1.5} className="text-zinc-700" />
        <div className="h-2 w-28 rounded bg-white/[0.04]" />
        <div className="h-2 w-16 rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

export default function StudioFocus() {
  const { ref, progress } = useScrollProgress();
  const glowY = useParallax(progress, 90);
  const windowY = useParallax(progress, 46);
  const copyY = useParallax(progress, 18);
  const tilt = useTilt(6);

  return (
    <section
      ref={ref}
      id="studio"
      className="atmo grain relative overflow-hidden section-pad-lg"
      style={{ background: "radial-gradient(120% 90% at 50% 0%, #140c02 0%, #070502 45%, #010101 100%)" }}
      aria-label="Studio — editor de design dentro da plataforma"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />

      {/* ── Ambient studio light (parallax) ──────────────────────────────── */}
      <motion.div style={{ y: glowY }} aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* fuchsia core — the Studio's signature accent */}
        <div
          className="absolute left-1/2 top-[34%] h-[560px] w-[760px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(255,170,0,0.15), rgba(255,123,71,0.05) 55%, transparent 72%)" }}
        />
        {/* warm amber counter-light, lower left */}
        <div
          className="absolute bottom-[8%] left-[6%] h-[360px] w-[360px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(255,170,0,0.10), transparent 70%)" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── Compact copy ────────────────────────────────────────────────── */}
        <motion.div
          style={{ y: copyY }}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <motion.span variants={reveal(14)} className="eyebrow mb-6 inline-flex">
            <PenLine size={13} className="text-accent" />
            O Studio
          </motion.span>

          <motion.h2
            variants={reveal(20)}
            className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl"
          >
            Seu editor de design,{" "}
            <span className="text-gradient-animated">
              dentro da plataforma.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal(16)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-txt-secondary md:text-lg"
          >
            Camadas, texto, formas, filtros e exportação em alta. Tudo o que você faria
            no Photoshop ou no Canva acontece aqui, já com o contexto do cliente.
          </motion.p>
        </motion.div>

        {/* ── The hero: big Studio window (tilt + parallax) ──────────────── */}
        <motion.div
          style={{ y: windowY }}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={revealScale(0.05, 0.8)}
          className="perspective relative mx-auto w-full max-w-5xl xl:max-w-6xl"
        >
          {/* light pool under the window — makes it read as floating */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[78%] -translate-x-1/2 rounded-[50%] blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(255,170,0,0.2), transparent 70%)" }}
          />

          <motion.div
            {...tilt.bind}
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* fuchsia halo ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[26px]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,170,0,0.22), 0 0 80px rgba(255,170,0,0.16), 0 0 160px rgba(255,170,0,0.08)",
              }}
            />

            {/* window frame — 16:10, holds the real Studio mock */}
            <div
              className="relative overflow-hidden rounded-[24px]"
              style={{
                background: "rgba(5,5,6,0.98)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow:
                  "0 50px 120px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)",
                aspectRatio: "16 / 10",
              }}
            >
              {/* fuchsia accent hairline along the top edge */}
              <div
                aria-hidden
                className="absolute left-1/2 top-0 z-20 h-px w-2/5 -translate-x-1/2"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,170,0,0.6), transparent)" }}
              />
              <FitFrame className="h-full w-full" maxScale={1.0}>
                <PlatformChrome active="studio" topbar={null} sidebar={false}>
                  <Suspense fallback={<EditorSkeleton />}>
                    <MockStudio active />
                  </Suspense>
                </PlatformChrome>
              </FitFrame>
            </div>

            {/* floating "Studio" label */}
            <div
              className="absolute -bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest"
              style={{
                background: "rgba(14,10,6,0.92)",
                border: "1px solid rgba(255,170,0,0.32)",
                color: "#ffb733",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(255,170,0,0.18)",
              }}
            >
              <PenLine size={11} strokeWidth={2.5} />
              Studio
            </div>
          </motion.div>
        </motion.div>

        {/* ── Feature chips + CTA ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={staggerContainer(0.06, 0.1)}
          className="mt-16 flex flex-col items-center gap-7"
        >
          <ul className="flex flex-wrap justify-center gap-2.5" aria-label="Recursos do Studio">
            {CHIPS.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={reveal(10)}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold tracking-wide"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#d4d4d8",
                }}
              >
                <Icon size={14} className="flex-shrink-0 text-accent" strokeWidth={2.5} />
                {label}
              </motion.li>
            ))}
          </ul>

          <motion.a
            variants={reveal(10)}
            href="#planos"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            aria-label="Abrir o Studio — ir para planos"
          >
            Abrir o Studio
            <ArrowRight size={15} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
