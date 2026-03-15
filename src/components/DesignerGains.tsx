"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Zap,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react";

const gains = [
  {
    title: "Mais clareza",
    description: "Você sabe o que fazer e em que etapa cada cliente está.",
    icon: Eye,
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Mais velocidade",
    description: "O briefing do cliente já alimenta sua produção.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Mais lucro",
    description: "Você cria capacidade para atender melhor e fechar mais.",
    icon: TrendingUp,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Mais tempo livre",
    description: "Menos bagunça, menos retrabalho, menos troca de ferramenta.",
    icon: Clock,
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Mais presença profissional",
    description: "Seu trabalho deixa de parecer improvisado.",
    icon: Shield,
    color: "from-rose-400 to-pink-500",
  },
];

export default function DesignerGains() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            No fim, o que você ganha é simples:{" "}
            <span className="text-gradient-animated">mais controle, mais tempo e mais chance de crescer.</span>
          </h2>
        </motion.div>

        {/* Gains grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {gains.map((gain, i) => (
            <motion.div
              key={gain.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.05, 0.2), duration: 0.4 }}
              className={`group rounded-2xl bg-black/40 border border-white/[0.08] p-5 md:p-6 hover:border-white/[0.15] transition-all duration-300 relative overflow-hidden ${
                i === gains.length - 1 && gains.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${gain.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${gain.color} bg-opacity-20 flex items-center justify-center border border-white/15 shadow-xl mb-3 md:mb-4`}>
                <gain.icon size={18} className="text-white md:hidden" strokeWidth={2} />
                <gain.icon size={22} className="text-white hidden md:block" strokeWidth={2} />
              </div>

              <h3 className="font-poppins font-bold text-base md:text-lg text-white mb-1.5">
                {gain.title}
              </h3>
              <p className="text-sm text-txt-secondary leading-relaxed">
                {gain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
