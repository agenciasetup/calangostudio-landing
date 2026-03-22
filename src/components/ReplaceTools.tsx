"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  X,
  Replace,
} from "lucide-react";

const scattered = [
  "Ferramenta de CRM",
  "ChatGPT para Conteúdo",
  "Gemini para Imagens",
  "Freepik para Imagens",
];

const calango = [
  "Prospecte, feche e gerencie clientes",
  "Organize briefings e contratos",
  "Gere conteúdos e imagens com IA",
  "Automatize fluxos com o Flow",
];

export default function ReplaceTools() {
  return (
    <section className="section-inset py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Replace size={12} />
            Substituição inteligente
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Pare de pagar{" "}
            <span className="text-gradient-animated">4 assinaturas diferentes.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hoje muita gente paga separado por IA de texto, IA de imagem, banco de referências, ferramenta de organização e sistema para clientes. No Calango Studio, você tem isso tudo em um lugar.
          </p>
        </motion.div>

        {/* Comparison side by side */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          {/* Scattered tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl md:rounded-3xl bg-black/40 border border-red-500/10 p-6 md:p-8 relative overflow-hidden"
          >
            {/* Subtle red glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[60px] pointer-events-none" />

            <p className="font-poppins font-bold text-base md:text-lg text-zinc-400 mb-5 md:mb-6 relative z-10">
              Várias assinaturas:
            </p>

            <div className="space-y-3 md:space-y-4 relative z-10">
              {scattered.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-red-500/10 border border-red-500/15 flex items-center justify-center flex-shrink-0">
                    <X size={11} className="text-red-400/70" />
                  </div>
                  <span className="text-sm md:text-base text-zinc-400 line-through decoration-red-500/30">{tool}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-red-500/10 relative z-10">
              <p className="text-xs md:text-sm text-red-400/80 font-semibold">
                +5 assinaturas separadas
              </p>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "tween", duration: 0.3, delay: 0.3 }}
            className="hidden md:flex w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-end items-center justify-center shadow-glow mx-auto animate-glow-ring"
          >
            <ArrowRight size={22} className="text-black" strokeWidth={2.5} />
          </motion.div>

          {/* Calango Studio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl md:rounded-3xl bg-black/40 border border-accent/20 p-6 md:p-8 relative overflow-hidden"
            style={{
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,170,0,0.06)",
            }}
          >
            {/* Subtle accent glow */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

            <p className="font-poppins font-bold text-base md:text-lg text-white mb-5 md:mb-6 relative z-10">
              Calango Studio:
            </p>

            <div className="space-y-3 md:space-y-4 relative z-10">
              {calango.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-accent" />
                  </div>
                  <span className="text-sm md:text-base text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-accent/15 relative z-10">
              <p className="text-xs md:text-sm text-accent font-bold">
                Uma assinatura. Tudo em um só lugar.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-center mt-10 md:mt-14 max-w-2xl mx-auto leading-snug"
        >
          Mais economia e{" "}
          <span className="text-gradient-animated text-glow">mais organização.</span>
        </motion.p>
      </div>
    </section>
  );
}
