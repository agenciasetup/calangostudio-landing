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

const floatingElements = [
  { icon: Star, x: -380, y: -220, size: 24, blur: true, spin: false },
  { icon: Zap, x: 400, y: -180, size: 20, blur: false, spin: true },
  { icon: Sparkles, x: -440, y: 40, size: 28, blur: true, spin: false },
  { icon: Globe, x: 460, y: 20, size: 18, blur: false, spin: true },
  { icon: Wand2, x: -300, y: 280, size: 22, blur: false, spin: false },
  { icon: Camera, x: 350, y: 260, size: 20, blur: true, spin: false },
  { icon: Palette, x: -500, y: -80, size: 16, blur: true, spin: true },
  { icon: Package, x: 500, y: -60, size: 16, blur: false, spin: false },
  { icon: Shapes, x: -200, y: -300, size: 18, blur: false, spin: true },
  { icon: ScanLine, x: 220, y: -280, size: 16, blur: true, spin: false },
  { icon: FileText, x: -460, y: 200, size: 14, blur: false, spin: true },
  { icon: History, x: 440, y: 180, size: 15, blur: true, spin: false },
];

function MouseGlow() {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 50, damping: 30 });
  const springY = useSpring(glowY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [glowX, glowY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[150px]"
      style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
    />
  );
}

function MouseTracker({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
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
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const iconsRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const iconsScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 pt-28 pb-24 overflow-hidden">
      <MouseGlow />

      {/* Animated background glows that move */}
      <motion.div style={{ scale: bgScale, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-accent/10 via-accent-end/6 to-transparent blur-[160px]" />
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -60, 80, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/4 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-pink-500/4 blur-[100px]"
        />
      </motion.div>

      {/* Floating icons - scroll reactive, with blur/spin */}
      <motion.div style={{ rotate: iconsRotate, scale: iconsScale }} className="absolute inset-0 pointer-events-none">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: item.blur ? 0.07 : 0.13, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 1.2, ease: "backOut" }}
            className={`absolute hidden lg:block ${
              i % 3 === 0 ? "animate-float-slow" : i % 3 === 1 ? "animate-float-reverse" : "animate-float"
            }`}
            style={{
              left: `calc(50% + ${item.x}px)`,
              top: `calc(45% + ${item.y}px)`,
              filter: item.blur ? "blur(3px)" : "none",
            }}
          >
            <div className={item.spin ? "animate-spin-slow" : ""}>
              <item.icon size={item.size} className="text-accent drop-shadow-[0_0_12px_rgba(255,170,0,0.4)]" strokeWidth={1.5} />
            </div>
          </motion.div>
        ))}
      </motion.div>

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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight"
        >
          O studio completo para{" "}
          <span className="text-gradient-animated">Designers</span>{" "}
          e{" "}
          <span className="text-gradient-animated">Social Media.</span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a href="#planos" className="btn-primary px-10 py-4 text-sm tracking-widest">Assinar agora</a>
          <a href="#ferramentas" className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm">
            Ver ferramentas <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

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
              <span className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mt-1 font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ===== DASHBOARD MOCKUP — No sidebar, compact grid ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-4xl"
        >
          <MouseTracker>
            <div className="glass-card overflow-hidden !rounded-[28px] !shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              {/* Browser bar */}
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

              <div className="bg-bg-primary p-5 md:p-7">
                {/* Welcome header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-[spin_8s_linear_infinite] p-[2px]">
                        <div className="w-full h-full rounded-full bg-bg-primary" />
                      </div>
                      <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                        <Sparkles size={14} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Seja bem vindo,</p>
                      <h2 className="font-poppins font-black text-lg md:text-xl">
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

                {/* Compact tool grid — names only */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {dashboardModules.map((tool, i) => (
                    <motion.div
                      key={tool.label}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.05, duration: 0.4, ease: "backOut" }}
                      className={`group relative rounded-2xl bg-black/40 border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-white/[0.18] ${
                        tool.hero ? "sm:col-span-2 sm:row-span-2" : ""
                      }`}
                      style={{ boxShadow: "0 12px 40px rgba(8,14,30,0.4)" }}
                    >
                      <div className={`absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${tool.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
                      {tool.hero && (
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-gradient-shift"
                          style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(56,189,248,0.15), rgba(17,24,39,0.4))", backgroundSize: "200% 200%" }}
                        />
                      )}

                      <div className={`relative z-10 flex flex-col items-start ${tool.hero ? "p-4 sm:p-5" : "p-3"} h-full`}>
                        <div className={`${tool.hero ? "w-10 h-10 sm:w-12 sm:h-12" : "w-8 h-8"} rounded-xl flex items-center justify-center border shadow-lg mb-2 bg-white/10 text-white border-white/15 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500`}>
                          <tool.icon size={tool.hero ? 20 : 14} strokeWidth={2} />
                        </div>
                        <h3 className={`font-poppins font-bold text-white ${tool.hero ? "text-base sm:text-lg mt-auto" : "text-[10px] sm:text-xs mt-auto"} leading-tight`}>
                          {tool.label}
                        </h3>
                        {tool.hero && (
                          <div className="flex items-center justify-between w-full mt-3">
                            <span className="text-[7px] font-black text-white/70 uppercase tracking-[0.20em]">Acessar Estúdio</span>
                            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                              <ChevronRight size={12} strokeWidth={3} />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MouseTracker>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/12 blur-[100px] rounded-full animate-pulse-glow" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-accent-end/8 blur-[50px] rounded-full" />
        </motion.div>
      </div>

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
