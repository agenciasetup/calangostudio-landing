"use client";

/**
 * AIContext → "A copy já sai com a cara do cliente."
 *
 * Tight, connected "context → copy" flow (no dead space):
 *   [cliente + o que a IA usa]  →(contexto flui)→  [Criar Post]
 * The loop makes the context pickup obvious: clica GERAR COPY → a IA LÊ o
 * contexto do cliente item por item (checklist) → escreve a copy digitando →
 * mostra as tags de contexto aplicado. The client card glows + each context
 * field lights up as it's read. Honors prefers-reduced-motion.
 */

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Sparkles,
  RefreshCw,
  Check,
  MousePointer2,
  ArrowRight,
  Tag,
  Mic,
  Users,
  Layers,
} from "lucide-react";
import { reveal, staggerContainer, inView } from "@/lib/motion";
import { useScrollProgress, useParallax } from "@/lib/useParallax";

const BRAND = "Advocacia Andrade";

// The client context the AI reads — the "input".
const CONTEXT = [
  { icon: Tag, label: "Nicho", value: "Direito do trabalho" },
  { icon: Mic, label: "Tom de voz", value: "Autoridade, didático" },
  { icon: Users, label: "Público", value: "CLT e PJ" },
  { icon: Layers, label: "Pilares", value: "Direitos, dúvidas" },
];

// The generated Estático copy as structured lines (no raw markdown while typing).
const LINES: { t: string; kind: "h" | "b" | "cta" }[] = [
  { t: "Te mandaram embora por justa causa?", kind: "h" },
  {
    t: "Na prática, a maioria é aplicada errada: falta prova, falta proporcionalidade, falta o passo a passo que a lei exige.",
    kind: "b",
  },
  {
    t: "Reverter na Justiça muda tudo: aviso, 13º, férias e a multa de 40% do FGTS voltam pra você.",
    kind: "b",
  },
  { t: "Manda um direct antes de assinar a rescisão 👇", kind: "cta" },
];
const FULL = LINES.map((l) => l.t).join("\n");

// phases: 0 idle(button) · 1 click · 2 reading · 3 typing · 4 done
const PHASE_MS = [1500, 460, 2400, 2400, 2400];

function usePhase(reduced: boolean) {
  const [p, setP] = useState(reduced ? 4 : 0);
  useEffect(() => {
    if (reduced) {
      setP(4);
      return;
    }
    let cur = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      cur = (cur + 1) % 5;
      setP(cur);
      t = setTimeout(tick, PHASE_MS[cur]);
    };
    setP(0);
    t = setTimeout(tick, PHASE_MS[0]);
    return () => clearTimeout(t);
  }, [reduced]);
  return p;
}

// Context items read so far (advances during the reading phase).
function useReadStep(phase: number, reduced: boolean) {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (reduced || phase >= 3) {
      setS(CONTEXT.length);
      return;
    }
    if (phase < 2) {
      setS(0);
      return;
    }
    setS(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setS(i);
      if (i >= CONTEXT.length) clearInterval(id);
    }, 520);
    return () => clearInterval(id);
  }, [phase, reduced]);
  return s;
}

function useTyping(phase: number, reduced: boolean) {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    if (reduced || phase >= 4) {
      setChars(FULL.length);
      return;
    }
    if (phase < 3) {
      setChars(0);
      return;
    }
    setChars(0);
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setChars(Math.min(i, FULL.length));
      if (i >= FULL.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [phase, reduced]);
  return chars;
}

function TypedCopy({ chars, typing }: { chars: number; typing: boolean }) {
  const shown = FULL.slice(0, chars).split("\n");
  return (
    <div className="flex w-full flex-col justify-center gap-2.5 text-center">
      {shown.map((line, i) => {
        const kind = LINES[i]?.kind ?? "b";
        const caret =
          typing && i === shown.length - 1 ? <span className="animate-cursor text-orange-400">▍</span> : null;
        if (kind === "h")
          return (
            <p key={i} className="font-display text-base font-black uppercase leading-tight text-white">
              {line}
              {caret}
            </p>
          );
        if (kind === "cta")
          return (
            <p key={i} className="text-[12px] italic leading-relaxed text-zinc-300">
              {line}
              {caret}
            </p>
          );
        return (
          <p key={i} className="text-[12px] leading-relaxed text-[#eeeeee]">
            {line}
            {caret}
          </p>
        );
      })}
    </div>
  );
}

