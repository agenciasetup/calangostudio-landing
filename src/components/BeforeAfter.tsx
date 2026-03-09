"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight, Clock, Layers, Brain, CreditCard } from "lucide-react";

const before = [
  { text: "ChatGPT + Freepik + Gemini + Photoshop", icon: Layers },
  { text: "4 horas por post", icon: Clock },
  { text: "Contexto refeito a cada cliente", icon: Brain },
  { text: "Várias assinaturas", icon: CreditCard },
];

const after = [
  { text: "Tudo em uma plataforma", icon: Layers },
  { text: "Menos de 20 minutos por post", icon: Clock },
  { text: "Briefing do cliente salvo, IA já entende", icon: Brain },
  { text: "Uma única assinatura", icon: CreditCard },
];

export default function BeforeAfter() {
  return (
    <section className="py-28 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-16 relative">
          {/* Arrow between cards */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-end flex items-center justify-center shadow-glow"
            >
              <ArrowRight size={20} className="text-black" strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card p-8 !border-red-500/15 hover:!border-red-500/25 transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XCircle size={20} className="text-red-400" strokeWidth={2} />
              </div>
              <h3 className="font-poppins font-bold text-xl">Sem o Calango</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4 text-txt-secondary group-hover:text-txt-primary/80 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-red-400/70" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card p-8 !border-accent/20 hover:!border-accent/35 !shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_40px_rgba(255,170,0,0.05)] transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <CheckCircle size={20} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="font-poppins font-bold text-xl">
                Com o Calango Studio
              </h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4 text-txt-secondary group-hover:text-txt-primary/90 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-accent/80" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-black text-xl sm:text-2xl md:text-3xl text-center tracking-tight"
        >
          Menos tempo na produção. Mais tempo na estratégia.{" "}
          <span className="text-gradient-animated text-glow">
            Mais dinheiro.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
