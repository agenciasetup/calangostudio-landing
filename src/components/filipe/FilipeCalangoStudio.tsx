"use client";

import { motion } from "framer-motion";
import {
  Image,
  FileText,
  Sparkles,
  Zap,
  Wand2,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: Image, label: "Gerar imagens com inteligência artificial" },
  { icon: FileText, label: "Criar conteúdo para redes sociais" },
  { icon: Sparkles, label: "Gerar ideias de criativos" },
  { icon: Zap, label: "Produzir artes mais rápido" },
  { icon: Wand2, label: "Automatizar processos criativos" },
];

export default function FilipeCalangoStudio() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Calango Studio
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            O nascimento do{" "}
            <span className="text-gradient-animated">Calango Studio</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-txt-secondary leading-relaxed mb-4"
          >
            Depois de anos ensinando design, percebi um problema que praticamente
            todo designer enfrenta:{" "}
            <strong className="text-white">tempo perdido.</strong>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-txt-muted leading-relaxed mb-6 text-sm"
          >
            Tempo procurando imagens. Tempo tentando criar prompts. Tempo
            abrindo dezenas de ferramentas diferentes. Tempo tentando ter ideias
            de conteúdo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-txt-secondary leading-relaxed"
          >
            Foi para resolver esse problema que nasceu o{" "}
            <strong className="text-white">Calango Studio</strong> — uma
            plataforma criada para designers, social media e criadores de
            conteúdo, que reúne ferramentas de inteligência artificial para
            acelerar a produção criativa.
          </motion.p>
        </div>

        {/* Platform mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-txt-muted font-mono">
              calangostudio.com.br
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
              >
                <Icon
                  size={16}
                  className="text-accent flex-shrink-0"
                />
                <span className="text-sm text-txt-secondary">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.05] text-center">
            <p className="text-sm text-txt-muted">
              Fazer designers produzirem{" "}
              <strong className="text-white">mais</strong>,{" "}
              <strong className="text-white">melhor</strong> e em{" "}
              <strong className="text-white">menos tempo</strong>.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-center"
        >
          <a
            href="https://www.calangostudio.com.br"
            className="group inline-flex items-center gap-3 btn-primary px-8 py-4 text-sm tracking-widest"
          >
            Conhecer o Calango Studio
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
