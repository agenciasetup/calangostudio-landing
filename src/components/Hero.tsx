"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
  Star,
  Zap,
  Globe,
  Wand2,
  Image,
  LayoutGrid,
  ChevronRight,
  FolderOpen,
  Settings,
  Trophy,
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
    const duration = 2000;
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

/* Exact tool list from Calango.studio Dashboard.tsx */
const sidebarTools = [
  { icon: Palette, label: "Imagem Criativa", color: "text-pink-400" },
  { icon: Smartphone, label: "UGC Build", color: "text-orange-400" },
  { icon: PencilRuler, label: "Modo Manual", color: "text-lime-400" },
  { icon: Sparkles, label: "Criação Livre", color: "text-yellow-400" },
  { icon: Briefcase, label: "Consultor de Perfil", color: "text-blue-400" },
  { icon: History, label: "Restaurador Pro", color: "text-amber-400" },
  { icon: Shapes, label: "Assets 3D", color: "text-red-400" },
  { icon: ScanLine, label: "Remix Layout", color: "text-purple-400" },
  { icon: Camera, label: "Estúdio de Foto", color: "text-cyan-400" },
  { icon: Users, label: "Meus Clientes", color: "text-emerald-400" },
  { icon: FileText, label: "CopyMaker", color: "text-green-400" },
  { icon: Package, label: "Mockup Produto", color: "text-teal-400" },
];

/* Dashboard tool cards matching Calango.studio exactly */
const dashboardModules = [
  {
    key: "imagem_criativa",
    label: "Imagem Criativa",
    desc: "Crie imagens cinematográficas com estilos prontos em poucos segundos",
    icon: Palette,
    color: "from-rose-500 to-pink-600",
    hero: true,
  },
  {
    key: "estudio_de_foto",
    label: "Estúdio de Foto",
    desc: "Coloque seu rosto em qualquer foto",
    icon: Camera,
    color: "from-cyan-400 to-blue-500",
  },
  {
    key: "restaurador_pro",
    label: "Restaurador Pro",
    desc: "Recupere fotos antigas ou melhore qualidade de fotos",
    icon: History,
    color: "from-amber-400 to-amber-700",
  },
  {
    key: "mockup_3d",
    label: "Mockup Produto",
    desc: "Crie mockups incríveis em cenários incríveis em poucos segundos",
    icon: Package,
    color: "from-emerald-400 to-teal-700",
  },
  {
    key: "asset_builder",
    label: "Assets 3D",
    desc: "Crie elementos e objetos em PNG transparente",
    icon: Shapes,
    color: "from-red-500 to-rose-700",
  },
  {
    key: "consultor_visual",
    label: "Consultor de Perfil",
    desc: "Auditoria estratégica do seu perfil e feed do Instagram com diagnóstico técnico",
    icon: Briefcase,
    color: "from-blue-400 to-indigo-600",
  },
  {
    key: "ugc_build",
    label: "UGC Build",
    desc: "Crie fotos ultra-realistas de pessoas usando seus produtos com fidelidade máxima",
    icon: Smartphone,
    color: "from-orange-500 to-amber-600",
  },
  {
    key: "copy_maker",
    label: "CopyMaker",
    desc: "Crie copy pronta para posts, carrossel, stories e reels em segundos",
    icon: FileText,
    color: "from-green-400 to-emerald-700",
  },
  {
    key: "meus_clientes",
    label: "Meus Clientes",
    desc: "Gerencie sua base de clientes e dados estratégicos em um único lugar",
    icon: Users,
    color: "from-sky-400 to-cyan-700",
  },
  {
    key: "remix_layout",
    label: "Remix Layout",
    desc: "Replique layouts trocando fotos, cores e texto",
    icon: ScanLine,
    color: "from-purple-500 to-fuchsia-700",
  },
];

const floatingIcons = [
  { icon: Star, delay: 0, x: -280, y: -160, size: 22 },
  { icon: Zap, delay: 0.4, x: 300, y: -100, size: 20 },
  { icon: Sparkles, delay: 0.8, x: -320, y: 80, size: 24 },
  { icon: Globe, delay: 1.2, x: 340, y: 60, size: 18 },
  { icon: Wand2, delay: 1.6, x: -240, y: 200, size: 20 },
  { icon: Image, delay: 2, x: 280, y: 180, size: 22 },
  { icon: Palette, delay: 0.6, x: -380, y: -40, size: 16 },
  { icon: Camera, delay: 1.4, x: 380, y: -30, size: 16 },
];

