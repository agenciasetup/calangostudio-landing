"use client";

import { motion } from "framer-motion";
import { RefreshCw, Search, Palette, Scissors, Clock } from "lucide-react";

const pains = [
  { icon: RefreshCw, text: "Você abre o ChatGPT. Explica o cliente do zero. De novo.", color: "text-red-400" },
  { icon: Search, text: "Passa 40 minutos no Freepik procurando a imagem quase certa.", color: "text-orange-400" },
  { icon: Palette, text: "Testa 10 prompts. O resultado não parece nada do que você imaginou.", color: "text-yellow-400" },
  { icon: Scissors, text: "Abre o Photoshop pra tentar salvar o que sobrou.", color: "text-amber-400" },
  { icon: Clock, text: "4 horas depois: um post. Só.", color: "text-red-500" },
];

export default function Problem() {
  return (
    <section className="py-16 px-4 relative">
      <div className="section-divider max-w-4xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-center mb-4 tracking-tight"
        >
          Você ainda faz assim?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-txt-secondary text-center mb-12 md:mb-16 text-lg"
        >
          O processo de todo designer antes do Calango:
        </motion.p>

        <div className="relative space-y-3 md:space-y-5 mb-16 md:mb-20">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-500/20 hover:bg-red-500/[0.02] transition-all duration-300"
            >
              <div className="relative z-10 flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-500/[0.06] transition-all duration-300">
                <pain.icon size={16} className={`${pain.color} md:hidden`} strokeWidth={2} />
                <pain.icon size={18} className={`${pain.color} hidden md:block`} strokeWidth={2} />
              </div>
              <p className="text-sm md:text-lg text-txt-secondary group-hover:text-txt-primary transition-colors duration-300">
                {pain.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-black text-2xl sm:text-3xl md:text-4xl text-center leading-snug"
        >
          4 horas. Um post.{" "}
          <span className="text-gradient-animated">
            Isso não é criatividade. É trabalho braçal disfarçado de produção.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
