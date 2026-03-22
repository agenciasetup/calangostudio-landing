"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Image,
  Camera,
  ScanSearch,
  PenTool,
  Users,
  Briefcase,
  Brain,
} from "lucide-react";

const actions = [
  { label: "Gerar conteúdo", icon: FileText, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { label: "Gerar copy", icon: PenTool, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { label: "Gerar imagem", icon: Image, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { label: "Sessão de fotos", icon: Camera, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Analisar perfil", icon: ScanSearch, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];

const engines = [
  { name: "OpenAI", letter: "O" },
  { name: "Gemini", letter: "G" },
  { name: "FLUX", letter: "F" },
  { name: "Claude", letter: "C" },
];

export default function AIContext() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="section-glow-pulse w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/15 blur-[100px] md:blur-[180px]" />

      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Brain size={12} />
            Inteligência artificial
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            As melhores IAs, com{" "}
            <span className="text-gradient-animated">contexto pronto</span>{" "}
            para trabalhar por você.
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            No Calango Studio, você não precisa assinar várias ferramentas separadas e ficar pulando de uma para outra.
            A IA trabalha com base no briefing, nicho, tom de voz e referências do seu cliente. Ela não cria no vazio.
          </p>
        </motion.div>

        {/* Generation mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl mb-10 md:mb-14"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/produzir
              </div>
            </div>

            <div className="bg-bg-primary p-4 md:p-7">
              <div className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-5">
                {/* Context sidebar */}
                <div className="rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b border-white/[0.06]">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Users size={12} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Cliente</p>
                      <p className="text-xs md:text-sm font-bold text-white">Studio Bella</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-2.5">
                    {[
                      { label: "Nicho", value: "Estética e beleza" },
                      { label: "Tom de voz", value: "Sofisticado, clean" },
                      { label: "Referências", value: "3 imagens salvas" },
                      { label: "Briefing", value: "Completo" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-2 md:p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">{item.label}</span>
                        <span className="text-[9px] md:text-[10px] text-zinc-300 font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 md:mt-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-green-500/[0.06] border border-green-500/15">
                    <Briefcase size={10} className="text-green-400" />
                    <span className="text-[8px] md:text-[9px] text-green-400 font-bold">Contexto carregado</span>
                  </div>
                </div>

                {/* Actions area */}
                <div className="space-y-3 md:space-y-4">
                  <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">O que você quer fazer?</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-2.5">
                    {actions.map((action) => (
                      <div
                        key={action.label}
                        className={`flex items-center gap-2 p-2.5 md:p-3 rounded-xl ${action.bg} border ${action.border} hover:brightness-110 transition-all duration-200 cursor-pointer`}
                      >
                        <action.icon size={14} className={action.color} />
                        <span className="text-[10px] md:text-xs font-semibold text-white">{action.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Result preview placeholder */}
                  <div className="rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/[0.06] p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={12} className="text-accent" />
                      <span className="text-[9px] md:text-[10px] text-accent font-bold uppercase tracking-wider">Geração com contexto</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                      A IA usa o briefing, nicho e tom de voz salvos do cliente para gerar conteúdo alinhado com a marca. Sem precisar reexplicar nada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Engines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.18em] font-bold mb-4 md:mb-5">IAs integradas</p>
          <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            {engines.map((engine) => (
              <motion.div
                key={engine.name}
                whileHover={{ y: -2, scale: 1.03 }}
                className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-accent/20 transition-colors duration-300"
              >
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-black text-accent">{engine.letter}</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-zinc-300">{engine.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-txt-secondary mt-4 md:mt-5">
            Textos, imagens, composições no Design Studio e automação com o Flow — tudo em um único sistema.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
