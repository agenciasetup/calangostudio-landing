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
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Special background treatment */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[500px] md:h-[800px] bg-accent/[0.03] rounded-full blur-[120px] md:blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[10%] hidden lg:block opacity-[0.04]"
      >
        <TrendingUp size={70} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[8%] hidden lg:block opacity-[0.04]"
      >
        <Zap size={55} />
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight leading-tight">
            No fim, o que você ganha é simples:
            <br />
            <span className="text-gradient-animated text-glow">mais controle e mais chance de crescer.</span>
          </h2>
        </motion.div>

        {/* Cards with special styling */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {gains.map((gain, i) => (
            <motion.div
              key={gain.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 ${
                i === gains.length - 1 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""
              }`}
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Top gradient */}
              <div className={`h-1.5 bg-gradient-to-r ${gain.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-6 md:p-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gain.color} flex items-center justify-center shadow-xl mb-5 md:mb-6 group-hover:shadow-[0_0_30px_rgba(255,170,0,0.15)] transition-shadow duration-500`}>
                  <gain.icon size={24} className="text-white md:hidden" strokeWidth={2} />
                  <gain.icon size={28} className="text-white hidden md:block" strokeWidth={2} />
                </div>

                <h3 className="font-poppins font-black text-xl md:text-2xl text-white mb-2">
                  {gain.title}
                </h3>
                <p className="text-sm md:text-base text-txt-secondary leading-relaxed">
                  {gain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
