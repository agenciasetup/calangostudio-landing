"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Palette,
  Camera,
  Smartphone,
  Package,
  Shapes,
  PencilRuler,
  Sparkles,
  ScanLine,
  History,
  FileText,
  Users,
  Briefcase,
  ArrowDown,
  ChevronRight,
} from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

const dashboardModules = [
  { label: "Imagem Criativa", icon: Palette, color: "from-rose-500 to-pink-600", hero: true },
  { label: "Estúdio de Foto", icon: Camera, color: "from-cyan-400 to-blue-500" },
  { label: "Restaurador Pro", icon: History, color: "from-amber-400 to-amber-700" },
  { label: "Mockup Produto", icon: Package, color: "from-emerald-400 to-teal-700" },
  { label: "Assets 3D", icon: Shapes, color: "from-red-500 to-rose-700" },
  { label: "Consultor de Perfil", icon: Briefcase, color: "from-blue-400 to-indigo-600" },
  { label: "UGC Build", icon: Smartphone, color: "from-orange-500 to-amber-600" },
  { label: "CopyMaker", icon: FileText, color: "from-green-400 to-emerald-700" },
  { label: "Meus Clientes", icon: Users, color: "from-sky-400 to-cyan-700" },
  { label: "Remix Layout", icon: ScanLine, color: "from-purple-500 to-fuchsia-700" },
  { label: "Modo Manual", icon: PencilRuler, color: "from-lime-400 to-green-600" },
  { label: "Criação Livre", icon: Sparkles, color: "from-yellow-400 to-orange-600" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 pt-28 pb-24 overflow-hidden">
      {/* Static background glow — no mouse tracking, no animated blobs on mobile */}
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
          Gere imagens, copies e criativos{" "}
          <span className="text-gradient-animated">profissionais</span>{" "}
          em{" "}
          <span className="text-gradient-animated">minutos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Uma plataforma com 12 ferramentas de IA para designers e social media
          managers que precisam produzir mais — sem abrir mil abas ou reexplicar
          o cliente pra IA toda semana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a href="#planos" className="btn-primary px-10 py-4 text-sm tracking-widest">Assinar agora</a>
          <a href="#ferramentas" className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm">
            Ver ferramentas <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-10 mb-16 text-center"
        >
          {[
            { value: 12, suffix: "+", label: "Ferramentas" },
            { value: 500, suffix: "+", label: "Designers ativos" },
            { value: 20, suffix: "min", label: "Tempo por post" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-poppins font-black text-2xl md:text-3xl text-white text-glow">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mt-1 font-bold">{stat.label}</span>
            </div>
          ))}
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

            <div className="bg-bg-primary p-3.5 md:p-7">
              {/* Welcome header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2.5 md:gap-3">
                  <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-[spin_8s_linear_infinite] p-[2px]">
                      <div className="w-full h-full rounded-full bg-bg-primary" />
                    </div>
                    <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                      <Sparkles size={12} className="text-accent md:hidden" />
                      <Sparkles size={14} className="text-accent hidden md:block" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Seja bem vindo,</p>
                    <h2 className="font-poppins font-black text-base md:text-xl">
                      Mestre<span className="text-gradient-animated">lango</span>
                    </h2>
                  </div>
                </div>
                <div className="hidden sm:grid grid-cols-3 gap-2">
                  {[{ label: "Projetos", value: "14" }, { label: "Artes", value: "1" }, { label: "Favs", value: "0" }].map((s, i) => (
                    <div key={i} className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center">
                      <span className="font-poppins font-black text-sm text-white">{s.value}</span>
                      <span className="text-[6px] text-zinc-500 uppercase tracking-[0.18em] font-bold">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact tool grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1.5 md:gap-2.5">
                {dashboardModules.map((tool) => (
                  <div
                    key={tool.label}
                    className={`group relative rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] overflow-hidden transition-colors duration-300 hover:border-white/[0.18] ${
                      tool.hero ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    <div className={`absolute top-0 inset-x-0 h-[2px] md:h-[3px] rounded-t-2xl bg-gradient-to-r ${tool.color} opacity-50`} />

                    <div className={`relative z-10 flex flex-col items-start ${tool.hero ? "p-2.5 sm:p-5" : "p-2 md:p-3"} h-full`}>
                      <div className={`${tool.hero ? "w-8 h-8 sm:w-12 sm:h-12" : "w-6 h-6 md:w-8 md:h-8"} rounded-lg md:rounded-xl flex items-center justify-center border shadow-lg mb-1 md:mb-2 bg-white/10 text-white border-white/15`}>
                        <tool.icon size={tool.hero ? 16 : 11} className="md:hidden" strokeWidth={2} />
                        <tool.icon size={tool.hero ? 20 : 14} className="hidden md:block" strokeWidth={2} />
                      </div>
                      <h3 className={`font-poppins font-bold text-white ${tool.hero ? "text-xs sm:text-lg mt-auto" : "text-[8px] sm:text-xs mt-auto"} leading-tight`}>
                        {tool.label}
                      </h3>
                      {tool.hero && (
                        <div className="flex items-center justify-between w-full mt-2 md:mt-3">
                          <span className="text-[6px] md:text-[7px] font-black text-white/70 uppercase tracking-[0.20em] hidden sm:block">Acessar Estúdio</span>
                          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                            <ChevronRight size={10} strokeWidth={3} className="md:hidden" />
                            <ChevronRight size={12} strokeWidth={3} className="hidden md:block" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-accent/12 blur-[40px] md:blur-[100px] rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator - desktop only */}
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
