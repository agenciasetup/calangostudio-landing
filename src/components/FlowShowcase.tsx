"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Users,
  FileText,
  Image,
  Send,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* ─── Flow nodes ─── */

const nodes = [
  {
    id: "client",
    label: "Cliente",
    desc: "Dados e briefing",
    icon: Users,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.25)",
    col: "md:col-start-1",
    row: "md:row-start-1",
  },
  {
    id: "copy",
    label: "CopyMaker",
    desc: "Copy com tom de voz",
    icon: FileText,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.25)",
    col: "md:col-start-2",
    row: "md:row-start-1",
  },
  {
    id: "image",
    label: "Imagem Criativa",
    desc: "Visual cinematográfico",
    icon: Image,
    color: "from-rose-400 to-pink-500",
    glow: "rgba(251,113,133,0.25)",
    col: "md:col-start-3",
    row: "md:row-start-1",
  },
  {
    id: "review",
    label: "Revisão IA",
    desc: "Ajustes automáticos",
    icon: Sparkles,
    color: "from-accent to-accent-end",
    glow: "rgba(255,170,0,0.25)",
    col: "md:col-start-4",
    row: "md:row-start-1",
  },
  {
    id: "schedule",
    label: "Agendamento",
    desc: "Publicação programada",
    icon: Calendar,
    color: "from-emerald-400 to-green-500",
    glow: "rgba(52,211,153,0.25)",
    col: "md:col-start-5",
    row: "md:row-start-1",
  },
  {
    id: "deliver",
    label: "Entrega",
    desc: "Conteúdo pronto",
    icon: Send,
    color: "from-violet-400 to-purple-500",
    glow: "rgba(167,139,250,0.25)",
    col: "md:col-start-6",
    row: "md:row-start-1",
  },
];

/* ─── Connector arrow (SVG between nodes) ─── */

function Connector({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
      className="hidden md:flex items-center justify-center"
    >
      <div className="relative w-full flex items-center">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-white/20 to-white/10 rounded-full" />
        <ArrowRight size={14} className="text-white/25 -ml-1 flex-shrink-0" />
      </div>
    </motion.div>
  );
}

export default function FlowShowcase() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[900px] h-[400px] md:h-[600px] bg-violet-500/[0.06] rounded-full blur-[100px] md:blur-[180px] pointer-events-none" />

      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Workflow size={12} />
            Novo
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Monte seu fluxo.{" "}
            <span className="text-gradient-animated">A IA executa.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            O Flow conecta ferramentas, dados de clientes e entregas em um único fluxo visual.
            Arraste, conecte e automatize — do briefing à publicação, sem repetir tarefa.
          </p>
        </motion.div>

        {/* ─── Visual node-based workflow ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[2px] rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-violet-500/15 via-transparent to-accent/10 opacity-60 blur-[1px]" />

          <div
            className="relative rounded-[22px] md:rounded-[30px] border border-white/[0.10] overflow-hidden"
            style={{
              background: "rgba(8, 8, 12, 0.8)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 30px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Top accent bar */}
            <div className="h-1 md:h-1.5 bg-gradient-to-r from-violet-500 via-accent to-emerald-400 opacity-70" />

            {/* Browser header */}
            <div className="flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4 md:mx-8 h-7 md:h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-violet-400/60" />
                calango.studio/flow
              </div>
            </div>

            {/* Canvas area */}
            <div className="p-4 md:p-8">
              {/* Section label */}
              <div className="flex items-center gap-2 mb-5 md:mb-7">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Workflow size={14} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Workflow ativo</p>
                  <p className="text-xs md:text-sm font-bold text-white">Produção semanal — Studio Bella</p>
                </div>
              </div>

              {/* Grid background pattern */}
              <div
                className="relative rounded-xl md:rounded-2xl border border-white/[0.06] overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              >
                <div className="p-4 md:p-6">
                  {/* Nodes row — desktop: inline with connectors, mobile: stacked */}
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0">
                    {nodes.map((node, i) => (
                      <div key={node.id} className="contents">
                        {/* Node card */}
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.35 }}
                          className="group relative flex-shrink-0"
                        >
                          {/* Node glow on hover */}
                          <div
                            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
                            style={{ background: node.glow }}
                          />

                          <div className="relative flex items-center gap-3 md:flex-col md:items-center md:text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-300 md:w-[120px]">
                            {/* Icon */}
                            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              <node.icon size={18} className="text-white" strokeWidth={2} />
                            </div>

                            {/* Text */}
                            <div className="md:mt-1">
                              <p className="text-[11px] md:text-[11px] font-bold text-white leading-tight">{node.label}</p>
                              <p className="text-[9px] md:text-[9px] text-zinc-500 mt-0.5">{node.desc}</p>
                            </div>

                            {/* Connection port dots */}
                            <div className="hidden md:block absolute -right-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white/10 border-2 border-white/20" />
                            <div className="hidden md:block absolute -left-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white/10 border-2 border-white/20" />
                          </div>

                          {/* Mobile arrow */}
                          {i < nodes.length - 1 && (
                            <div className="flex md:hidden justify-center py-1">
                              <ArrowRight size={14} className="text-white/20 rotate-90" />
                            </div>
                          )}
                        </motion.div>

                        {/* Desktop connector */}
                        {i < nodes.length - 1 && (
                          <div className="hidden md:flex items-center flex-1 min-w-[20px] px-1">
                            <Connector index={i} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-3 md:px-4 py-3 md:py-3.5 rounded-xl bg-violet-500/[0.04] border border-violet-500/10">
                <div className="flex items-center gap-2">
                  <Sparkles size={12} className="text-violet-400" />
                  <span className="text-[9px] md:text-[11px] text-zinc-400 font-semibold">
                    Conecte qualquer ferramenta do estúdio em um fluxo automatizado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] md:text-[10px] text-zinc-500">
                    <span className="text-emerald-400 font-bold">6 nós</span> · 1 workflow
                  </span>
                  <span className="text-[9px] md:text-[11px] text-violet-400 font-bold uppercase tracking-wider">
                    Flow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2 w-3/4 h-16 md:h-24 bg-violet-500/8 blur-[40px] md:blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
