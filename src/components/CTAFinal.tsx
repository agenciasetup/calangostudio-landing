"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Instagram } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Multi-layer glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-end/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[100px]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center">
          <Sparkles size={24} className="text-accent/30" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [8, -12, 8], rotate: [3, -3, 3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-[15%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-xl bg-accent-end/5 border border-accent-end/10 flex items-center justify-center">
          <ArrowRight size={18} className="text-accent-end/30" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
        >
          Seu próximo post pode sair em{" "}
          <span className="text-gradient-animated text-glow-strong">
            20 minutos.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-txt-secondary mb-12"
        >
          Ou você continua gastando 4 horas. A escolha é sua.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <a
            href="#planos"
            className="group inline-flex items-center gap-3 btn-primary px-10 py-5 text-base tracking-widest"
          >
            Assinar agora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-txt-muted"
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
