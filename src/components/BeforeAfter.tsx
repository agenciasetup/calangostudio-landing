"use client";

import { motion } from "framer-motion";

const before = [
  "ChatGPT + Freepik + Gemini + Photoshop",
  "4 horas por post",
  "Contexto refeito a cada cliente",
  "Várias assinaturas",
];

const after = [
  "Tudo em uma plataforma",
  "Menos de 20 minutos por post",
  "Briefing do cliente salvo, IA já entende",
  "Uma única assinatura",
];

export default function BeforeAfter() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-bg-secondary border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">
                ✗
              </span>
              <h3 className="font-syne font-bold text-xl">Sem o Calango</h3>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-txt-secondary">
                  <span className="text-red-400 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-bg-secondary border border-accent/30 shadow-[0_0_30px_rgba(255,170,0,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">
                ✓
              </span>
              <h3 className="font-syne font-bold text-xl">
                Com o Calango Studio
              </h3>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#cccccc]">
                  <span className="text-accent mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-xl sm:text-2xl md:text-3xl text-center"
        >
          Menos tempo na produção. Mais tempo na estratégia.{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            Mais dinheiro.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
