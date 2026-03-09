"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  XCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Layers,
  Brain,
  CreditCard,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

const before = [
  { text: "ChatGPT + Freepik + Gemini + Photoshop", icon: Layers },
  { text: "4 horas por post", icon: Clock },
  { text: "Contexto refeito a cada cliente", icon: Brain },
  { text: "Várias assinaturas fragmentadas", icon: CreditCard },
];

const after = [
  { text: "Tudo em uma única plataforma", icon: Layers, highlight: false },
  { text: "Menos de 20 minutos por post", icon: Clock, highlight: true },
  { text: "Briefing do cliente salvo, IA já entende o contexto", icon: Brain, highlight: false },
  { text: "Uma única assinatura, todas as ferramentas", icon: CreditCard, highlight: false },
];

const advantages = [
  { icon: Zap, text: "10x mais rápido" },
  { icon: Shield, text: "Sem complexidade" },
  { icon: Sparkles, text: "Qualidade PRO" },
];

export default function BeforeAfter() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);
  const springX = useSpring(glowX, { stiffness: 200, damping: 30 });
  const springY = useSpring(glowY, { stiffness: 200, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    glowX.set((e.clientX - rect.left) / rect.width);
    glowY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20 relative">
          {/* Central arrow connector */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-end flex items-center justify-center shadow-glow"
            >
              <ArrowRight size={22} className="text-black" strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* ===== BEFORE - Subdued ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card p-8 lg:p-10 !border-white/[0.06] hover:!border-red-500/20 transition-all duration-700 group relative overflow-hidden"
          >
            {/* Colored top bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500/50 to-red-900/30 rounded-t-3xl" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XCircle size={22} className="text-red-400" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-white">Sem o Calango</h3>
                <p className="text-[11px] text-txt-muted">O workflow fragmentado</p>
              </div>
            </div>

            <ul className="space-y-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-txt-secondary/80"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-red-400/60" />
                  </div>
                  <span className="text-sm line-through decoration-red-500/30">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-3 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-center">
              <p className="text-xs text-red-400/80 font-semibold">
                Resultado: 4h+ por post, sem padrão, sem escala
              </p>
            </div>
          </motion.div>

          {/* ===== AFTER - Emphatic with glowing effects ===== */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouse}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative glass-card p-8 lg:p-10 !border-accent/25 transition-all duration-700 group overflow-hidden"
            style={{
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,170,0,0.08), 0 0 120px rgba(255,170,0,0.04)",
            }}
          >
            {/* Animated pulsing border glow */}
            <div className="absolute inset-0 rounded-3xl animate-pulse-glow opacity-30 pointer-events-none"
              style={{ boxShadow: "inset 0 0 40px rgba(255,170,0,0.08), 0 0 30px rgba(255,170,0,0.06)" }}
            />

            {/* Colored top bar - gradient animated */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-accent via-accent-end to-accent rounded-t-3xl animate-gradient-shift" style={{ backgroundSize: "200% 100%" }} />

            {/* Mouse-follow glow */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-accent/6 blur-[80px] pointer-events-none"
              style={{
                left: springX,
                top: springY,
                x: "-50%",
                y: "-50%",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center shadow-[0_0_20px_rgba(255,170,0,0.15)]">
                  <CheckCircle size={22} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white text-glow">
                    Com o Calango Studio
                  </h3>
                  <p className="text-[11px] text-accent/70 font-semibold">A vantagem competitiva</p>
                </div>
              </div>

              <ul className="space-y-4">
                {after.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className={`flex items-center gap-4 ${item.highlight ? "text-white" : "text-txt-primary/90"}`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      item.highlight
                        ? "bg-accent/15 border border-accent/30 shadow-[0_0_15px_rgba(255,170,0,0.12)]"
                        : "bg-accent/5 border border-accent/15"
                    }`}>
                      <item.icon size={15} className={item.highlight ? "text-accent" : "text-accent/70"} />
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
              <div className="flex flex-wrap gap-2 mt-8">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/[0.06] border border-accent/15"
                  >
                    <adv.icon size={11} className="text-accent" />
                    <span className="text-[10px] font-bold text-accent/90 uppercase tracking-wider">{adv.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-poppins font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug">
            Menos tempo na produção. Mais tempo na estratégia.{" "}
            <span className="text-gradient-animated text-glow-strong">
              Mais dinheiro no bolso.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
