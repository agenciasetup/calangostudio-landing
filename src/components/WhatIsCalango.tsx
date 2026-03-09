"use client";

import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  ImageIcon,
  FileText,
  ChevronRight,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function WhatIsCalango() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-accent/4 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-5 md:mb-6 tracking-tight">
            O Calango Studio{" "}
            <span className="text-gradient-animated">
              não é um gerador de imagem.
            </span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            É uma plataforma de produção criativa com IA — pensada do zero para
            quem atende clientes.
          </p>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl mb-12 md:mb-16"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:!shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/clientes
              </div>
            </div>

            {/* Content area */}
            <div className="bg-bg-primary p-4 md:p-7">
              {/* Flow: 3 steps showing the platform workflow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Step 1: Client profile */}
                <div className="relative rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-4 md:p-5 overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-[2px] md:h-[3px] rounded-t-2xl bg-gradient-to-r from-sky-400 to-cyan-700 opacity-50" />
                  <div className="flex items-center gap-2.5 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                      <Users size={14} className="text-sky-400 md:hidden" />
                      <Users size={16} className="text-sky-400 hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Passo 1</p>
                      <p className="font-poppins font-bold text-xs md:text-sm text-white">Cadastre o cliente</p>
                    </div>
                  </div>
                  {/* Mini client card */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 p-2.5 md:p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent-end/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] md:text-[10px] font-black text-accent">NC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] md:text-xs font-bold text-white truncate">Nike Brasil</p>
                        <p className="text-[8px] md:text-[9px] text-zinc-500">Briefing + fotos + estilo</p>
                      </div>
                      <CheckCircle size={12} className="text-green-400 flex-shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Esportivo", "Lifestyle", "Produto"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[7px] md:text-[8px] px-2 py-0.5 rounded bg-accent/8 text-accent/70 border border-accent/15 font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2: Generate content */}
                <div className="relative rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-4 md:p-5 overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-[2px] md:h-[3px] rounded-t-2xl bg-gradient-to-r from-accent to-accent-end opacity-50" />
                  <div className="flex items-center gap-2.5 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Sparkles size={14} className="text-accent md:hidden" />
                      <Sparkles size={16} className="text-accent hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Passo 2</p>
                      <p className="font-poppins font-bold text-xs md:text-sm text-white">Gere o conteúdo</p>
                    </div>
                  </div>
                  {/* Mini generation UI */}
                  <div className="space-y-2">
                    <div className="p-2.5 md:p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.14em] font-bold mb-1.5">Cliente: Nike Brasil</p>
                      <div className="flex gap-1.5">
                        <div className="flex-1 h-7 md:h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center px-2">
                          <span className="text-[9px] md:text-[10px] text-zinc-400 truncate">Post de lançamento...</span>
                        </div>
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-accent to-accent-end flex items-center justify-center flex-shrink-0">
                          <ArrowRight size={10} className="text-black" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="flex items-center gap-1.5 p-1.5 md:p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                        <Palette size={10} className="text-rose-400" />
                        <span className="text-[8px] md:text-[9px] text-zinc-400 font-semibold">Imagem</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1.5 md:p-2 rounded-lg bg-green-500/5 border border-green-500/10">
                        <FileText size={10} className="text-green-400" />
                        <span className="text-[8px] md:text-[9px] text-zinc-400 font-semibold">Copy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Result */}
                <div className="relative rounded-xl md:rounded-2xl bg-black/40 border border-accent/15 p-4 md:p-5 overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-[2px] md:h-[3px] rounded-t-2xl bg-gradient-to-r from-green-400 to-emerald-600 opacity-50" />
                  <div className="flex items-center gap-2.5 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <CheckCircle size={14} className="text-green-400 md:hidden" />
                      <CheckCircle size={16} className="text-green-400 hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Resultado</p>
                      <p className="font-poppins font-bold text-xs md:text-sm text-white">Pronto em minutos</p>
                    </div>
                  </div>
                  {/* Mini result */}
                  <div className="space-y-2">
                    <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                      <div className="aspect-[16/9] bg-gradient-to-br from-accent/8 via-rose-500/5 to-purple-500/8 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <ImageIcon size={16} className="text-accent/60" />
                        </div>
                      </div>
                      <div className="p-2 md:p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] md:text-[9px] font-bold text-green-400 uppercase tracking-wider">Entregue</span>
                          <span className="text-[8px] md:text-[9px] text-zinc-500">~8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection arrows between steps (desktop) */}
              <div className="hidden md:flex items-center justify-center gap-3 mt-5">
                {["Briefing salvo", "IA com contexto", "Entrega consistente"].map((label, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                      <CheckCircle size={10} className="text-accent" />
                      <span className="text-[9px] text-txt-secondary font-semibold">{label}</span>
                    </div>
                    {i < 2 && <ChevronRight size={12} className="text-zinc-600" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow behind mockup */}
          <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-accent/8 blur-[40px] md:blur-[100px] rounded-full" />
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card !rounded-2xl p-5 md:p-6">
              <p className="text-sm md:text-base text-txt-secondary leading-relaxed">
                Você cadastra seus clientes com briefing, fotos, estilo e
                referências. A partir daí, gera imagens, copies e criativos
                direto do perfil de cada cliente —{" "}
                <span className="text-white font-semibold">
                  sem dar contexto pra IA toda vez.
                </span>
              </p>
            </div>
            <div className="glass-card !rounded-2xl p-5 md:p-6 !border-accent/15">
              <p className="text-sm md:text-base text-txt-secondary leading-relaxed">
                É a diferença entre{" "}
                <span className="text-txt-muted">usar IA como ferramenta</span>{" "}
                e{" "}
                <span className="text-gradient-animated font-bold">
                  usar IA como parte do seu processo.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
