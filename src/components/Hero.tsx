"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Clapperboard,
  Camera,
  UserCircle,
  Package,
  Box,
  Pencil,
  Sparkles,
  Wand2,
  LayoutGrid,
  Image,
  Users,
  TrendingUp,
  ArrowDown,
  Star,
  Zap,
  Globe,
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
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

const dashboardTools = [
  { icon: Clapperboard, label: "Imagem Criativa", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Camera, label: "Estúdio de Foto", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: UserCircle, label: "UGC Build", color: "from-pink-500/20 to-rose-500/20" },
  { icon: Package, label: "Mockup Produto", color: "from-green-500/20 to-emerald-500/20" },
  { icon: Box, label: "Assets 3D", color: "from-purple-500/20 to-violet-500/20" },
  { icon: Pencil, label: "CopyMaker", color: "from-yellow-500/20 to-amber-500/20" },
];

const floatingIcons = [
  { icon: Star, delay: 0, x: -180, y: -120, size: 20 },
  { icon: Zap, delay: 0.5, x: 200, y: -80, size: 18 },
  { icon: Sparkles, delay: 1, x: -220, y: 60, size: 22 },
  { icon: Globe, delay: 1.5, x: 240, y: 40, size: 16 },
  { icon: Wand2, delay: 2, x: -140, y: 140, size: 18 },
  { icon: Image, delay: 2.5, x: 180, y: 120, size: 20 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div style={{ scale: bgScale, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-accent/8 via-accent-end/5 to-transparent blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/3 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/3 blur-[80px]" />
      </motion.div>

      {/* Floating icons with depth */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 1 + item.delay, duration: 0.8, ease: "backOut" }}
          className={`absolute hidden lg:block ${
            i % 2 === 0 ? "animate-float-slow" : "animate-float-reverse"
          }`}
          style={{
            left: `calc(50% + ${item.x}px)`,
            top: `calc(40% + ${item.y}px)`,
          }}
        >
          <item.icon size={item.size} className="text-accent" strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
            Plataforma ativa e em constante atualização
          </span>
        </motion.div>

        {/* Main headline with animated gradient */}
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
          className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#planos"
            className="btn-primary px-8 py-4 text-sm tracking-widest"
          >
            Assinar agora
          </a>
          <a
            href="#ferramentas"
            className="btn-secondary px-6 py-3.5 flex items-center gap-2 text-sm"
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
          className="flex flex-wrap items-center justify-center gap-8 mb-14 text-center"
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
              <span className="text-xs text-txt-muted uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Browser frame */}
          <div className="glass-card overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-8 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-3 h-3 mr-2 rounded-full bg-green-400/60" />
                app.calango.studio
              </div>
            </div>

            {/* Dashboard content */}
            <div className="relative bg-bg-primary p-6 md:p-8">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center">
                    <Sparkles size={16} className="text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-sm text-white">Calango Studio</h3>
                    <p className="text-[11px] text-txt-muted">Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <LayoutGrid size={14} className="text-txt-muted" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <Users size={14} className="text-txt-muted" />
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Imagens", value: "1.247", icon: Image, change: "+12%" },
                  { label: "Clientes", value: "18", icon: Users, change: "+3" },
                  { label: "Tempo salvo", value: "47h", icon: TrendingUp, change: "+28%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon size={12} className="text-txt-muted" />
                      <span className="text-[10px] text-txt-muted uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-poppins font-bold text-lg text-white">{stat.value}</span>
                      <span className="text-[10px] text-green-400 font-semibold">{stat.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tool grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {dashboardTools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, ease: "backOut" }}
                    className="group p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <tool.icon size={16} className="text-white/80" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-semibold text-txt-secondary group-hover:text-white transition-colors truncate">
                      {tool.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/15 blur-[80px] rounded-full animate-pulse-glow" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-accent-end/10 blur-[40px] rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
