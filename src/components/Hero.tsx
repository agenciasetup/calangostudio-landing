"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
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

/* iOS-style text selection highlight */
function IOSHighlight({ children, delay = 0 }: { children: string; delay?: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="relative inline">
      <motion.span
        className="absolute inset-0 rounded-md bg-accent/25"
        initial={{ scaleX: 0 }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
      {/* Left handle */}
      <motion.span
        className="absolute -left-[3px] top-0 bottom-0 w-[2.5px] rounded-full bg-accent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={active ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-accent" />
      </motion.span>
      {/* Right handle */}
      <motion.span
        className="absolute -right-[3px] top-0 bottom-0 w-[2.5px] rounded-full bg-accent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={active ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.55 }}
      >
        <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-accent" />
      </motion.span>
      <span className="relative z-10 text-gradient-animated">{children}</span>
    </span>
  );
}

/* CSS-only floating particles for hero BG */
function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${8 + (i * 7.5) % 85}%`,
        top: `${10 + (i * 11) % 75}%`,
        size: `${2 + (i % 3)}px`,
        duration: `${5 + (i % 4) * 2}s`,
        delay: `${(i * 0.7) % 4}s`,
        px: `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 5) * 10)}px`,
        py: `${-40 - (i % 4) * 25}px`,
        color:
          i % 3 === 0
            ? "rgba(255,170,0,0.5)"
            : i % 3 === 1
            ? "rgba(255,123,71,0.4)"
            : "rgba(255,255,255,0.2)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            "--size": p.size,
            "--duration": p.duration,
            "--delay": p.delay,
            "--px": p.px,
            "--py": p.py,
            "--color": p.color,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
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
    <section ref={sectionRef} className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-start px-4 pt-32 md:pt-40 pb-24 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg hero-grid-animated absolute inset-0 opacity-100" />
      </div>

      {/* Pulsing radial glow */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="section-glow-pulse w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-accent/20 via-accent-end/10 to-transparent blur-[80px] md:blur-[140px]" />
        <div className="section-glow-pulse-alt w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tl from-purple-500/8 via-blue-500/5 to-transparent blur-[60px] md:blur-[120px]" style={{ top: "30%", left: "60%" }} />
      </motion.div>

      {/* Floating particles */}
      <HeroParticles />

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[8%] hidden lg:block opacity-[0.06]"
      >
        <Target size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-48 right-[6%] hidden lg:block opacity-[0.06]"
      >
        <Sparkles size={50} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[35%] left-[4%] hidden lg:block opacity-[0.05]"
      >
        <Handshake size={45} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="mb-6 md:mb-8"
        >
          <span className="badge-pill">
            <Sparkles size={12} />
            Plataforma de operação do designer
          </span>
        </motion.div>

        {/* Headline with iOS selection effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-poppins font-black text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] mb-6 md:mb-8 tracking-tight"
        >
          Feche clientes, organize{" "}
          <br className="hidden sm:block" />
          seu trabalho e entregue{" "}
          <br className="hidden sm:block" />
          conteúdo{" "}
          <IOSHighlight delay={1200}>em um só lugar.</IOSHighlight>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base md:text-lg text-txt-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          O Calango Studio é a operação do designer: prospecte empresas, feche serviços, organize briefing e contrato, e produza posts, copies e imagens com base no contexto real de cada cliente.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
        >
          <a href="#planos" className="btn-primary px-10 py-4 text-sm tracking-widest flex items-center gap-2 group">
            Entrar no Calango Studio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#como-funciona" className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm">
            Ver como funciona <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

        {/* ===== DASHBOARD MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:!shadow-[0_30px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
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
                  </div>

                  {/* Dashboard cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {dashboardCards.map((card) => (
                      <div key={card.label} className={`rounded-lg md:rounded-xl ${card.bg} border ${card.border} p-2 md:p-3`}>
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
