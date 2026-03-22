"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Workflow,
  Users,
  User,
  ImageIcon,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

const heroImages = [
  "/images/resultados/hero_criativo.jpg",
  "/images/resultados/hero3_criativo.jpg",
  "/images/funcoes/hero-imagem-criativa.jpg",
];

/* ─── Dashed connector (horizontal on lg, vertical on mobile) ─── */
function DashedConnector({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
      className="flex-shrink-0"
    >
      {/* Desktop: horizontal */}
      <div className="hidden lg:flex items-center w-[50px] xl:w-[70px] relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
        <svg className="w-full h-[2px] overflow-visible" viewBox="0 0 70 2" preserveAspectRatio="none">
          <line x1="8" y1="1" x2="62" y2="1" stroke="rgba(255,170,0,0.35)" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
      </div>
      {/* Mobile: vertical */}
      <div className="flex lg:hidden justify-center py-1">
        <div className="relative h-8 flex flex-col items-center">
          <div className="w-[9px] h-[9px] rounded-full border-2 border-accent/50 bg-accent/20" />
          <svg className="flex-1 w-[2px]" viewBox="0 0 2 20" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,170,0,0.35)" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
          <div className="w-[9px] h-[9px] rounded-full border-2 border-accent/50 bg-accent/20" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Node wrapper ─── */
function NodeCard({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className={`relative w-full lg:w-[220px] xl:w-[240px] flex-shrink-0 ${className}`}
    >
      <div
        className="rounded-2xl border border-white/[0.10] overflow-hidden"
        style={{
          background: "rgba(14, 14, 18, 0.92)",
          boxShadow: "0 16px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Node header ─── */
function NodeHeader({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="px-3.5 py-2.5 border-b border-white/[0.06] flex items-center gap-1.5">
      <Icon size={10} className="text-zinc-500" />
      <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-500">{label}</span>
    </div>
  );
}

/* ─── CLIENT node (kept as-is, minified) ─── */
function ClientNode() {
  return (
    <NodeCard delay={0.2}>
      <NodeHeader icon={Users} label="Cliente" />
      <div className="p-3.5">
        {/* Dropdown */}
        <div className="flex items-center justify-between bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 mb-3">
          <span className="text-[11px] font-medium text-white">Advocacia Andrade</span>
          <ChevronDown size={11} className="text-zinc-500" />
        </div>
        {/* Client info */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">A</div>
          <div>
            <p className="text-[11px] font-bold text-white leading-tight">Advocacia Andrade</p>
            <p className="text-[9px] text-zinc-500">Advocacia</p>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 mb-2.5 text-center">
          {["9", "1", "0"].map((n) => (
            <div key={n} className="bg-white/[0.03] rounded-md py-1">
              <p className="text-[11px] font-bold text-white">{n}</p>
            </div>
          ))}
        </div>
        {/* Image grid */}
        <div className="grid grid-cols-3 gap-[3px] rounded-lg overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-white/[0.04]" />
          ))}
        </div>
      </div>
    </NodeCard>
  );
}

/* ─── PERSONAGEM node (silhouette mockup) ─── */
function CharacterNode() {
  return (
    <NodeCard delay={0.35}>
      <NodeHeader icon={User} label="Personagem" />
      <div className="p-3.5">
        {/* Silhouette photo mockup */}
        <div className="relative aspect-[3/4] rounded-xl bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 border border-white/[0.06] flex items-center justify-center overflow-hidden mb-3">
          {/* Gradient ambient light behind silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-accent/[0.06] rounded-full blur-[40px]" />
          {/* User silhouette */}
          <svg
            viewBox="0 0 120 160"
            className="w-[65%] h-[75%] relative z-10"
            fill="none"
          >
            {/* Head */}
            <circle cx="60" cy="45" r="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            {/* Body */}
            <path
              d="M20 160 C20 110, 35 95, 60 90 C85 95, 100 110, 100 160"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
            {/* Face hint - eyes */}
            <circle cx="52" cy="42" r="2" fill="rgba(255,255,255,0.10)" />
            <circle cx="68" cy="42" r="2" fill="rgba(255,255,255,0.10)" />
          </svg>
          {/* Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/50 border border-white/[0.08]">
            <span className="text-[9px] text-zinc-400 font-medium">Filipe</span>
          </div>
        </div>
        {/* Angle selector (compact) */}
        <div className="flex gap-1">
          {["Frontal", "Direta", "Esquerda", "Clone"].map((a, i) => (
            <div
              key={a}
              className={`flex-1 py-1 rounded-md text-center text-[8px] font-semibold ${
                i === 0
                  ? "bg-accent text-black"
                  : "bg-white/[0.04] border border-white/[0.06] text-zinc-600"
              }`}
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </NodeCard>
  );
}

/* ─── IMAGEM node (hero image slideshow) ─── */
function ImageNode() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <NodeCard delay={0.5}>
      <NodeHeader icon={ImageIcon} label="Imagem" />
      <div className="p-3.5">
        {/* Image slideshow */}
        <div className="relative aspect-square rounded-xl overflow-hidden border border-white/[0.08] mb-3 bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={heroImages[current]}
              alt="Imagem gerada"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {heroImages.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-4" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5 flex items-center justify-between">
            <span className="text-[9px] text-zinc-400 font-medium">Nero Baiana PRO</span>
            <ChevronDown size={9} className="text-zinc-600" />
          </div>
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-1.5 py-1.5">
            <span className="text-[9px] text-zinc-400 font-medium">1:1</span>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-1.5 py-1.5">
            <span className="text-[9px] text-zinc-400 font-medium">2K</span>
          </div>
          <button className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-[0_0_16px_rgba(255,170,0,0.25)] flex-shrink-0">
            <RefreshCw size={12} className="text-black" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </NodeCard>
  );
}

/* ─── Floating particles ─── */
function CanvasParticles() {
  const particles = [
    { left: "5%", top: "15%", size: 3, delay: 0 },
    { left: "92%", top: "25%", size: 2, delay: 1.2 },
    { left: "15%", top: "82%", size: 2.5, delay: 0.8 },
    { left: "88%", top: "75%", size: 2, delay: 2.1 },
    { left: "50%", top: "8%", size: 1.5, delay: 1.5 },
    { left: "70%", top: "90%", size: 2, delay: 0.5 },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/20 pointer-events-none"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export default function FlowShowcase() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed canvas background with dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          backgroundColor: "rgba(6, 6, 10, 1)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <CanvasParticles />

      {/* Content */}
      <div className="relative z-10 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Workflow size={12} />
            Novo
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-4 tracking-tight">
            Gere imagens com o{" "}
            <span className="text-gradient-animated">Flow.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Insira blocos e conecte eles para gerar fotos e imagens com muita
            liberdade criativa.
          </p>
        </motion.div>

        {/* Nodes canvas — centered */}
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
            <ClientNode />
            <DashedConnector index={0} />
            <CharacterNode />
            <DashedConnector index={1} />
            <ImageNode />
          </div>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-5 py-3 md:py-3.5 rounded-xl bg-accent/[0.03] border border-accent/10 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <Workflow size={12} className="text-accent/60" />
              <span className="text-[10px] md:text-xs text-zinc-400 font-medium">
                Conecte blocos e gere imagens com um clique
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-[11px] text-zinc-500">
                <span className="text-accent font-bold">3 blocos</span> · 1 fluxo
              </span>
              <span className="text-[10px] md:text-xs text-accent font-bold uppercase tracking-wider">
                Flow
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
