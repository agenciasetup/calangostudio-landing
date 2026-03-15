"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-accent/8 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-6 tracking-tight"
        >
          Seu trabalho não precisa continuar{" "}
          <span className="text-gradient-animated text-glow-strong">
            espalhado.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-base md:text-lg text-txt-secondary mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Prospecte, feche, organize e produza dentro de um sistema feito para designers que querem ganhar mais e trabalhar melhor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <a
            href="#planos"
            className="group inline-flex items-center gap-3 btn-primary px-8 md:px-10 py-4 md:py-5 text-sm md:text-base tracking-widest"
          >
            Entrar no Calango Studio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-txt-muted"
        >
          <Instagram size={16} className="text-accent/60" />
          <span>Dúvidas? Fala com a gente</span>
          <a
            href="https://instagram.com/calango.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors font-semibold"
          >
            @calango.studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
