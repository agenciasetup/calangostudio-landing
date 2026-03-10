"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Layers,
  Brain,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

const before = [
  { text: "Quatro ferramentas abertas. Quatro senhas. Quatro assinaturas.", icon: Layers },
  { text: "Toda semana você reconstrói o contexto do cliente do zero.", icon: Clock },
  { text: "O visual muda de entrega pra entrega. O cliente percebe.", icon: Brain },
];

const after = [
  { text: "Uma plataforma. O briefing do cliente já está esperando por você.", icon: Layers, highlight: false },
  { text: "Imagem, copy e entregável em menos de 20 minutos.", icon: Clock, highlight: true },
  { text: "O mesmo padrão visual, para qualquer cliente, toda vez.", icon: Brain, highlight: false },
];

const advantages = [
  { icon: Zap, text: "10x mais rápido" },
  { icon: Shield, text: "Sem complexidade" },
  { icon: Sparkles, text: "Qualidade PRO" },
];

export default function BeforeAfter() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/4 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-20 relative">
          {/* Central arrow connector */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-end flex items-center justify-center shadow-glow"
            >
              <ArrowRight size={22} className="text-black" strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* ===== BEFORE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 md:p-10 !border-white/[0.06] hover:!border-red-500/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500/50 to-red-900/30 rounded-t-3xl" />

            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XCircle size={20} className="text-red-400" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg md:text-xl text-white">Sem o Calango</h3>
                <p className="text-[11px] text-txt-muted">{" "}</p>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="flex items-center gap-3 md:gap-4 text-txt-secondary/80"
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-red-400/60" />
                  </div>
                  <span className="text-sm line-through decoration-red-500/30">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 md:mt-8 p-3 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-center">
              <p className="text-xs text-red-400/80 font-semibold">
                {" "}
              </p>
            </div>
          </motion.div>

          {/* ===== AFTER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="relative glass-card p-6 md:p-10 !border-accent/25 transition-all duration-500 group overflow-hidden"
            style={{
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,170,0,0.08)",
            }}
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-accent via-accent-end to-accent rounded-t-3xl animate-gradient-shift" style={{ backgroundSize: "200% 100%" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center shadow-[0_0_20px_rgba(255,170,0,0.15)]">
                  <CheckCircle size={20} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg md:text-xl text-white text-glow">
                    Com o Calango Studio
                  </h3>
                  <p className="text-[11px] text-accent/70 font-semibold">{" "}</p>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4">
                {after.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    className={`flex items-center gap-3 md:gap-4 ${item.highlight ? "text-white" : "text-txt-primary/90"}`}
                  >
                    <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight
                        ? "bg-accent/15 border border-accent/30 shadow-[0_0_15px_rgba(255,170,0,0.12)]"
                        : "bg-accent/5 border border-accent/15"
                    }`}>
                      <item.icon size={14} className={item.highlight ? "text-accent" : "text-accent/70"} />
                    </div>
                    {item.highlight ? (
                      <span className="text-sm font-bold text-gradient-animated">
                        {item.text}
                      </span>
                    ) : (
                      <span className="text-sm font-medium">{item.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Advantage badges */}
              <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                {advantages.map((adv, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/[0.06] border border-accent/15"
                  >
                    <adv.icon size={11} className="text-accent" />
                    <span className="text-[10px] font-bold text-accent/90 uppercase tracking-wider">{adv.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="font-poppins font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug">
            Menos tempo na produção. Mais tempo na estratégia.{" "}
            <span className="text-gradient-animated text-glow-strong">
              Mais dinheiro no bolso.
            </span>
          </p>
          {/* ^ This is the "Com o Calango" summary line */}
        </motion.div>
      </div>
    </section>
  );
}
