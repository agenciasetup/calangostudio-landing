"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Send,
  MessageCircle,
  Handshake,
  FolderOpen,
  ClipboardList,
  Sparkles,
  Rocket,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Cadastre prospectos",
    description: "Monte sua base de prospecção e saiba quem abordar.",
    icon: UserPlus,
    color: "from-blue-400 to-cyan-500",
    dot: "bg-blue-400",
  },
  {
    number: "02",
    title: "Envie mensagens prontas",
    description: "Comece a conversar sem travar no que escrever.",
    icon: Send,
    color: "from-sky-400 to-blue-500",
    dot: "bg-sky-400",
  },
  {
    number: "03",
    title: "Acompanhe respostas",
    description: "Saiba quem respondeu, quem esfriou e quem está perto de fechar.",
    icon: MessageCircle,
    color: "from-amber-400 to-orange-500",
    dot: "bg-amber-400",
  },
  {
    number: "04",
    title: "Feche o cliente",
    description: "Quando fechar, ele entra no Studio com tudo organizado.",
    icon: Handshake,
    color: "from-emerald-400 to-green-500",
    dot: "bg-emerald-400",
  },
  {
    number: "05",
    title: "Cadastre no Studio",
    description: "Onboarding, briefing e contrato centralizados.",
    icon: FolderOpen,
    color: "from-purple-400 to-violet-500",
    dot: "bg-purple-400",
  },
  {
    number: "06",
    title: "Faça briefing e contrato",
    description: "Centralize as informações e comece o projeto do jeito certo.",
    icon: ClipboardList,
    color: "from-pink-400 to-rose-500",
    dot: "bg-pink-400",
  },
  {
    number: "07",
    title: "Gere conteúdo e imagens",
    description: "Posts, copies, imagens e fotos guiados pelo briefing do cliente.",
    icon: Sparkles,
    color: "from-accent to-accent-end",
    dot: "bg-accent",
  },
  {
    number: "08",
    title: "Entregue com mais velocidade",
    description: "Menos improviso. Mais controle. Mais tempo livre.",
    icon: Rocket,
    color: "from-green-400 to-emerald-500",
    dot: "bg-green-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-accent/4 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

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
            Do primeiro contato{" "}
            <span className="text-gradient-animated">até a entrega.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            O fluxo completo do designer, sem pular de ferramenta em ferramenta.
          </p>
        </motion.div>

        {/* Flow mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/fluxo
              </div>
            </div>

            <div className="bg-bg-primary p-4 md:p-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                {steps.map((step, i) => (
                  <div key={step.number} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      className="rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-3 md:p-4 hover:border-white/[0.15] transition-all duration-300 h-full"
                    >
                      <div className={`absolute top-0 inset-x-0 h-[2px] rounded-t-xl md:rounded-t-2xl bg-gradient-to-r ${step.color} opacity-50`} />

                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon size={12} className="text-white md:hidden" strokeWidth={2} />
                          <step.icon size={14} className="text-white hidden md:block" strokeWidth={2} />
                        </div>
                        <span className="text-[8px] md:text-[9px] font-black text-zinc-500 uppercase tracking-wider">{step.number}</span>
                      </div>

                      <p className="font-poppins font-bold text-[10px] md:text-xs text-white mb-1 leading-tight">
                        {step.title}
                      </p>
                      <p className="text-[8px] md:text-[10px] text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-2 md:mt-3 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                        <div className="flex-1 h-[2px] rounded-full bg-white/[0.06]">
                          <div className={`h-full rounded-full bg-gradient-to-r ${step.color}`} style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Arrow connector */}
                    {i < steps.length - 1 && i % 4 !== 3 && (
                      <div className="absolute top-1/2 -right-2 md:-right-2.5 z-10 hidden sm:block">
                        <ChevronRight size={12} className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-accent/8 blur-[40px] md:blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
