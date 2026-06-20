"use client";

import { motion } from "framer-motion";
import { X, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { useAffiliate } from "@/lib/useAffiliate";

// Preço do plano Pro — fonte única de verdade com a seção de Planos (Pricing.tsx).
const PRO_PRICE_DIRECT = "199,90";
const PRO_PRICE_AFFILIATE = "169,90";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Tool {
  name: string;
  purpose: string;
  price: string;
}

const TOOLS: Tool[] = [
  { name: "ChatGPT",            purpose: "copy / ideias",          price: "R$ 99,90" },
  { name: "Magnific (Freepik)", purpose: "upscale / imagem",       price: "R$ 180,00" },
  { name: "Adobe",              purpose: "edição",                 price: "R$ 235,00" },
  { name: "Canva PRO",          purpose: "design",                 price: "R$ 34,90" },
  { name: "Flux",               purpose: "gerar imagem",           price: "R$ 29,90" },
  { name: "CRM",                purpose: "prospecção / gestão",    price: "R$ 100–300" },
];

const CALANGO_FEATURES = [
  "Gere copy e ideias com IA",
  "Upscale e edição de imagem",
  "Adobe-like — direto na plataforma",
  "Design e layouts prontos",
  "Geração de imagem com IA",
  "CRM + missões de prospecção",
];

// ─── Stagger config ───────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Comparison() {
  // Mesma detecção de afiliado da seção de Planos (?ref= → localStorage), pra os
  // dois preços nunca divergirem.
  const isAffiliate = !!useAffiliate();
  const proPrice = isAffiliate ? PRO_PRICE_AFFILIATE : PRO_PRICE_DIRECT;
  const proPriceOriginal = PRO_PRICE_DIRECT;

  return (
    <section className="section-inset py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Pare de pagar{" "}
            <span className="text-gradient-animated">6 assinaturas.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pra fazer o que o Calango faz sozinho, hoje você junta — e paga — isto tudo:
          </p>
        </motion.div>

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">

          {/* Left — the messy expensive stack */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl md:rounded-3xl bg-black/40 border border-red-500/15 p-6 md:p-8 relative overflow-hidden"
          >
            {/* Red glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />

            <p className="font-display font-bold text-base md:text-lg text-zinc-400 mb-1 relative z-10">
              O que você paga hoje:
            </p>
            <p className="text-xs text-zinc-600 font-semibold uppercase tracking-wider mb-6 relative z-10">
              Espalhado em 6 logins diferentes
            </p>

            {/* Tool rows */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3 relative z-10"
            >
              {TOOLS.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-md bg-red-500/10 border border-red-500/15 flex items-center justify-center flex-shrink-0">
                    <X size={11} className="text-red-400/70" />
                  </div>
                  <div className="flex-1 flex items-baseline justify-between gap-2 min-w-0">
                    <span className="text-sm md:text-base text-zinc-400 line-through decoration-red-500/30 truncate">
                      {tool.name}
                    </span>
                    <span className="text-xs text-zinc-600 flex-shrink-0">{tool.purpose}</span>
                  </div>
                  <span className="text-sm font-bold text-red-400/80 flex-shrink-0 tabular-nums">
                    {tool.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Total */}
            <div className="mt-6 pt-5 border-t border-red-500/15 relative z-10">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-600 font-bold uppercase tracking-wider mb-1">
                    Total mensal
                  </p>
                  <p className="font-display font-black text-2xl md:text-3xl text-red-400 leading-none line-through decoration-red-500/60">
                    R$ 680 – R$ 880
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/15 text-xs text-red-400 font-bold uppercase tracking-wider flex-shrink-0">
                  /mês
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-600 font-medium">
                ≈ R$ 579,70 fixo + CRM R$ 100–300
              </p>
            </div>
          </motion.div>

          {/* Right — the single Calango card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl md:rounded-3xl bg-black/40 border border-accent/25 p-6 md:p-8 relative overflow-hidden"
            style={{
              boxShadow:
                "0 20px 80px rgba(0,0,0,0.45), 0 0 80px rgba(255,170,0,0.07)",
            }}
          >
            {/* Accent glow */}
            <div className="absolute top-0 left-0 w-56 h-56 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            {/* Thin top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="flex items-center gap-2 mb-1 relative z-10">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-end flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(255,170,0,0.3)]">
                <Zap size={14} className="text-black" strokeWidth={2.5} />
              </div>
              <p className="font-display font-bold text-base md:text-lg text-white">
                Calango Studio
              </p>
            </div>
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6 relative z-10">
              Tudo em um lugar. Um login.
            </p>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3 relative z-10"
            >
              {CALANGO_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariantsRight}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-accent" />
                  </div>
                  <span className="text-sm md:text-base text-white font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Price payoff */}
            <div className="mt-6 pt-5 border-t border-accent/15 relative z-10">
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">
                    Tudo isso por
                  </p>
                  {isAffiliate ? (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm text-zinc-500 line-through leading-none">
                        R$ {proPriceOriginal}
                      </span>
                      <span className="font-display font-black text-2xl md:text-3xl text-gradient-animated leading-none">
                        R$ {proPrice}
                      </span>
                      <span className="mt-1 self-start px-2 py-0.5 rounded-md bg-accent/15 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-[0.12em]">
                        preço de afiliado
                      </span>
                    </div>
                  ) : (
                    <p className="font-display font-black text-2xl md:text-3xl text-gradient-animated leading-none">
                      R$ {proPrice}
                    </p>
                  )}
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-xs text-accent font-black uppercase tracking-wider flex-shrink-0">
                  /mês
                </span>
              </div>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-5">
                Tudo isso — e ainda a prospecção com missões pra fechar cliente.
              </p>

              <a
                href="#planos"
                className="inline-flex items-center gap-2 w-full justify-center py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-sm tracking-[0.14em] uppercase shadow-[0_0_24px_rgba(255,170,0,0.22)] hover:shadow-[0_0_40px_rgba(255,170,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Quero tudo num lugar
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom payoff line ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display font-bold text-lg sm:text-xl md:text-2xl text-center mt-10 md:mt-14 max-w-2xl mx-auto leading-snug"
        >
          De{" "}
          <span className="text-red-400 line-through decoration-red-400/60">
            R$ 680–880 espalhados
          </span>{" "}
          para{" "}
          {isAffiliate ? (
            <>
              <span className="text-white/40 line-through decoration-white/20">
                R$ {proPriceOriginal}
              </span>{" "}
              <span className="text-gradient-animated text-glow">
                R$ {proPrice} num só lugar.
              </span>
            </>
          ) : (
            <span className="text-gradient-animated text-glow">
              R$ {proPrice} num só lugar.
            </span>
          )}
        </motion.p>

      </div>
    </section>
  );
}
