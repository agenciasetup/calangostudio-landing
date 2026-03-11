"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, ExternalLink } from "lucide-react";

export default function FilipeCrenca() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 rounded-full blur-[120px] md:blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
            O que eu acredito sobre{" "}
            <span className="text-gradient-animated">design</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4 mb-10"
        >
          <p className="text-base md:text-lg text-txt-secondary leading-relaxed">
            Acredito que o design é uma das{" "}
            <strong className="text-white">
              profissões mais poderosas da internet
            </strong>
            . Com as ferramentas certas, qualquer pessoa pode transformar
            criatividade em carreira.
          </p>
          <p className="text-txt-secondary leading-relaxed">
            Mas também acredito que o mercado mudou. Hoje, designers que aprendem
            a usar{" "}
            <strong className="text-white">
              inteligência artificial, automação e ferramentas digitais
            </strong>{" "}
            conseguem produzir muito mais e crescer muito mais rápido.
          </p>
          <p className="text-txt-secondary leading-relaxed">
            É exatamente isso que procuro ensinar e construir através da{" "}
            <strong className="text-white">Agência Setup</strong> e do{" "}
            <strong className="text-white">Calango Studio</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.calangostudio.com.br"
            className="group inline-flex items-center gap-3 btn-primary px-8 py-4 text-sm tracking-widest"
          >
            Acessar o Calango Studio
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="https://instagram.com/lipeslourenco"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
          >
            <Instagram size={16} className="text-accent" />
            <span className="text-txt-secondary group-hover:text-white transition-colors">
              Me siga no Instagram
            </span>
            <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
