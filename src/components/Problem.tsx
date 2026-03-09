"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, Search, Palette, Scissors, Clock } from "lucide-react";

const pains = [
  { icon: RefreshCw, text: "Abre o ChatGPT e explica o cliente do zero de novo", color: "text-red-400" },
  { icon: Search, text: "Passa 40 minutos no Freepik procurando a imagem certa", color: "text-orange-400" },
  { icon: Palette, text: "Testa 10 prompts até sair algo parecido com o que queria", color: "text-yellow-400" },
  { icon: Scissors, text: "Abre o Photoshop pra ajustar tudo manualmente", color: "text-amber-400" },
  { icon: Clock, text: "4 horas depois: um carrossel pronto", color: "text-red-500" },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-28 px-4 relative">
      <div className="section-divider max-w-4xl mx-auto mb-28" />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-center mb-4 tracking-tight"
        >
          Você ainda faz assim?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-txt-secondary text-center mb-16 text-lg"
        >
          O processo de todo designer antes do Calango:
        </motion.p>

        <div className="relative space-y-5 mb-20">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/[0.04] hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent/60 to-red-500/60 rounded-full"
            />
          </div>

          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-500/20 hover:bg-red-500/[0.02] transition-all duration-500 md:ml-4"
            >
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-500/[0.06] transition-all duration-300">
                <pain.icon size={18} className={`${pain.color} transition-all duration-300`} strokeWidth={2} />
              </div>
              <p className="text-base md:text-lg text-txt-secondary group-hover:text-txt-primary transition-colors duration-300">
                {pain.text}
              </p>
              <span className="ml-auto text-xs font-bold text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                {i + 1}/5
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-black text-2xl sm:text-3xl md:text-4xl text-center leading-snug"
        >
          Um único post. Quatro horas.{" "}
          <span className="text-gradient-animated">
            Isso não é criatividade — é operação braçal.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
