"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PencilRuler,
  MousePointer2,
  Hand,
  Type,
  Square,
  Circle,
  Brush,
  Eraser,
  Pipette,
  PaintBucket,
  Scissors,
  ImageIcon,
  Sparkles,
  Layers,
  Eye,
  Lock,
  Download,
  Check,
  Plus,
  Minus,
} from "lucide-react";

/* ─── Tool rail (mesmas ferramentas do editor real) ─── */
const tools = [
  { icon: MousePointer2, label: "Selecionar", key: "V" },
  { icon: Hand, label: "Mover", key: "H" },
  { icon: Type, label: "Texto", key: "T" },
  { icon: Square, label: "Retângulo", key: "R" },
  { icon: Circle, label: "Elipse", key: "O" },
  { icon: Brush, label: "Pincel", key: "B" },
  { icon: Eraser, label: "Borracha", key: "E" },
  { icon: Pipette, label: "Conta-gotas", key: "I" },
  { icon: PaintBucket, label: "Lata de tinta", key: "G" },
  { icon: Scissors, label: "Recorte IA", key: "" },
];

/* ─── Camadas da arte (frente para trás) + posição na prancheta ─── */
const layers = [
  { id: "headline", name: "Headline", icon: Type, color: "#f59e0b", box: { top: "50%", left: "6%", width: "84%", height: "36%" } },
  { id: "foto", name: "Foto", icon: ImageIcon, color: "#a78bfa", box: { top: "1.5%", left: "1.5%", width: "97%", height: "97%" } },
  { id: "fundo", name: "Fundo", icon: Square, color: "#38bdf8", box: { top: "1.5%", left: "1.5%", width: "97%", height: "97%" } },
];

