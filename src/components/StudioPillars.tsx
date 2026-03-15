"use client";

import { motion } from "framer-motion";
import {
  Target,
  Handshake,
  ClipboardList,
  Sparkles,
  ScanSearch,
  LayoutDashboard,
  ChevronRight,
  Layers,
} from "lucide-react";

const pillars = [
  {
    title: "Captação",
    description: "Cadastre prospectos, siga missões diárias e aborde empresas com método.",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    actions: ["Missões diárias", "Base de prospectos", "Abordagem com método"],
  },
  {
    title: "Fechamento",
    description: "Use mensagens prontas, acompanhe respostas e avance até o fechamento.",
    icon: Handshake,
    color: "from-amber-400 to-orange-500",
    actions: ["Mensagens prontas", "Funil de vendas", "Acompanhamento"],
  },
  {
    title: "Onboarding",
    description: "Organize briefing, dados do cliente, serviços e contrato.",
    icon: ClipboardList,
    color: "from-purple-400 to-violet-500",
    actions: ["Briefing completo", "Dados do cliente", "Contrato"],
  },
  {
    title: "Produção",
    description: "Crie posts, copies, imagens e sessões de foto com base no cliente.",
    icon: Sparkles,
    color: "from-rose-400 to-pink-500",
    actions: ["Posts e copies", "Imagens com IA", "Sessão de fotos"],
  },
  {
    title: "Análise",
    description: "Use o consultor de perfil para entender melhor o que criar.",
    icon: ScanSearch,
    color: "from-emerald-400 to-green-500",
    actions: ["Análise de perfil", "Diagnóstico", "Relatório"],
  },
  {
    title: "Gestão",
    description: "Acompanhe clientes, demandas, histórico e rotina em um só sistema.",
    icon: LayoutDashboard,
    color: "from-sky-400 to-blue-500",
    actions: ["Visão geral", "Histórico", "Rotina organizada"],
  },
];

export default function StudioPillars() {
  return (
    <section id="ferramentas" className="section-elevated py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Pulsing glow */}
      <div className="section-glow-pulse w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-purple-500/15 blur-[100px] md:blur-[180px]" />
      <div className="section-glow-pulse-alt w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 blur-[80px] md:blur-[150px]" style={{ top: "60%", left: "30%" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Layers size={12} />
            6 pilares
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Tudo o que você precisa para operar
            <br className="hidden sm:block" />
            <span className="text-gradient-animated">como designer profissional.</span>
          </h2>
        </motion.div>

        {/* 3x2 grid with distinct card style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl md:rounded-3xl bg-black/50 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 overflow-hidden hover:shadow-card-hover"
            >
              {/* Top gradient bar */}
              <div className={`h-1 md:h-1.5 bg-gradient-to-r ${pillar.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 md:p-7">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <pillar.icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-poppins font-black text-lg md:text-xl text-white">{pillar.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-txt-secondary leading-relaxed mb-4 md:mb-5">
                  {pillar.description}
                </p>

                {/* Actions list */}
                <div className="space-y-2">
                  {pillar.actions.map((action) => (
                    <div key={action} className="flex items-center gap-2 group/action">
                      <ChevronRight size={12} className="text-zinc-600 group-hover/action:text-accent transition-colors" />
                      <span className="text-xs text-zinc-400 group-hover/action:text-zinc-300 transition-colors">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
