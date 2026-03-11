"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Target } from "lucide-react";

const milestones = [
  {
    icon: Lightbulb,
    title: "O começo",
    text: "Sem contatos, sem dinheiro. Tentando entender como transformar criatividade em renda.",
  },
  {
    icon: TrendingUp,
    title: "A prática",
    text: "Clientes, branding, posts, identidade visual, landing pages, campanhas e posicionamento digital.",
  },
  {
    icon: Target,
    title: "A descoberta",
    text: "Design não é apenas arte. Design é uma profissão. E quando tratado como profissão, gera liberdade financeira.",
  },
];

export default function FilipeJornada() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Como{" "}
            <span className="text-gradient-animated">começou</span>
          </h2>
          <p className="text-txt-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Comecei no design como a maioria das pessoas começa: sem contatos,
            sem dinheiro e tentando entender como transformar criatividade em
            renda.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {milestones.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-white mb-3">
                {title}
              </h3>
              <p className="text-txt-secondary text-sm leading-relaxed">
                {text}
              </p>
              {/* Step number */}
              <span className="absolute top-6 right-6 font-poppins font-black text-4xl text-white/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-txt-secondary leading-relaxed mb-4">
            Com o tempo fui aprendendo na prática como o mercado realmente
            funciona: clientes, branding, criação de posts, identidade visual,
            landing pages, campanhas e posicionamento digital.
          </p>
          <p className="text-txt-secondary leading-relaxed">
            Foi nesse processo que percebi algo importante.{" "}
            <strong className="text-white">Design não é apenas arte.</strong>{" "}
            <strong className="text-white">Design é uma profissão.</strong> E
            quando tratado como profissão, pode gerar{" "}
            <strong className="text-white">
              liberdade financeira, carreira e impacto
            </strong>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
