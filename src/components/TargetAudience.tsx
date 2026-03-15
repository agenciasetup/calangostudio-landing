"use client";

import { motion } from "framer-motion";
import { Check, Users } from "lucide-react";

const targets = [
  "Designers freelancers",
  "Social medias que atendem clientes",
  "Criadores de conteúdo que prestam serviço",
  "Quem quer parar de depender de improviso",
  "Quem quer transformar criação em operação",
  "Quem quer crescer sem viver pulando de ferramenta em ferramenta",
];

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      {/* Floating icon */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-[10%] hidden lg:block opacity-[0.05]"
      >
        <Users size={60} />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Users size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Pra quem é
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 leading-tight">
            Feito para quem quer viver de design
            <br className="hidden sm:block" />
            <span className="text-gradient-animated">com mais organização e mais resultado.</span>
          </h2>
        </motion.div>

        {/* Individual cards appearing one by one */}
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-5">
          {targets.map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, x: 8 }}
              className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(255,170,0,0.1)] transition-all duration-300">
                <Check size={16} className="text-accent" strokeWidth={3} />
              </div>
              <span className="text-base md:text-lg text-txt-secondary group-hover:text-txt-primary transition-colors duration-300 font-medium">
                {target}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
