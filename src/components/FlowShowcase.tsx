"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Users,
  User,
  ImageIcon,
  Star,
  Upload,
  GalleryHorizontal,
  ChevronDown,
  RefreshCw,
  ArrowLeft,
  Plus,
} from "lucide-react";

/* ─── Dashed SVG connector between nodes ─── */
function DashedConnector({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
      className="hidden lg:flex items-center flex-shrink-0 w-[60px] xl:w-[80px] relative"
    >
      {/* Dashed line */}
      <svg
        className="w-full h-[2px] overflow-visible"
        viewBox="0 0 80 2"
        preserveAspectRatio="none"
      >
        <line
          x1="8"
          y1="1"
          x2="72"
          y2="1"
          stroke="rgba(255,170,0,0.35)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
      </svg>
      {/* Left dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
      {/* Right dot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
    </motion.div>
  );
}

/* ─── CLIENT node ─── */
function ClientNode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative w-full lg:w-[260px] xl:w-[280px] flex-shrink-0"
    >
      {/* Connection port right */}
      <div className="hidden lg:block absolute -right-[6px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-accent/40 bg-accent/15 z-10" />

      <div
        className="rounded-2xl border border-white/[0.10] overflow-hidden"
        style={{
          background: "rgba(14, 14, 18, 0.9)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5 mb-2">
            <Users size={10} className="text-zinc-500" />
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-500">
              Cliente
            </span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2">
            <span className="text-xs font-medium text-white">
              Advocacia Andrade
            </span>
            <ChevronDown size={12} className="text-zinc-500" />
          </div>
        </div>

        {/* Client info */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-xs font-bold text-white">Advocacia Andrade</p>
              <p className="text-[10px] text-zinc-500">Advocacia</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-3 text-center">
            <div className="bg-white/[0.03] rounded-lg py-1.5">
              <p className="text-xs font-bold text-white">9</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg py-1.5">
              <p className="text-xs font-bold text-white">1</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg py-1.5">
              <p className="text-xs font-bold text-white">0</p>
            </div>
          </div>

          {/* Image grid preview */}
          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-white/[0.04]"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PERSONAGEM node ─── */
function CharacterNode() {
  const angles = [
    { label: "Frontal", active: true },
    { label: "Direta", active: false },
    { label: "Esquerda", active: false },
    { label: "Clone", active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="relative w-full lg:w-[260px] xl:w-[280px] flex-shrink-0"
    >
      {/* Connection ports */}
      <div className="hidden lg:block absolute -left-[6px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-accent/40 bg-accent/15 z-10" />
      <div className="hidden lg:block absolute -right-[6px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-accent/40 bg-accent/15 z-10" />

      <div
        className="rounded-2xl border border-white/[0.10] overflow-hidden"
        style={{
          background: "rgba(14, 14, 18, 0.9)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5 mb-2">
            <User size={10} className="text-zinc-500" />
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-500">
              Personagem
            </span>
          </div>
          {/* Upload / Galeria tabs */}
          <div className="flex gap-1 mb-2">
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] text-zinc-500 bg-white/[0.03] border border-white/[0.06]">
              <Upload size={9} />
              Upload
            </button>
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] text-zinc-500 bg-white/[0.03] border border-white/[0.06]">
              <GalleryHorizontal size={9} />
              Galeria
            </button>
          </div>
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2">
            <span className="text-xs font-medium text-white">Filipe</span>
            <Star size={10} className="text-accent" fill="currentColor" />
          </div>
        </div>

        {/* Angle options */}
        <div className="px-4 py-3">
          <p className="text-[8px] uppercase tracking-[0.15em] font-bold text-zinc-600 mb-2">
            Ângulo do rosto
          </p>
          <div className="flex gap-1.5 mb-3">
            {angles.map((a) => (
              <div
                key={a.label}
                className={`flex-1 py-1.5 rounded-md text-center text-[9px] font-semibold ${
                  a.active
                    ? "bg-accent text-black"
                    : "bg-white/[0.04] border border-white/[0.06] text-zinc-500"
                }`}
              >
                {a.label}
              </div>
            ))}
          </div>

          {/* Input fields */}
          <div className="space-y-2">
            {["Expressão...", "Pose...", "Ação..."].map((placeholder) => (
              <div
                key={placeholder}
                className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2"
              >
                <span className="text-[10px] text-zinc-600">{placeholder}</span>
              </div>
            ))}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2">
              <span className="text-[10px] text-zinc-600">
                Detalhes adicionais...
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── IMAGEM node ─── */
function ImageNode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="relative w-full lg:w-[260px] xl:w-[280px] flex-shrink-0"
    >
      {/* Connection port left */}
      <div className="hidden lg:block absolute -left-[6px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full border-2 border-accent/40 bg-accent/15 z-10" />

      <div
        className="rounded-2xl border border-white/[0.10] overflow-hidden"
        style={{
          background: "rgba(14, 14, 18, 0.9)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <ImageIcon size={10} className="text-zinc-500" />
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-500">
              Imagem
            </span>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="px-4 py-4">
          <div className="aspect-square rounded-xl bg-black/60 border border-white/[0.06] flex flex-col items-center justify-center mb-4">
            <ImageIcon size={24} className="text-zinc-700 mb-2" />
            <span className="text-[10px] text-zinc-600">
              A imagem aparecerá aqui
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5 flex items-center justify-between">
              <span className="text-[10px] text-zinc-400 font-medium">
                Nero Baiana PRO
              </span>
              <ChevronDown size={10} className="text-zinc-600" />
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5">
              <span className="text-[10px] text-zinc-400 font-medium">1:1</span>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5">
              <span className="text-[10px] text-zinc-400 font-medium">2K</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(255,170,0,0.3)]"
            >
              <RefreshCw size={14} className="text-black" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile vertical connectors ─── */
function MobileConnector({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
      className="flex lg:hidden justify-center py-2"
    >
      <div className="relative h-10 flex flex-col items-center">
        <div className="w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
        <svg className="flex-1 w-[2px]" viewBox="0 0 2 30" preserveAspectRatio="none">
          <line x1="1" y1="0" x2="1" y2="30" stroke="rgba(255,170,0,0.35)" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
        <div className="w-[10px] h-[10px] rounded-full border-2 border-accent/50 bg-accent/20" />
      </div>
    </motion.div>
  );
}

/* ─── Sidebar icons (decorative) ─── */
function FlowSidebar() {
  const icons = [Plus, Users, ImageIcon, Workflow, Star, GalleryHorizontal];
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="hidden xl:flex flex-col items-center gap-3 py-6 px-2"
    >
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.06] transition-colors cursor-default"
        >
          <Icon size={14} className="text-zinc-600" />
        </div>
      ))}
    </motion.div>
  );
}

/* ─── Floating particles for canvas feel ─── */
function CanvasParticles() {
  const particles = [
    { left: "5%", top: "15%", size: 3, delay: 0 },
    { left: "92%", top: "25%", size: 2, delay: 1.2 },
    { left: "15%", top: "80%", size: 2.5, delay: 0.8 },
    { left: "88%", top: "75%", size: 2, delay: 2.1 },
    { left: "50%", top: "10%", size: 1.5, delay: 1.5 },
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
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default function FlowShowcase() {
  return (
    <section className="relative overflow-hidden">
      {/* ─── Full-bleed canvas background ─── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)
          `,
          backgroundSize: "32px 32px",
          backgroundColor: "rgba(6, 6, 10, 1)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <CanvasParticles />

      {/* ─── Content ─── */}
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

        {/* ─── Canvas area (full width) ─── */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center gap-3 mb-6 md:mb-8 px-2"
          >
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-400 hover:bg-white/[0.06] transition-colors">
              <ArrowLeft size={12} />
              Novo
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-xs text-accent font-semibold hover:bg-accent/15 transition-colors">
              <Star size={10} fill="currentColor" />
              Salvar
            </button>
          </motion.div>

          {/* ─── Nodes canvas ─── */}
          <div className="flex items-start gap-0">
            {/* Sidebar */}
            <FlowSidebar />

            {/* Main canvas area */}
            <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 py-4 md:py-8 lg:py-12 px-2 md:px-4">
              {/* Client Node */}
              <ClientNode />

              {/* Connector 1 */}
              <DashedConnector index={0} />
              <MobileConnector index={0} />

              {/* Character Node */}
              <CharacterNode />

              {/* Connector 2 */}
              <DashedConnector index={1} />
              <MobileConnector index={1} />

              {/* Image Node */}
              <ImageNode />
            </div>
          </div>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-5 py-3 md:py-4 rounded-xl bg-accent/[0.03] border border-accent/10 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <Workflow size={12} className="text-accent/60" />
              <span className="text-[10px] md:text-xs text-zinc-400 font-medium">
                Conecte blocos e gere imagens com um clique
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-[11px] text-zinc-500">
                <span className="text-accent font-bold">3 blocos</span> · 1
                fluxo
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
