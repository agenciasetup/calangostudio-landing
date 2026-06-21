"use client";

/**
 * ResultsGallery — Premium "Resultados" section for the Calango Studio landing.
 *
 * Layout: two-tab filter (Criativos / Sessão de Fotos) with a masonry-style
 * variable-height grid. On hover each card lifts + zooms and a glass overlay
 * fades in with the function label ("Criar Imagem" / "Sessão de Fotos") and a
 * "gerado na plataforma" tag. Scroll-revealed with staggered framer-motion.
 * Fully keyboard-focusable. Respects prefers-reduced-motion.
 */

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Sparkles, Camera } from "lucide-react";

// ─── Image data ────────────────────────────────────────────────────────────────

type GalleryItem = {
  src: string;
  alt: string;
  /** visual aspect ratio expressed as [w, h] */
  ratio: [number, number];
  /** overlay label shown on hover */
  fn: string;
};

/** Creative AI images – confirmed in public/images/resultados/ */
const CRIATIVOS: GalleryItem[] = [
  { src: "/images/resultados/hero_criativo.jpg",      alt: "Criativo hero",        ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/business_criativo.jpg",  alt: "Criativo business",    ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/car_criativo.jpg",       alt: "Criativo car",         ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/animal_criativo.jpg",    alt: "Criativo animal",      ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/classic_criativo.jpg",   alt: "Criativo clássico",    ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/hero3_criativo.jpg",     alt: "Criativo hero 3",      ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/car2_criativo.jpg",      alt: "Criativo car 2",       ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/business2_criativo.jpg", alt: "Criativo business 2",  ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/animal2_criativo.jpg",   alt: "Criativo animal 2",    ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/animal3_criativo.jpg",   alt: "Criativo animal 3",    ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/animal4_criativo.jpg",   alt: "Criativo animal 4",    ratio: [4, 5], fn: "Criar Imagem" },
  { src: "/images/resultados/animal5_criativo.jpg",   alt: "Criativo animal 5",    ratio: [4, 5], fn: "Criar Imagem" },
];

