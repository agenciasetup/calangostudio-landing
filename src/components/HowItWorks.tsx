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
  Workflow,
} from "lucide-react";

const steps = [
  { title: "Cadastre prospectos", icon: UserPlus, color: "from-blue-400 to-cyan-500", dot: "bg-blue-400" },
  { title: "Envie mensagens", icon: Send, color: "from-sky-400 to-blue-500", dot: "bg-sky-400" },
  { title: "Acompanhe respostas", icon: MessageCircle, color: "from-amber-400 to-orange-500", dot: "bg-amber-400" },
  { title: "Feche o cliente", icon: Handshake, color: "from-emerald-400 to-green-500", dot: "bg-emerald-400" },
  { title: "Cadastre no Studio", icon: FolderOpen, color: "from-purple-400 to-violet-500", dot: "bg-purple-400" },
  { title: "Briefing e contrato", icon: ClipboardList, color: "from-pink-400 to-rose-500", dot: "bg-pink-400" },
  { title: "Gere conteúdo", icon: Sparkles, color: "from-accent to-accent-end", dot: "bg-accent" },
  { title: "Entregue rápido", icon: Rocket, color: "from-green-400 to-emerald-500", dot: "bg-green-400" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-accent/4 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Workflow size={12} />
            Fluxo completo
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Do primeiro contato{" "}
            <span className="text-gradient-animated">até a entrega.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl mx-auto">
            O fluxo completo, sem pular de ferramenta em ferramenta.
          </p>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-[52px] md:top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent hidden lg:block" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Number badge */}
                <div className="text-[9px] md:text-[10px] font-black text-zinc-600 uppercase tracking-wider mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon circle with glow on hover */}
                <div className="relative mb-3">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <step.icon size={20} className="text-white md:hidden" strokeWidth={2} />
                    <step.icon size={22} className="text-white hidden md:block" strokeWidth={2} />
                  </div>
                  {/* Dot on the timeline */}
                  <div className={`absolute -bottom-[18px] md:-bottom-[22px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${step.dot} shadow-[0_0_8px_currentColor] hidden lg:block`} />
                </div>

                {/* Title */}
                <p className="font-poppins font-bold text-[11px] md:text-xs text-white leading-tight mt-2 lg:mt-5 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
