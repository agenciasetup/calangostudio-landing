"use client";

/**
 * FunctionsCarousel
 *
 * Landing section showcasing the 6 core platform functions.
 * Supports tab switching, drag/swipe (Framer Motion), prev/next arrows, dot nav.
 *
 * Only the active mock is mounted → only one forge timer runs at a time.
 *
 * Order: criar-imagem, studio, criar-copy, contexto, clientes, prospeccao
 * (sessao-fotos is excluded as requested — it's not one of the 6 core)
 */

import React, { Suspense, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers2 } from "lucide-react";
import { FUNCTIONS } from "@/components/platform/registry";
import { FitFrame } from "@/components/platform/FitFrame";
import { PlatformChrome } from "@/components/platform/PlatformChrome";

// ─── Ordered list of the 6 core functions (sessao-fotos excluded) ────────────

const CAROUSEL_KEYS = [
  "criar-imagem",
  "studio",
  "criar-copy",
  "contexto",
  "clientes",
  "prospeccao",
] as const;

type CarouselKey = (typeof CAROUSEL_KEYS)[number];

const CAROUSEL_ENTRIES = CAROUSEL_KEYS.map((key) => {
  const entry = FUNCTIONS.find((f) => f.key === key);
  if (!entry) throw new Error(`FunctionsCarousel: registry missing key "${key}"`);
  return entry;
});

// ─── Dark skeleton shown while a mock chunk loads ────────────────────────────

function MockSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-[20px] animate-pulse">
      <div className="flex flex-col items-center gap-3 text-zinc-700">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06]" />
        <div className="h-2 w-32 rounded bg-white/[0.04]" />
        <div className="h-2 w-20 rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ─── Tab bar ─────────────────────────────────────────────────────────────────

interface TabBarProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
}

function TabBar({ activeIdx, onSelect }: TabBarProps) {
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = (idx + 1) % CAROUSEL_ENTRIES.length;
        onSelect(next);
        // Move focus to new tab
        const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
        tabs?.[next]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = (idx - 1 + CAROUSEL_ENTRIES.length) % CAROUSEL_ENTRIES.length;
        onSelect(prev);
        const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
        tabs?.[prev]?.focus();
      }
    },
    [onSelect]
  );

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label="Funções da plataforma"
      className="flex gap-1 overflow-x-auto no-scrollbar pb-1"
    >
      {CAROUSEL_ENTRIES.map((entry, idx) => {
        const isActive = idx === activeIdx;
        const Icon = entry.Icon;
        return (
          <button
            key={entry.key}
            role="tab"
            aria-selected={isActive}
            aria-controls={`carousel-panel-${entry.key}`}
            id={`carousel-tab-${entry.key}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={[
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest",
              "transition-all duration-200 shrink-0 whitespace-nowrap border",
              isActive
                ? "bg-primary/15 border-primary/40 text-primary shadow-[0_0_16px_rgba(255,170,0,0.12)]"
                : "bg-white/[0.04] border-white/[0.07] text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.07]",
            ].join(" ")}
          >
            <Icon size={13} strokeWidth={isActive ? 2.5 : 2} />
            <span>{entry.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Dot nav + arrow buttons ──────────────────────────────────────────────────

interface DotsProps {
  count: number;
  activeIdx: number;
  onSelect: (idx: number) => void;
}

function Dots({ count, activeIdx, onSelect }: DotsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={`Ir para ${CAROUSEL_ENTRIES[i].label}`}
          onClick={() => onSelect(i)}
          className={[
            "rounded-full transition-all duration-300",
            i === activeIdx
              ? "w-5 h-2 bg-primary"
              : "w-2 h-2 bg-white/20 hover:bg-white/40",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

// ─── Main carousel ────────────────────────────────────────────────────────────

export default function FunctionsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // +1 = forward, -1 = backward
  const dragStartX = useRef(0);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > activeIdx ? 1 : -1);
      setActiveIdx(idx);
    },
    [activeIdx]
  );

  const prev = useCallback(() => {
    const idx = (activeIdx - 1 + CAROUSEL_ENTRIES.length) % CAROUSEL_ENTRIES.length;
    setDirection(-1);
    setActiveIdx(idx);
  }, [activeIdx]);

  const next = useCallback(() => {
    const idx = (activeIdx + 1) % CAROUSEL_ENTRIES.length;
    setDirection(1);
    setActiveIdx(idx);
  }, [activeIdx]);

  // Framer Motion drag end → snap prev/next if dragged far enough
  const handleDragEnd = useCallback(
    (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 60;
      if (info.offset.x < -threshold) next();
      else if (info.offset.x > threshold) prev();
    },
    [next, prev]
  );

  const activeEntry = CAROUSEL_ENTRIES[activeIdx];

  // Slide variants
  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (d: number) => ({
      x: d > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.985,
      transition: { duration: 0.22, ease: [0.4, 0, 1, 1] as const },
    }),
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.035] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-500/[0.025] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="badge-pill mb-5 inline-flex">
            <Layers2 size={12} />
            A plataforma por dentro
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Veja cada função{" "}
            <span className="text-gradient-animated">funcionando.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Arraste ou clique numa função — cada tela é o Calango Studio real.
          </p>
        </motion.div>

        {/* ── Tab bar ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="mb-4"
        >
          <TabBar activeIdx={activeIdx} onSelect={goTo} />
        </motion.div>

        {/* ── Stage ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {/* Frame wrapper */}
          <div
            className="relative rounded-2xl border border-white/[0.09] overflow-hidden"
            style={{
              boxShadow:
                "0 30px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
              background: "rgba(8, 8, 10, 0.95)",
            }}
          >
            {/* Subtle accent line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Drag surface — 16:10 aspect, 600px max */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragStart={(_e, info) => { dragStartX.current = info.point.x; }}
              onDragEnd={handleDragEnd}
              className="relative h-[340px] sm:h-[460px] md:h-[560px] cursor-grab active:cursor-grabbing select-none"
              style={{ touchAction: "pan-y" }}
            >
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.div
                  key={activeEntry.key}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  role="tabpanel"
                  id={`carousel-panel-${activeEntry.key}`}
                  aria-labelledby={`carousel-tab-${activeEntry.key}`}
                  className="absolute inset-0"
                >
                  <FitFrame className="h-full w-full" maxScale={1.0}>
                    <PlatformChrome active={activeEntry.key} topbar={null}>
                      <Suspense fallback={<MockSkeleton />}>
                        <activeEntry.Mock active={true} />
                      </Suspense>
                    </PlatformChrome>
                  </FitFrame>
                </motion.div>
              </AnimatePresence>

              {/* Swipe hint overlay — visible only on mobile */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:hidden pointer-events-none flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/10">
                <ChevronLeft size={10} className="text-zinc-400" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                  Arraste
                </span>
                <ChevronRight size={10} className="text-zinc-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Nav row: dots + arrows ───────────────────────────────── */}
        <div className="flex items-center justify-between mt-5">
          {/* Dots */}
          <Dots count={CAROUSEL_ENTRIES.length} activeIdx={activeIdx} onSelect={goTo} />

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Função anterior"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.09] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Próxima função"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.09] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Active function label beneath nav */}
        <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-widest text-zinc-600">
          {activeIdx + 1} / {CAROUSEL_ENTRIES.length} — {activeEntry.label}
        </p>
      </div>
    </section>
  );
}