function MouseTracker({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 40;
    const y = (e.clientY - rect.top - rect.height / 2) / 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
      {/* Multi-layer animated background */}
      <motion.div style={{ scale: bgScale, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-accent/10 via-accent-end/6 to-transparent blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/4 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/4 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-pink-500/3 blur-[80px] animate-float-slow" />
      </motion.div>

      {/* Floating icons with depth and parallax */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: 0.8 + item.delay, duration: 1, ease: "backOut" }}
          className={`absolute hidden lg:block ${
            i % 3 === 0 ? "animate-float-slow" : i % 3 === 1 ? "animate-float-reverse" : "animate-float"
          }`}
          style={{
            left: `calc(50% + ${item.x}px)`,
            top: `calc(40% + ${item.y}px)`,
          }}
        >
          <item.icon size={item.size} className="text-accent drop-shadow-[0_0_8px_rgba(255,170,0,0.3)]" strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
          <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
            Plataforma ativa e em constante atualização
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight"
        >
          O studio completo para{" "}
          <span className="text-gradient-animated">
            Designers
          </span>{" "}
          e{" "}
          <span className="text-gradient-animated">
            Social Media.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Gere imagens, crie copies, gerencie clientes e acelere todo o seu
          workflow — sem trocar de aba, sem assinar várias ferramentas, sem
          perder horas no processo.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#planos"
            className="btn-primary px-10 py-4 text-sm tracking-widest"
          >
            Assinar agora
          </a>
          <a
            href="#ferramentas"
            className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm"
          >
            Ver ferramentas
            <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
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
              <span className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mt-1 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ===== DASHBOARD MOCKUP (Exact Calango.studio replica) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-5xl"
        >
          <MouseTracker>
            {/* Browser chrome */}
            <div className="glass-card overflow-hidden !rounded-[28px] !shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-6 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs text-txt-muted font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 mr-2 rounded-full bg-green-400/60" />
                  calango.studio
                </div>
              </div>

              {/* Dashboard layout with sidebar */}
              <div className="flex bg-bg-primary min-h-[500px] md:min-h-[580px]">
                {/* Sidebar - exact Calango.studio style */}
                <div className="hidden md:flex flex-col w-[200px] lg:w-[220px] bg-black/40 backdrop-blur-[40px] border-r border-white/[0.06] p-4 flex-shrink-0">
                  {/* Sidebar logo */}
                  <div className="flex items-center gap-2 mb-6 px-1">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-end flex items-center justify-center">
                      <Sparkles size={12} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="font-poppins font-bold text-xs text-white">
                      Calango <span className="text-gradient-animated">studio</span>
                    </span>
                  </div>

                  {/* Dashboard link */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-gradient-to-r from-white/[0.08] to-transparent border border-white/10 mb-3">
                    <LayoutGrid size={14} className="text-white" />
                    <span className="text-[11px] font-semibold text-white">Dashboard</span>
                  </div>

                  {/* Tools section label */}
                  <p className="text-[8px] font-black text-txt-muted uppercase tracking-[0.24em] px-3 mb-2">
                    Ferramentas Studio
                  </p>

                  {/* Tool links - exact list from Calango.studio */}
                  <div className="space-y-0.5 flex-1 overflow-hidden">
                    {sidebarTools.map((tool, i) => (
                      <motion.div
                        key={tool.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + i * 0.06 }}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group"
                      >
                        <tool.icon size={13} className={`${tool.color} group-hover:scale-125 transition-transform`} strokeWidth={2} />
                        <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors truncate">
                          {tool.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom links */}
                  <div className="border-t border-white/[0.04] pt-3 mt-2 space-y-0.5">
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-2xl hover:bg-white/[0.03] transition-all cursor-pointer group">
                      <Trophy size={13} className="text-amber-400" />
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors">Recompensas</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-2xl hover:bg-white/[0.03] transition-all cursor-pointer group">
                      <FolderOpen size={13} className="text-amber-400" />
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors">Projetos</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-2xl hover:bg-white/[0.03] transition-all cursor-pointer group">
                      <Settings size={13} className="text-zinc-500" />
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors">Configurações</span>
                    </div>
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-5 md:p-6 lg:p-8 overflow-hidden">
                  {/* Welcome header - exact Calango.studio style */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      {/* Profile ring */}
                      <div className="relative w-14 h-14 rounded-full flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-[spin_8s_linear_infinite] p-[2px]">
                          <div className="w-full h-full rounded-full bg-bg-primary" />
                        </div>
                        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center overflow-hidden">
                          <span className="text-lg">🦎</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Seja bem vindo,</p>
                        <h2 className="font-poppins font-black text-xl md:text-2xl lg:text-3xl">
                          Mestre<span className="text-gradient-animated">lango</span>
                        </h2>
                      </div>
                    </div>

                    {/* Stats counters - matching Calango.studio */}
                    <div className="hidden sm:grid grid-cols-3 gap-3">
                      {[
                        { label: "Projetos", value: "14" },
                        { label: "Artes", value: "1" },
                        { label: "Favs", value: "0" },
                      ].map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 + i * 0.1 }}
                          className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center hover:border-white/15 transition-all"
                        >
                          <span className="font-poppins font-black text-base text-white">{s.value}</span>
                          <span className="text-[7px] text-zinc-500 uppercase tracking-[0.18em] font-bold">{s.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tool cards grid - exact Calango.studio layout */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {dashboardModules.map((tool, i) => (
                      <motion.div
                        key={tool.key}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.07, duration: 0.5, ease: "backOut" }}
                        className={`group relative rounded-[24px] lg:rounded-[28px] bg-black/40 border border-white/[0.08] overflow-hidden cursor-pointer hover:border-white/[0.18] transition-all duration-500 ${
                          tool.hero ? "col-span-2 row-span-2 min-h-[220px] lg:min-h-[280px]" : "min-h-[140px] lg:min-h-[180px]"
                        }`}
                        style={{
                          boxShadow: tool.hero
                            ? "0 30px 80px rgba(124,58,237,0.15)"
                            : "0 20px 60px rgba(8,14,30,0.45)",
                        }}
                      >
                        {/* Colored top bar */}
                        <div className={`absolute top-0 inset-x-0 h-1 rounded-t-[24px] lg:rounded-t-[28px] bg-gradient-to-r ${tool.color} opacity-55 group-hover:opacity-100 transition-opacity duration-500`} />

                        {/* Radial light overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

                        {/* Gradient to black overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/30" />

                        {/* Hero animated gradient */}
                        {tool.hero && (
                          <div
                            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-gradient-shift"
                            style={{
                              background: "linear-gradient(135deg, rgba(236,72,153,0.35), rgba(56,189,248,0.18), rgba(17,24,39,0.5))",
                              backgroundSize: "200% 200%",
                            }}
                          />
                        )}

                        {/* Hover highlight */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.04]" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-4 lg:p-5">
                          {/* Icon */}
                          <div className={`${tool.hero ? "w-12 h-12 lg:w-14 lg:h-14" : "w-10 h-10 lg:w-12 lg:h-12"} rounded-2xl flex items-center justify-center border shadow-xl mb-3 lg:mb-4 transition-all duration-500 ${
                            tool.hero
                              ? "bg-white/15 text-white border-white/25 group-hover:scale-110"
                              : "bg-white/10 text-white border-white/15 group-hover:scale-110 group-hover:bg-white/20"
                          }`}>
                            <tool.icon size={tool.hero ? 24 : 20} strokeWidth={2} />
                          </div>

                          <div className="flex-1 flex flex-col justify-end">
                            {/* Title */}
                            <h3 className={`font-poppins font-bold mb-1 ${tool.hero ? "text-xl lg:text-2xl" : "text-sm lg:text-base"}`}>
                              {tool.label}
                            </h3>
                            {/* Description */}
                            <p className={`text-zinc-300/80 group-hover:text-white/90 transition-colors mb-3 lg:mb-4 line-clamp-2 ${
                              tool.hero ? "text-xs lg:text-sm leading-relaxed max-w-xl" : "text-[10px] lg:text-xs leading-relaxed"
                            }`}>
                              {tool.desc}
                            </p>

                            {/* CTA row */}
                            <div className="flex items-center justify-between">
                              <span className={`font-black uppercase tracking-[0.20em] ${
                                tool.hero ? "text-[8px] lg:text-[9px] text-white/80" : "text-[7px] lg:text-[8px] text-zinc-500 group-hover:text-zinc-200"
                              } transition-colors`}>
                                Acessar Estúdio Criativo
                              </span>
                              <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                                tool.hero
                                  ? "w-9 h-9 lg:w-10 lg:h-10 bg-white text-black group-hover:scale-110 shadow-2xl"
                                  : "w-8 h-8 lg:w-9 lg:h-9 bg-white/10 text-zinc-100 group-hover:bg-accent group-hover:text-black shadow-lg"
                              }`}>
                                <ChevronRight size={tool.hero ? 16 : 14} strokeWidth={2.5} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MouseTracker>

          {/* Glow effects under mockup */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/12 blur-[100px] rounded-full animate-pulse-glow" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-accent-end/8 blur-[50px] rounded-full" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1/4 h-10 bg-purple-500/8 blur-[40px] rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
