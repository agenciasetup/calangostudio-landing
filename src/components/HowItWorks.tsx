"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UserPlus,
  Send,
  MessageCircle,
  Handshake,
  FolderOpen,
  ClipboardList,
  Sparkles,
  Rocket,
  Workflow,
} from "lucide-react";

// ─── Step data ────────────────────────────────────────────────────────────────
// All icons in uniform dark glass — palette is disciplined to brand.
// The last step (Entregue rápido) is the payoff node: gets a brand-orange ring.

const steps = [
  { title: "Cadastre prospectos", icon: UserPlus,     payoff: false },
  { title: "Envie mensagens",     icon: Send,         payoff: false },
  { title: "Acompanhe respostas", icon: MessageCircle,payoff: false },
  { title: "Feche o cliente",     icon: Handshake,    payoff: false },
  { title: "Cadastre no Studio",  icon: FolderOpen,   payoff: false },
  { title: "Briefing e contrato", icon: ClipboardList,payoff: false },
  { title: "Gere conteúdo",       icon: Sparkles,     payoff: false },
  { title: "Entregue rápido",     icon: Rocket,       payoff: true  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section id="como-funciona" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full blur-[80px] md:blur-[150px] pointer-events-none"
        style={{ background: "rgba(255,170,0,0.04)" }}
      />

      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Workflow size={12} />
            Fluxo completo
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Do primeiro contato à entrega —{" "}
            <span className="text-gradient-animated">num fluxo só.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl mx-auto">
            Sem abrir 6 abas, sem perder o cliente no meio do caminho.
          </p>
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Connecting line: brand gradient, desktop only */}
          <div
            aria-hidden
            className="absolute top-[52px] md:top-[60px] left-[6.25%] right-[6.25%] h-[1px] hidden lg:block pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,170,0,0.25) 10%, rgba(255,123,71,0.35) 90%, transparent)",
            }}
          />

          {/* Step grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-8 md:gap-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: reduced ? 0 : i * 0.07, duration: 0.38 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Eyebrow number — muted, tracked, uppercase */}
                <div
                  className="text-[9px] font-bold uppercase tracking-[0.18em] mb-2.5 select-none"
                  style={{ color: "rgba(113,113,122,0.7)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon circle */}
                <div className="relative mb-3">
                  <div
                    className={[
                      // Base: dark glass circle, uniform across all steps
                      "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center",
                      "transition-all duration-300",
                      // Glass base
                      "bg-white/[0.04] border border-white/10",
                      // Payoff step: brand-orange ring at rest
                      step.payoff
                        ? "ring-1 ring-accent/40 shadow-[0_0_18px_rgba(255,170,0,0.12)]"
                        : "",
                      // Hover: all steps get a brand-orange ring + lift
                      "group-hover:ring-1 group-hover:ring-accent/60",
                      "group-hover:scale-105 group-hover:bg-white/[0.07]",
                      "group-hover:shadow-[0_0_24px_rgba(255,170,0,0.18)]",
                      // Focus-visible ring for keyboard nav
                      "group-focus-visible:ring-2 group-focus-visible:ring-accent",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Payoff icon is accent-colored, rest are white at 70% */}
                    <step.icon
                      size={20}
                      strokeWidth={1.8}
                      className={[
                        "transition-colors duration-300",
                        step.payoff
                          ? "text-accent group-hover:text-accent"
                          : "text-white/70 group-hover:text-white/90",
                      ].join(" ")}
                      aria-hidden
                    />
                  </div>

                  {/* Timeline dot — brand orange, desktop only */}
                  <div
                    aria-hidden
                    className={[
                      "absolute -bottom-[18px] md:-bottom-[22px] left-1/2 -translate-x-1/2",
                      "w-2 h-2 rounded-full hidden lg:block",
                      "transition-all duration-300",
                      step.payoff
                        ? "bg-accent shadow-[0_0_10px_rgba(255,170,0,0.55)]"
                        : "bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(255,170,0,0.4)]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </div>

                {/* Step label */}
                <p
                  className={[
                    "font-poppins font-semibold text-[11px] md:text-[12px] leading-tight",
                    "mt-2 lg:mt-5",
                    "transition-colors duration-300",
                    step.payoff
                      ? "text-accent"
                      : "text-white/60 group-hover:text-white/90",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
