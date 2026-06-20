"use client";

/**
 * Hero — new version for the platform-identity mockup redesign.
 *
 * Structure:
 *   1. Badge/eyebrow
 *   2. H1 with "IA" in brand gradient
 *   3. Subheadline
 *   4. CTAs (primary → #planos, secondary → #funcoes)
 *   5. Proof line
 *   6. Platform mock window: PlatformChrome<criar-imagem> + FitFrame
 *   7. Results marquee from /images/resultados/
 *
 * The VSL player has been extracted to DemoSection.tsx.
 */

import { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { FitFrame } from "@/components/platform/FitFrame";
import { PlatformChrome } from "@/components/platform/PlatformChrome";
import MockCriarImagem from "@/components/platform/mocks/MockCriarImagem";

// ─── Marquee images (verified to exist in /public/images/resultados/) ──────────

const MARQUEE_IMAGES = [
  { src: "/images/resultados/hero_criativo.jpg",       alt: "Criativo hero" },
  { src: "/images/resultados/car_criativo.jpg",         alt: "Criativo carro" },
  { src: "/images/resultados/business_criativo.jpg",    alt: "Criativo business" },
  { src: "/images/resultados/animal_criativo.jpg",      alt: "Criativo animal" },
  { src: "/images/resultados/classic_criativo.jpg",     alt: "Criativo clássico" },
  { src: "/images/resultados/homem_foto.jpeg",          alt: "Foto homem" },
  { src: "/images/resultados/raquel_foto_1.png",        alt: "Foto Raquel" },
  { src: "/images/resultados/Kel_foto.jpg",             alt: "Foto Kel" },
  { src: "/images/resultados/animal2_criativo.jpg",     alt: "Criativo animal 2" },
  { src: "/images/resultados/car2_criativo.jpg",        alt: "Criativo carro 2" },
  { src: "/images/resultados/business2_criativo.jpg",   alt: "Criativo business 2" },
  { src: "/images/resultados/hero3_criativo.jpg",       alt: "Criativo hero 3" },
] as const;

// ─── Mock skeleton (while MockCriarImagem lazy-loads) ─────────────────────────

function MockSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/40 animate-pulse">
      <div className="flex flex-col items-center gap-3 text-zinc-700">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06]" />
        <div className="h-2 w-32 rounded bg-white/[0.04]" />
        <div className="h-2 w-20 rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ─── Results marquee ──────────────────────────────────────────────────────────

function ResultsMarquee() {
  // Duplicate the set for seamless loop
  const items = useMemo(() => [...MARQUEE_IMAGES, ...MARQUEE_IMAGES], []);

  // Approximate total width: 12 original images × (168px + 12px gap) = ~2160px
  const setWidth = MARQUEE_IMAGES.length * (168 + 12);

  return (
    <div className="mt-6 md:mt-8">
      {/* Label */}
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3">
        Resultados gerados na plataforma
      </p>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex gap-3 scroll-row-left"
          style={
            {
              "--set-width": `${setWidth}px`,
              "--set-width-mobile": `${setWidth}px`,
            } as React.CSSProperties
          }
        >
          {items.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[120px] h-[80px] md:w-[168px] md:h-[112px] rounded-xl overflow-hidden border border-white/[0.07]"
              style={{ willChange: "transform" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 168px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-start px-4 pt-32 md:pt-40 pb-24 overflow-hidden">

      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg hero-grid-animated absolute inset-0 opacity-100" />
      </div>

      {/* Pulsing radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="section-glow-pulse w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-accent/20 via-accent-end/10 to-transparent blur-[80px] md:blur-[140px]"
        />
        <div
          className="section-glow-pulse-alt w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tl from-purple-500/8 via-blue-500/5 to-transparent blur-[60px] md:blur-[120px]"
          style={{ top: "30%", left: "60%" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* ── 1. Badge ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 md:mb-8"
        >
          <span className="badge-pill">
            <Sparkles size={12} />
            Pra quem cria com IA e precisa fechar cliente
          </span>
        </motion.div>

        {/* ── 2. H1 ──────────────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="font-display font-black text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 md:mb-8 tracking-tight"
        >
          Faça criativos usando{" "}
          <span className="text-gradient-animated">IA</span>
        </motion.h1>

        {/* ── 3. Subheadline ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base md:text-lg text-txt-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          Crie copy, gere imagens, faça sessão de fotos e construa suas artes —
          tudo conectado com a identidade e o contexto do seu cliente.
        </motion.p>

        {/* ── 4. CTAs ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5"
        >
          <a
            href="#planos"
            className="btn-primary px-10 py-4 text-sm tracking-widest flex items-center gap-2 group"
          >
            Começar agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#funcoes"
            className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm"
          >
            Ver funcionando
            <ChevronDown size={14} className="animate-float" />
          </a>
        </motion.div>

        {/* ── 5. Proof line ──────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.26 }}
          className="text-[11px] md:text-xs text-zinc-500 font-medium mb-14 md:mb-18"
        >
          ⭐ 4,9 — designers e social medias já operam no Calango Studio
        </motion.p>

        {/* ── 6. Platform mock window ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="relative mx-auto w-full max-w-5xl"
        >
          {/* Glow behind window */}
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-accent/20 via-accent-end/10 to-transparent blur-[32px] opacity-60 pointer-events-none" />

          {/* App window frame */}
          <div
            className="relative rounded-[20px] md:rounded-[24px] overflow-hidden border border-white/[0.09]"
            style={{
              background: "rgba(8, 8, 10, 0.95)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Thin accent line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            {/* Window chrome bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.015]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4 h-6 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 mr-1.5 rounded-full bg-green-400/60" />
                app.calango.studio — Criar Imagem
              </div>
            </div>

            {/* Mock content: 16/10 aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: "62.5%" /* 10/16 */ }}>
              <div className="absolute inset-0">
                <FitFrame className="h-full w-full" maxScale={1.0}>
                  <PlatformChrome active="criar-imagem" topbar={null}>
                    <Suspense fallback={<MockSkeleton />}>
                      <MockCriarImagem active />
                    </Suspense>
                  </PlatformChrome>
                </FitFrame>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 7. Results marquee ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <ResultsMarquee />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>

    </section>
  );
}
