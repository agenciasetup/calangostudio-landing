"use client";

import { motion } from "framer-motion";

const pains = [
  { icon: "🔁", text: "Abre o ChatGPT e explica o cliente do zero de novo" },
  {
    icon: "🔍",
    text: "Passa 40 minutos no Freepik procurando a imagem certa",
  },
  {
    icon: "🎨",
    text: "Testa 10 prompts até sair algo parecido com o que queria",
  },
  { icon: "✂️", text: "Abre o Photoshop pra ajustar tudo manualmente" },
  { icon: "😮‍💨", text: "4 horas depois: um carrossel pronto" },
];

export default function Problem() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-16"
        >
          Você ainda faz assim?
        </motion.h2>

        <div className="space-y-5 mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-glass"
            >
              <span className="text-2xl flex-shrink-0">{pain.icon}</span>
              <p className="text-lg text-[#cccccc]">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-center leading-snug"
        >
          Um único post. Quatro horas.{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            Isso não é criatividade — é operação braçal.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
