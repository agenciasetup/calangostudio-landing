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
    <section id="ferramentas" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
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
              className="group relative rounded-2xl md:rounded-3xl bg-black/50 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1 md:h-1.5 bg-gradient-to-r ${pillar.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="p-5 md:p-7">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}>
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