/* ─── Trilho de ferramentas (esquerda) ─── */
function ToolRail() {
  return (
    <div className="flex flex-col items-center gap-1 px-1.5 py-2.5 border-r border-white/[0.06] bg-black/30">
      {tools.map((t, i) => {
        const active = i === 0;
        const divider = t.key === "" ;
        return (
          <div key={t.label} className="contents">
            {divider && <div className="w-5 h-px bg-white/10 my-1" />}
            <div
              className={`relative group w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-colors ${
                active
                  ? "bg-accent text-black"
                  : "text-zinc-500 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <t.icon size={14} strokeWidth={2} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Caixa de seleção que pula entre as camadas ─── */
function SelectionBox({
  box,
  dragging = false,
}: {
  box: { top: string; left: string; width: string; height: string };
  dragging?: boolean;
}) {
  return (
    <div
      className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-30"
      style={box}
    >
      <div className="absolute inset-0 border border-accent rounded-[3px]" />
      {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1"].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos} w-2 h-2 rounded-[2px] bg-white border border-accent shadow`}
        />
      ))}
      {/* Aresta inferior direita: anima como se estivesse sendo arrastada */}
      <motion.div
        className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-[2px] bg-accent border border-white shadow"
        animate={dragging ? { x: [0, 5, 0], y: [0, 6, 0] } : { x: 0, y: 0 }}
        transition={dragging ? { duration: 9, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
      />
    </div>
  );
}

/* ─── Prancheta (canvas) com a arte sendo montada ─── */
function Canvas({ active }: { active: number }) {
  const activeLayer = layers[active];
  const isFoto = activeLayer.id === "foto";
  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:18px_18px]">
      <div
        className="relative rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-black"
        style={{ width: "min(66%, 250px)", aspectRatio: "4 / 5" }}
      >
        {/* Foto cobrindo 100% do fundo, crescendo devagar */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
          animate={{ scale: [1, 1.09, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/resultados/business_criativo.jpg"
            alt="Foto cobrindo a prancheta do Studio"
            fill
            sizes="250px"
            className="object-cover"
          />
        </motion.div>

        {/* Fade entre a headline e o fundo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,8,14,0.95) 3%, rgba(6,8,14,0.62) 28%, rgba(6,8,14,0.04) 52%, rgba(6,8,14,0.28) 100%)",
          }}
        />

        {/* Legenda no topo */}
        <div className="absolute top-[6%] left-0 right-0 text-center">
          <span className="text-[7px] md:text-[8px] tracking-[0.34em] text-white/70 font-semibold uppercase">
            Advocacia Andrade
          </span>
        </div>

        {/* Headline em Cinzel */}
        <div className="absolute left-[7%] right-[7%] bottom-[15%]">
          <span className="block text-[7px] md:text-[8px] tracking-[0.28em] text-white/65 uppercase mb-1.5">
            Você merece
          </span>
          <h3 className="leading-[1] text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            <span className="block text-[19px] md:text-[23px] font-bold tracking-[0.04em]">
              ADVOCACIA
            </span>
            <span className="block text-[19px] md:text-[23px] font-bold tracking-[0.04em] text-accent">
              QUE RESOLVE
            </span>
          </h3>
        </div>

        {/* Arraste pro lado */}
        <div className="absolute bottom-[5%] left-0 right-0 flex items-center justify-center gap-1.5">
          <span className="text-[6.5px] md:text-[7.5px] tracking-[0.3em] text-white/55 uppercase">
            Arraste pro lado
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/55 text-[9px] leading-none"
          >
            ›
          </motion.span>
        </div>

        {/* Caixa de seleção animada (aresta sendo arrastada quando a Foto está ativa) */}
        <SelectionBox box={activeLayer.box} dragging={isFoto} />
      </div>
    </div>
  );
}

/* ─── Painel direito: abas + lista de camadas ─── */
function RightPanel({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="hidden md:flex w-[160px] xl:w-[180px] flex-col border-l border-white/[0.06] bg-black/30">
      {/* Abas */}
      <div className="flex items-center gap-1 px-2 py-2 border-b border-white/[0.06]">
        <span className="flex-1 text-center text-[10px] font-semibold text-zinc-500 py-1 rounded-md">
          Ajustes
        </span>
        <span className="flex-1 text-center text-[10px] font-bold text-white py-1 rounded-md bg-white/[0.06] flex items-center justify-center gap-1">
          <Layers size={10} /> Camadas
        </span>
      </div>

      {/* Lista de camadas */}
      <div className="p-1.5 space-y-1 flex-1">
        {layers.map((l, i) => {
          const isActive = i === active;
          return (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md border transition-colors text-left ${
                isActive
                  ? "bg-accent/10 border-accent/30"
                  : "bg-white/[0.02] border-transparent hover:bg-white/[0.04]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
              <l.icon size={11} className={isActive ? "text-white" : "text-zinc-500"} />
              <span className={`flex-1 text-[10px] font-medium ${isActive ? "text-white" : "text-zinc-400"}`}>
                {l.name}
              </span>
              <Eye size={10} className="text-zinc-600" />
              {l.id === "fundo" && <Lock size={9} className="text-zinc-600" />}
            </button>
          );
        })}
      </div>

      {/* Efeitos (rodapé do painel) */}
      <div className="px-2 py-2 border-t border-white/[0.06]">
        <p className="text-[8px] uppercase tracking-[0.15em] font-bold text-zinc-600 mb-1.5">Efeitos</p>
        <div className="flex flex-wrap gap-1">
          {["Sombra", "Traçado", "Brilho"].map((e) => (
            <span key={e} className="text-[8px] text-zinc-400 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Badge de salvamento automático (anima Salvando -> Salvo) ─── */
function SaveBadge() {
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setSaving(true);
      setTimeout(() => setSaving(false), 1100);
    }, 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center gap-1.5 text-[10px] font-medium">
      {saving ? (
        <>
          <motion.span
            className="w-2.5 h-2.5 rounded-full border-2 border-accent border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-zinc-400">Salvando...</span>
        </>
      ) : (
        <>
          <Check size={12} className="text-emerald-400" />
          <span className="text-zinc-400">Salvo</span>
        </>
      )}
    </div>
  );
}

/* ─── Floating particles ─── */
function CanvasParticles() {
  const particles = [
    { left: "6%", top: "18%", size: 3, delay: 0 },
    { left: "93%", top: "22%", size: 2, delay: 1.2 },
    { left: "14%", top: "80%", size: 2.5, delay: 0.8 },
    { left: "88%", top: "78%", size: 2, delay: 2.1 },
    { left: "50%", top: "10%", size: 1.5, delay: 1.5 },
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

export default function StudioShowcase() {
  const [active, setActive] = useState(0);

  // Cicla a camada selecionada para dar vida ao editor
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % layers.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Fundo com grade de pontos */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          backgroundColor: "rgba(6, 6, 10, 1)",
        }}
      />

      {/* Brilhos de ambiente */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <CanvasParticles />

      <div className="relative z-10 py-20 md:py-28 lg:py-32">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
        >
          <span className="badge-pill mb-6 inline-flex">
            <PencilRuler size={12} />
            Studio
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-4 tracking-tight">
            Crie suas artes no{" "}
            <span className="text-gradient-animated">Studio.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Um editor visual com camadas, texto, efeitos e recorte por IA. Monte posts e carrosséis do seu
            jeito, tudo dentro do navegador.
          </p>
        </motion.div>

        {/* Janela do editor */}
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl border border-white/[0.10] overflow-hidden"
            style={{
              background: "rgba(12, 12, 16, 0.95)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Barra superior do editor */}
            <div className="flex items-center justify-between gap-2 px-3 md:px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 min-w-0">
                <PencilRuler size={14} className="text-accent flex-shrink-0" />
                <span className="text-[11px] md:text-xs font-semibold text-white truncate">
                  Lançamento
                </span>
                <span className="hidden sm:inline text-[10px] text-zinc-500 truncate">
                  Advocacia Andrade
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="hidden sm:inline text-[10px] text-zinc-400 px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  Retrato 4:5
                </span>
                <SaveBadge />
                <button className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold text-black bg-accent px-2.5 md:px-3 py-1.5 rounded-lg shadow-[0_0_16px_rgba(255,170,0,0.25)]">
                  <Download size={12} strokeWidth={2.5} />
                  <span className="hidden sm:inline">Exportar</span>
                </button>
              </div>
            </div>

            {/* Corpo do editor */}
            <div className="flex h-[300px] md:h-[360px]">
              <ToolRail />
              <Canvas active={active} />
              <RightPanel active={active} setActive={setActive} />
            </div>

            {/* Rodapé: zoom + carrossel */}
            <div className="flex items-center justify-between gap-3 px-3 md:px-4 py-2 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-zinc-500">
                <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <Minus size={11} />
                </div>
                <span className="text-[10px] font-semibold text-zinc-400 w-9 text-center">100%</span>
                <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <Plus size={11} />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`w-6 h-7 md:w-7 md:h-8 rounded-[4px] border text-[8px] flex items-center justify-center font-semibold ${
                      n === 1
                        ? "bg-accent/15 border-accent/40 text-accent"
                        : "bg-white/[0.03] border-white/[0.06] text-zinc-500"
                    }`}
                  >
                    {n}
                  </div>
                ))}
                <div className="w-6 h-7 md:w-7 md:h-8 rounded-[4px] border border-dashed border-white/[0.12] text-zinc-600 flex items-center justify-center">
                  <Plus size={11} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Barra de informação */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-5 py-3 md:py-3.5 rounded-xl bg-accent/[0.03] border border-accent/10 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-accent/60" />
              <span className="text-[10px] md:text-xs text-zinc-400 font-medium">
                Camadas, texto, efeitos e recorte por IA num editor só
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-[11px] text-zinc-500">
                <span className="text-accent font-bold">3 camadas</span> · Retrato 4:5
              </span>
              <span className="text-[10px] md:text-xs text-accent font-bold uppercase tracking-wider">
                Studio
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
