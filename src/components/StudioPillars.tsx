"use client";

import { motion } from "framer-motion";
import {
  Target,
  Handshake,
  ClipboardList,
  Sparkles,
  ScanSearch,
  LayoutDashboard,
} from "lucide-react";

const pillars = [
  {
    title: "Captação",
    description: "Cadastre prospectos, siga missões diárias e aborde empresas com método.",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    status: "32 prospectos ativos",
  },
  {
    title: "Fechamento",
    description: "Use mensagens prontas, acompanhe respostas e avance até o fechamento.",
    icon: Handshake,
    color: "from-amber-400 to-orange-500",
    status: "5 em negociação",
  },
  {
    title: "Onboarding",
    description: "Organize briefing, dados do cliente, serviços e contrato.",
    icon: ClipboardList,
    color: "from-purple-400 to-violet-500",
    status: "3 em andamento",
  },
  {
    title: "Produção",
    description: "Crie posts, copies, imagens e sessões de foto com base no cliente.",
    icon: Sparkles,
    color: "from-rose-400 to-pink-500",
    status: "8 entregas pendentes",
  },
  {
    title: "Análise",
    description: "Use o consultor de perfil para entender melhor o que criar.",
    icon: ScanSearch,
    color: "from-emerald-400 to-green-500",
    status: "2 análises recentes",
  },
  {
    title: "Gestão",
    description: "Acompanhe clientes, demandas, histórico e rotina em um só sistema.",
    icon: LayoutDashboard,
    color: "from-sky-400 to-blue-500",
    status: "Visão geral",
  },
];

export default function StudioPillars() {
  return (
    <section id="ferramentas" className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

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
            Tudo o que você precisa para operar{" "}
            <span className="text-gradient-animated">como designer profissional.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Seis pilares que cobrem da captação à gestão. Sem bagunça, sem gambiarra.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="glass-card !rounded-[24px] md:!rounded-[32px] p-3 sm:p-5 lg:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(i * 0.05, 0.2), duration: 0.4 }}
                className="relative rounded-[16px] md:rounded-[24px] bg-black/40 border border-white/[0.08] overflow-hidden hover:border-white/[0.18] transition-all duration-300 group p-4 md:p-6"
              >
                {/* Colored top bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] md:h-1 bg-gradient-to-r ${pillar.color} opacity-55 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${pillar.color} bg-opacity-20 flex items-center justify-center border border-white/15 shadow-xl flex-shrink-0`}>
                    <pillar.icon size={18} className="text-white md:hidden" strokeWidth={2} />
                    <pillar.icon size={22} className="text-white hidden md:block" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-poppins font-bold text-base md:text-lg text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-txt-secondary leading-relaxed mb-2 md:mb-3">
                      {pillar.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
                      <span className="text-[9px] md:text-[10px] text-zinc-400 font-semibold">{pillar.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
