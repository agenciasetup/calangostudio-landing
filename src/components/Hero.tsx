"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Target,
  MessageCircle,
  Handshake,
  Users,
  FileText,
  Image,
  ArrowDown,
  ArrowRight,
  Sparkles,
  LayoutDashboard,
  Bell,
  DollarSign,
  ChevronRight,
} from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return isMobile;
}

const flowSteps = [
  { label: "Prospectar", icon: Target, color: "from-blue-400 to-cyan-500" },
  { label: "Abordar", icon: MessageCircle, color: "from-amber-400 to-orange-500" },
  { label: "Fechar", icon: Handshake, color: "from-emerald-400 to-green-500" },
  { label: "Cadastrar", icon: Users, color: "from-purple-400 to-violet-500" },
  { label: "Produzir", icon: Image, color: "from-rose-400 to-pink-500" },
];

const dashboardCards = [
  { label: "Missões do dia", value: "5 prospecções", icon: Target, accent: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { label: "Prospectos", value: "32 ativos", icon: Users, accent: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { label: "Clientes ativos", value: "8 projetos", icon: LayoutDashboard, accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { label: "Produção pendente", value: "3 entregas", icon: FileText, accent: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { label: "Lembretes", value: "2 follow-ups", icon: Bell, accent: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Cobranças", value: "R$ 2.400", icon: DollarSign, accent: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], isMobile ? [1, 1] : [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 pt-28 pb-24 overflow-hidden">
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-to-br from-accent/10 via-accent-end/6 to-transparent blur-[80px] md:blur-[140px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight"
        >
          Feche clientes, organize seu trabalho e entregue conteúdo{" "}
          <span className="text-gradient-animated">em um só lugar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          O Calango Studio é a operação do designer: prospecte empresas, feche serviços, organize briefing e contrato, e produza posts, copies e imagens com base no contexto real de cada cliente.
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.13 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-txt-secondary"
        >
          {[
            "Captação de clientes",
            "Fechamento e contrato",
            "Produção com IA",
            "Tudo integrado",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#planos" className="btn-primary px-10 py-4 text-sm tracking-widest flex items-center gap-2">
            Entrar no Calango Studio
            <ArrowRight size={16} />
          </a>
          <a href="#como-funciona" className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm">
            Ver como funciona <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

        {/* ===== DASHBOARD MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-4xl"
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
                calango.studio
              </div>
            </div>

            <div className="bg-bg-primary p-3.5 md:p-6">
              {/* Sidebar + Content layout */}
              <div className="flex gap-3 md:gap-4">
                {/* Mini sidebar */}
                <div className="hidden sm:flex flex-col gap-2 w-12 md:w-14 flex-shrink-0">
                  {[
                    { icon: LayoutDashboard, active: true },
                    { icon: Target, active: false },
                    { icon: Users, active: false },
                    { icon: FileText, active: false },
                    { icon: Image, active: false },
                    { icon: Sparkles, active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`w-full aspect-square rounded-xl flex items-center justify-center transition-colors ${
                        item.active
                          ? "bg-accent/15 border border-accent/30"
                          : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]"
                      }`}
                    >
                      <item.icon size={14} className={item.active ? "text-accent" : "text-zinc-500"} />
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  {/* Welcome header */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-accent/20 to-accent-end/20 flex items-center justify-center border border-accent/20">
                        <Sparkles size={12} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-[7px] md:text-[8px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Sua operação</p>
                        <h2 className="font-poppins font-bold text-xs md:text-sm text-white">Painel do dia</h2>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5">
                      <span className="text-[8px] text-zinc-500 uppercase tracking-wider font-bold">Março 2026</span>
                    </div>
                  </div>

                  {/* Dashboard cards grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {dashboardCards.map((card) => (
                      <div
                        key={card.label}
                        className={`rounded-lg md:rounded-xl ${card.bg} border ${card.border} p-2 md:p-3`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <card.icon size={10} className={card.accent} />
                          <span className="text-[7px] md:text-[8px] text-zinc-400 uppercase tracking-wider font-bold truncate">{card.label}</span>
                        </div>
                        <p className={`text-[10px] md:text-xs font-bold ${card.accent}`}>{card.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Flow steps */}
                  <div className="rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/[0.06] p-2.5 md:p-4">
                    <p className="text-[7px] md:text-[8px] text-zinc-500 uppercase tracking-[0.18em] font-bold mb-2 md:mb-3">Fluxo de trabalho</p>
                    <div className="flex items-center justify-between gap-1 md:gap-2">
                      {flowSteps.map((step, i) => (
                        <div key={step.label} className="flex items-center gap-1 md:gap-2 flex-1 min-w-0">
                          <div className="flex flex-col items-center gap-1 flex-shrink-0">
                            <div className={`w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                              <step.icon size={12} className="text-white md:hidden" strokeWidth={2} />
                              <step.icon size={14} className="text-white hidden md:block" strokeWidth={2} />
                            </div>
                            <span className="text-[6px] md:text-[8px] text-zinc-400 font-bold text-center leading-tight">{step.label}</span>
                          </div>
                          {i < flowSteps.length - 1 && (
                            <ChevronRight size={10} className="text-zinc-600 flex-shrink-0 hidden sm:block" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-accent/12 blur-[40px] md:blur-[100px] rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