// ─── LEFT: client + the context the AI uses ───────────────────────────────────
function ClientContext({ readStep, glow }: { readStep: number; glow: boolean }) {
  return (
    <motion.div
      animate={{
        boxShadow: glow
          ? "0 0 0 1px rgba(255,170,0,0.45), 0 0 44px rgba(255,170,0,0.16)"
          : "0 0 0 1px rgba(255,255,255,0.07), 0 0 0px rgba(255,170,0,0)",
      }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-[#0B0B0E] p-4"
    >
      {/* identity */}
      <div className="flex items-center gap-3">
        <div
          className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl text-sm font-black text-black shadow-lg"
          style={{ background: "linear-gradient(135deg, #ffaa00 0%, #b8741a 100%)" }}
        >
          AA
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-display text-[15px] font-black tracking-tight text-white">
            <span className="whitespace-nowrap">{BRAND}</span>
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/45">
            Advocacia · Trabalhista
          </p>
        </div>
      </div>

      {/* the context */}
      <p className="mb-2.5 mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
        A IA escreve usando
      </p>
      <div className="space-y-2">
        {CONTEXT.map((it, i) => {
          const used = readStep > i;
          const Icon = it.icon;
          return (
            <div
              key={it.label}
              className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors duration-300 ${
                used ? "border-amber-500/40 bg-amber-500/[0.07]" : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              <span
                className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg transition-colors duration-300 ${
                  used ? "bg-amber-500/15 text-amber-400" : "bg-white/5 text-zinc-500"
                }`}
              >
                <Icon size={13} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">{it.label}</p>
                <p className="truncate text-[12px] font-semibold text-white/80">{it.value}</p>
              </div>
              {used && <Check size={14} className="flex-shrink-0 text-amber-400" strokeWidth={3} />}
            </div>
          );
        })}
      </div>

      {/* voice */}
      <div className="mt-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
        <p className="mb-1 text-[8px] font-bold uppercase tracking-wider text-white/35">Voz da marca</p>
        <p className="text-[11px] leading-relaxed text-white/55">
          Séria, confiável e didática. Sem juridiquês.
        </p>
      </div>
    </motion.div>
  );
}

// ─── MIDDLE: the flow connector ───────────────────────────────────────────────
function Connector({ active }: { active: boolean }) {
  return (
    <div className="hidden flex-col items-center justify-center gap-1.5 lg:flex">
      <span
        className={`text-[8px] font-black uppercase tracking-[0.18em] transition-colors ${
          active ? "text-amber-400" : "text-zinc-600"
        }`}
      >
        contexto
      </span>
      <div className="relative flex items-center">
        <div
          className={`h-[2px] w-9 rounded transition-colors ${
            active ? "bg-gradient-to-r from-amber-500/20 to-amber-500" : "bg-white/15"
          }`}
        />
        <ArrowRight size={15} className={active ? "text-amber-400" : "text-zinc-600"} />
        {active && (
          <motion.span
            className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-amber-400"
            animate={{ x: [0, 34], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}

// ─── RIGHT: Criar Post (button → reading → typing → done) ─────────────────────
function CopyResult({ phase, chars, readStep }: { phase: number; chars: number; readStep: number }) {
  const showButton = phase <= 1;
  const clicking = phase === 1;
  const reading = phase === 2;
  const typing = phase === 3;
  const done = phase >= 4;
  const status = phase >= 1 && phase <= 3 ? "escrevendo" : "pronta";

  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/10 text-orange-500">
            <FileText size={17} />
          </div>
          <div>
            <p className="font-display text-[15px] font-bold leading-tight text-white">Criar Post</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Estático</p>
          </div>
        </div>
        {status === "escrevendo" ? (
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400">
            <RefreshCw size={12} className="animate-spin" /> escrevendo
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
            <Check size={12} strokeWidth={3} /> pronta
          </span>
        )}
      </div>

      {/* post card */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
        {/* post header */}
        <div className="flex items-center gap-2.5 border-b border-white/5 p-3.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 p-[2px]">
            <span className="grid h-full w-full place-items-center rounded-full bg-zinc-900 text-[10px] font-black text-white">
              AA
            </span>
          </span>
          <span className="text-sm font-bold text-white">{BRAND}</span>
        </div>

        {/* content */}
        <div className="flex min-h-[244px] items-center justify-center bg-[#222222] p-5">
          {showButton && (
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="max-w-[220px] text-[12px] leading-relaxed text-zinc-400">
                A IA escreve no contexto de{" "}
                <span className="font-semibold text-white">Advocacia Andrade</span>.
              </p>
              <div className="relative">
                {clicking && (
                  <motion.span
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.6 }}
                    transition={{ duration: 0.5 }}
                    style={{ boxShadow: "0 0 0 2px rgba(255,170,0,0.6)" }}
                  />
                )}
                <motion.div
                  animate={{ scale: clicking ? 0.93 : 1, filter: clicking ? "brightness(1.15)" : "brightness(1)" }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ffaa00] to-[#ff7b47] px-6 py-3.5 text-[13px] font-black uppercase tracking-wider text-black shadow-[0_8px_24px_-6px_rgba(255,140,0,0.6)]"
                >
                  <Sparkles size={16} /> Gerar copy
                </motion.div>
                <motion.div
                  className="pointer-events-none absolute -bottom-3 -right-2 text-white"
                  initial={false}
                  animate={{ y: clicking ? -4 : 0, scale: clicking ? 0.85 : 1 }}
                  transition={{ duration: 0.18 }}
                >
                  <MousePointer2 size={18} className="fill-white" />
                </motion.div>
              </div>
            </div>
          )}

          {reading && (
            <div className="flex w-full flex-col gap-2 px-1">
              <div className="mb-1 flex items-center justify-center gap-2">
                <RefreshCw size={15} className="animate-spin text-orange-500" />
                <span className="text-[12px] font-bold text-white">Lendo o contexto do cliente</span>
              </div>
              {CONTEXT.map((it, i) => {
                const ok = readStep > i;
                return (
                  <div
                    key={it.label}
                    className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] transition-all duration-300 ${
                      ok
                        ? "border-amber-500/30 bg-amber-500/[0.08] text-white"
                        : "border-white/[0.06] bg-white/[0.02] text-white/40"
                    }`}
                  >
                    {ok ? (
                      <Check size={12} className="flex-shrink-0 text-amber-400" strokeWidth={3} />
                    ) : (
                      <span className="h-3 w-3 flex-shrink-0 animate-pulse rounded-full border border-white/20" />
                    )}
                    <span className="font-semibold">{it.label}:</span>
                    <span className="truncate text-white/70">{it.value}</span>
                  </div>
                );
              })}
            </div>
          )}

          {(typing || done) && <TypedCopy chars={chars} typing={typing} />}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between p-3.5 text-white">
          <div className="flex items-center gap-4">
            <Heart size={20} className={done ? "fill-rose-500 text-rose-500" : ""} />
            <MessageCircle size={20} />
            <Send size={20} />
          </div>
          <Bookmark size={20} />
        </div>
      </div>

      {/* context-applied proof */}
      <motion.div
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-3 flex flex-wrap items-center justify-center gap-2"
      >
        <span className="text-[10px] font-semibold text-zinc-500">no contexto de Advocacia Andrade:</span>
        {["tom didático", "nicho trabalhista", "sem juridiquês"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/[0.07] px-2.5 py-1 text-[10px] font-semibold text-amber-300"
          >
            <Check size={10} strokeWidth={3} /> {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function AIContext() {
  const reduced = useReducedMotion() ?? false;
  const phase = usePhase(reduced);
  const readStep = useReadStep(phase, reduced);
  const chars = useTyping(phase, reduced);
  const glow = phase >= 1 && phase <= 3;

  const { ref, progress } = useScrollProgress();
  const panelY = useParallax(progress, 32);

  return (
    <section
      ref={ref}
      className="atmo relative overflow-hidden section-pad px-4"
      style={{ background: "#050505" }}
      aria-label="Criar copy no contexto do cliente"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{ background: "rgba(255,170,0,0.05)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* header */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <motion.span variants={reveal(12)} className="eyebrow mb-6 inline-flex">
            <FileText size={13} className="text-orange-400" />
            Criar copy + cliente
          </motion.span>
          <motion.h2 variants={reveal(20)} className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl">
            A copy já sai com{" "}
            <span className="text-gradient-animated">a cara do cliente.</span>
          </motion.h2>
          <motion.p variants={reveal(16)} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-txt-secondary md:text-lg">
            A IA lê o contexto do cliente e escreve no tom de voz e no nicho dele.
            Você só revisa e posta.
          </motion.p>
        </motion.div>

        {/* the panel */}
        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={inView}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-lit overflow-hidden"
        >
          {/* browser bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3 md:px-5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-txt-muted">
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
              calango.studio/produzir
            </div>
          </div>

          {/* tight, centered context → copy flow */}
          <div className="grid grid-cols-1 items-center justify-center gap-6 p-5 md:p-7 lg:grid-cols-[minmax(0,300px)_auto_minmax(0,380px)] lg:gap-4">
            <ClientContext readStep={readStep} glow={glow} />
            <Connector active={phase === 2} />
            <CopyResult phase={phase} chars={chars} readStep={readStep} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
