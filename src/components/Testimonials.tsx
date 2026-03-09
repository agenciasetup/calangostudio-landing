"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Gabriel Castro",
    text: "Reuniram tudo que eu precisava e até mais em um lugar só. Meu fluxo de produção ficou 1000x mais rápido, sem contar a facilidade de usar para o resultado que entrega.",
  },
  {
    name: "Matheus",
    text: "Surpreendeu em absolutamente tudo — layout, qualidade e agilidade, tudo com base no nosso serviço. Acelerou meu trampo em MUITOS %.",
  },
  {
    name: "David",
    text: "Várias funcionalidades em um só lugar, tirando a necessidade de assinar várias IAs. Melhor investimento que fiz em 2026!",
  },
  {
    name: "Ruyana Jones",
    text: "Surpreendeu nos mockups e Upscale. Duas ferramentas boas demais!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-16"
        >
          Quem usa,{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            não volta atrás.
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-bg-secondary/80 border border-glass backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-end/30 flex items-center justify-center text-sm font-bold text-accent">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-accent text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-[#cccccc] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
