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
    <section className="py-16 md:py-20 px-4 relative">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Users size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Pra quem é
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Feito para quem quer viver de design{" "}
            <span className="text-gradient-animated">com mais organização e mais resultado.</span>
          </h2>
        </motion.div>

        <div className="glass-card !rounded-2xl md:!rounded-3xl p-5 md:p-8">
          <div className="space-y-3 md:space-y-4">
            {targets.map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                  <Check size={13} className="text-accent" strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base text-txt-secondary group-hover:text-txt-primary transition-colors duration-300">
                  {target}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
