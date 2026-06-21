"use client";

/**
 * Comparison — "6 assinaturas viram 1".
 *
 * Reframed as a calm visual equation instead of two heavy competing cards:
 *   [the old way — quiet, neutral, struck-through]  →  [Calango — the only color]
 * The left side is deliberately desaturated (the past); colour and glow live
 * only on the Calango side (the answer). Far less text, far less red.
 */

import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useAffiliate } from "@/lib/useAffiliate";
import { reveal, revealX, staggerContainer, inView } from "@/lib/motion";

// Single source of truth with Pricing.tsx.
const PRO_PRICE_DIRECT = "199,90";
const PRO_PRICE_AFFILIATE = "169,90";

const TOOLS = [
  { name: "ChatGPT", price: "99,90" },
  { name: "Magnific (Freepik)", price: "180,00" },
  { name: "Adobe", price: "235,00" },
  { name: "Canva PRO", price: "34,90" },
  { name: "Flux", price: "29,90" },
  { name: "CRM", price: "100 a 300" },
];

const PILLS = ["IA com contexto", "Studio de edição", "CRM + prospecção"];

export default function Comparison() {
  const isAffiliate = !!useAffiliate();
  const proPrice = isAffiliate ? PRO_PRICE_AFFILIATE : PRO_PRICE_DIRECT;

  return (
    <section
      className="atmo relative overflow-hidden section-pad px-4"
      style={{ background: "#040404" }}
      aria-label="Comparação de custos"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />
      {/* one quiet amber glow, behind the Calango card */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full blur-[150px]"
        style={{ background: "rgba(255,170,0,0.06)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mb-14 text-center md:mb-20"
        >
          <motion.span variants={reveal(12)} className="eyebrow mb-6 inline-flex">
            Sua stack hoje
          </motion.span>
          <motion.h2
            variants={reveal(20)}
            className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl"
          >
            Pare de pagar <span className="text-gradient-animated">6 assinaturas.</span>
          </motion.h2>
          <motion.p
            variants={reveal(16)}
            className="mx-auto mt-5 max-w-xl text-base text-txt-secondary md:text-lg"
          >
            Tudo o que o Calango faz sozinho hoje você junta e paga em seis lugares diferentes.
          </motion.p>
        </motion.div>

        {/* ── The equation ────────────────────────────────────────────────── */}
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          {/* LEFT — the old way, quiet & neutral */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={revealX(-24)}
            className="rounded-[28px] border border-white/[0.07] bg-white/[0.015] p-6 md:p-7"
          >
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              O jeito antigo · 6 logins
            </p>
            <ul className="space-y-2">
              {TOOLS.map((t) => (
                <li
                  key={t.name}
                  className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-3.5 py-2.5"
                >
                  <span className="text-sm font-medium text-zinc-400">{t.name}</span>
                  <span className="text-xs tabular-nums text-zinc-600">R$ {t.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-baseline justify-between border-t border-white/[0.06] pt-4">
              <span className="text-[11px] uppercase tracking-wider text-zinc-600">
                Total mensal
              </span>
              <span className="font-display text-2xl font-black text-zinc-500 line-through decoration-zinc-600/50">
                R$ 680 a 880
              </span>
            </div>
          </motion.div>

          {/* CENTER — 6 → 1 connector */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={reveal(0)}
            className="flex items-center justify-center gap-3 py-2 lg:flex-col lg:gap-2 lg:py-0"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_24px_rgba(255,170,0,0.18)]">
              <ArrowRight size={20} strokeWidth={2.5} className="rotate-90 lg:rotate-0" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
              6 → 1
            </span>
          </motion.div>

          {/* RIGHT — the Calango card, the only colour on the page here */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={revealX(24)}
            className="card-lit relative overflow-hidden p-6 md:p-7"
            style={{
              borderColor: "rgba(255,170,0,0.22)",
              boxShadow:
                "inset 0 1px 0 0 rgba(255,255,255,0.07), 0 30px 80px -40px rgba(0,0,0,0.85), 0 0 90px rgba(255,170,0,0.07)",
            }}
          >
            <div
              aria-hidden
              className="absolute right-0 top-0 h-44 w-44 rounded-full bg-accent/10 blur-[70px]"
            />
            <div className="relative z-10 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-[0_0_18px_rgba(255,170,0,0.35)]">
                <Zap size={16} className="text-black" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold text-white">Calango Studio</span>
            </div>
            <p className="relative z-10 mt-1.5 text-[11px] uppercase tracking-wider text-zinc-500">
              Tudo num login só
            </p>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-[11px] font-semibold text-accent"
                >
                  <Check size={11} strokeWidth={3} /> {p}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-7 flex items-end gap-2">
              <div>
                {isAffiliate && (
                  <span className="block text-sm leading-none text-zinc-600 line-through">
                    R$ {PRO_PRICE_DIRECT}
                  </span>
                )}
                <span className="font-display text-[2.75rem] font-black leading-none text-gradient-animated md:text-5xl">
                  R$ {proPrice}
                </span>
              </div>
              <span className="pb-1 text-sm text-zinc-500">/mês</span>
            </div>
            {isAffiliate && (
              <span className="relative z-10 mt-3 inline-flex rounded-md border border-accent/20 bg-accent/[0.08] px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-accent">
                preço de afiliado
              </span>
            )}

            <a
              href="#planos"
              className="btn-primary relative z-10 mt-6 flex w-full items-center justify-center gap-2 px-6 py-4 text-sm font-black"
            >
              Quero tudo num lugar
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>

        {/* ── Payoff line ─────────────────────────────────────────────────── */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal(16)}
          className="mx-auto mt-12 max-w-2xl text-center font-display text-lg font-bold leading-snug md:mt-16 md:text-2xl"
        >
          De{" "}
          <span className="text-zinc-500 line-through decoration-zinc-600/50">
            R$ 680 a 880 espalhados
          </span>{" "}
          para{" "}
          <span className="text-gradient-animated text-glow">R$ {proPrice} num lugar só.</span>
        </motion.p>
      </div>
    </section>
  );
}
