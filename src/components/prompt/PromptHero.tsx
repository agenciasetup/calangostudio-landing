"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PromptExtractor from "./PromptExtractor";

export default function PromptHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 pt-28 pb-24 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-to-br from-accent/10 via-accent-end/6 to-transparent blur-[80px] md:blur-[140px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight"
        >
          Extraia o{" "}
          <span className="text-gradient-animated">prompt</span>{" "}
          de qualquer{" "}
          <span className="text-gradient-animated">imagem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Adicione a imagem de referência e clique em extrair. Em segundos você
          terá o prompt em JSON que será útil para usar em qualquer gerador de
          imagem.
        </motion.p>

        {/* Prompt Extractor Tool */}
        <PromptExtractor />
      </div>
    </section>
  );
}