/** Photo session images – Pelé set (public/images/sessao/) + resultados/ fotos */
const SESSAO: GalleryItem[] = [
  { src: "/images/sessao/pele-1.webp",               alt: "Sessão Pelé 1",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/sessao/pele-2.webp",               alt: "Sessão Pelé 2",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/sessao/pele-3.webp",               alt: "Sessão Pelé 3",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/sessao/pele-4.webp",               alt: "Sessão Pelé 4",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/resultados/homem_foto.jpeg",        alt: "Foto homem",           ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/resultados/raquel_foto_1.png",      alt: "Raquel foto 1",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/resultados/raquel_foto_2.png",      alt: "Raquel foto 2",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/resultados/raquel_foto_3.png",      alt: "Raquel foto 3",        ratio: [3, 4],  fn: "Sessão de Fotos" },
  { src: "/images/resultados/Kel_foto.jpg",           alt: "Kel foto",             ratio: [3, 4],  fn: "Sessão de Fotos" },
];

// ─── Tabs definition ───────────────────────────────────────────────────────────

type Tab = "criativos" | "sessao";

const TABS: { id: Tab; label: string; Icon: typeof Sparkles }[] = [
  { id: "criativos", label: "Criativos",       Icon: Sparkles },
  { id: "sessao",    label: "Sessão de fotos", Icon: Camera  },
];

// ─── GalleryCard ──────────────────────────────────────────────────────────────

function GalleryCard({
  item,
  index,
  reduced,
}: {
  item: GalleryItem;
  index: number;
  reduced: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const showOverlay = hovered || focused;

  const cardVariants = {
    hidden:  { opacity: 0, y: 22, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: {
        duration: 0.42,
        delay: reduced ? 0 : Math.min(index * 0.065, 0.55),
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={()    => setFocused(true)}
      onBlur={()     => setFocused(false)}
      className="relative overflow-hidden rounded-2xl cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#ffaa00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      animate={
        reduced
          ? undefined
          : {
              y:        showOverlay ? -6  : 0,
              scale:    showOverlay ? 1.03 : 1,
              boxShadow: showOverlay
                ? "0 28px 64px rgba(0,0,0,0.65), 0 0 30px rgba(255,170,0,0.10)"
                : "0 8px 30px rgba(0,0,0,0.40)",
            }
      }
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${item.ratio[0]} / ${item.ratio[1]}` }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 47vw, (max-width: 1024px) 30vw, 22vw"
          className="object-cover"
          style={{
            transition: reduced ? "none" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
            transform: !reduced && showOverlay ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Permanent subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(3,3,3,0.68) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />

        {/* Hover overlay */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 flex flex-col justify-between p-3"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,170,0,0.10) 0%, rgba(3,3,3,0.72) 100%)",
                backdropFilter: "blur(1px)",
              }}
            >
              {/* Top tag */}
              <div className="flex items-center gap-1.5 self-start rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "#ffaa00" }}
                />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/90">
                  gerado na plataforma
                </span>
              </div>

              {/* Bottom function label */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#ffaa00] px-3 py-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0b0b0b]">
                    {item.fn}
                  </span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── MasonryGrid ──────────────────────────────────────────────────────────────
/**
 * CSS Columns-based masonry — no JS height calculation needed, works in Next.js
 * with SSR. Column count adapts per breakpoint.
 */
function MasonryGrid({ items, reduced }: { items: GalleryItem[]; reduced: boolean }) {
  const containerVariants = {
    hidden:  {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.055 } },
  };

  return (
    <motion.div
      key={items.map((i) => i.src).join(",")}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="columns-2 sm:columns-3 lg:columns-4 gap-3"
      style={{ columnFill: "balance" }}
    >
      {items.map((item, i) => (
        <div key={item.src} className="mb-3 break-inside-avoid">
          <GalleryCard item={item} index={i} reduced={reduced} />
        </div>
      ))}
    </motion.div>
  );
}

// ─── TabBar ───────────────────────────────────────────────────────────────────

function TabBar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (t: Tab) => void;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-2xl p-1"
      role="tablist"
      aria-label="Filtrar resultados"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {TABS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaa00] focus-visible:ring-offset-1 focus-visible:ring-offset-[#030303] ${
              isActive
                ? "text-[#0b0b0b]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
            style={{ position: "relative", zIndex: 1 }}
          >
            {isActive && (
              <motion.span
                layoutId="tab-bg"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #ffaa00 0%, #ff7b47 100%)",
                  boxShadow: "0 0 20px rgba(255,170,0,0.25)",
                  zIndex: -1,
                }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              />
            )}
            <Icon size={13} strokeWidth={2.5} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ─── ResultsGallery (export default) ─────────────────────────────────────────

export default function ResultsGallery() {
  const reduced = useReducedMotion() ?? false;
  const [activeTab, setActiveTab] = useState<Tab>("criativos");

  const items = activeTab === "criativos" ? CRIATIVOS : SESSAO;

  return (
    <section className="atmo relative overflow-hidden section-pad px-4 sm:px-6">
      {/* Section divider */}
      <div className="fade-seam max-w-5xl mx-auto mb-16 md:mb-20" />

      {/* Ambient glow — neutral/cool, very subtle (let the images carry the color) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.05), rgba(255,255,255,0.02) 50%, transparent 72%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          {/* Eyebrow */}
          <div className="eyebrow mb-6 inline-flex">
            <Sparkles size={11} />
            Resultados reais
          </div>

          {/* Headline */}
          <h2 className="headline-tight font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-5">
            O que sai{" "}
            <span className="text-gradient-animated">daqui.</span>
          </h2>

          {/* Sub */}
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Criativos e sessões de foto gerados no Calango Studio com{" "}
            <span className="text-txt-primary font-medium">
              o contexto real de cada cliente.
            </span>
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10 md:mb-12"
        >
          <TabBar active={activeTab} onChange={setActiveTab} />
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          <MasonryGrid items={items} reduced={reduced} />
        </motion.div>

        {/* Footer proof line */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <div
            className="flex items-center gap-2.5 rounded-xl px-5 py-3"
            style={{
              background: "rgba(255,170,0,0.04)",
              border: "1px solid rgba(255,170,0,0.10)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full flex-shrink-0"
              style={{ background: "#ffaa00", boxShadow: "0 0 8px rgba(255,170,0,0.6)" }}
            />
            <span className="text-xs md:text-sm text-zinc-400 font-medium">
              Todos gerados dentro da plataforma, com os dados do cliente
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
