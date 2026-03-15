"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  Camera,
  Smartphone,
  Package,
  Shapes,
  ScanLine,
  FileText,
  Briefcase,
  History,
  PencilRuler,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

/* ─── Gallery images (from /public/images/resultados/) ─── */

const row1 = [
  "/images/resultados/hero_criativo.jpg",
  "/images/resultados/animal_criativo.jpg",
  "/images/resultados/business_criativo.jpg",
  "/images/resultados/car_criativo.jpg",
  "/images/resultados/Kel_foto.jpg",
  "/images/resultados/classic_criativo.jpg",
  "/images/resultados/animal2_criativo.jpg",
  "/images/resultados/vini_ugc.jpg",
  "/images/resultados/hero3_criativo.jpg",
  "/images/resultados/personalizado.jpeg",
];

const row2 = [
  "/images/resultados/animal3_criativo.jpg",
  "/images/resultados/homem_foto.jpeg",
  "/images/resultados/car2_criativo.jpg",
  "/images/resultados/animal4_criativo.jpg",
  "/images/resultados/book_manual.jpg",
  "/images/resultados/business2_criativo.jpg",
  "/images/resultados/vini2_ugc.jpg",
  "/images/resultados/animal5_criativo.jpg",
  "/images/resultados/raquel_foto_1.png",
  "/images/resultados/space_manual.jpeg",
];

const row3 = [
  "/images/resultados/animal6_criativo.jpg",
  "/images/resultados/personalizado_manual.jpg",
  "/images/resultados/animal7_criativo.jpg",
  "/images/resultados/vini3_ugc.jpg",
  "/images/resultados/animal8_criativo.jpg",
  "/images/resultados/raquel_foto_2.png",
  "/images/resultados/animal9_criativo.jpg",
  "/images/resultados/adam_manual.jpeg",
  "/images/resultados/animal10_criativo.jpg",
  "/images/resultados/personalizado2_manual.jpg",
];

/* ─── Dashboard tools list ─── */

const dashboardTools = [
  { name: "Imagem Criativa", icon: Palette, desc: "+30 estilos prontos", color: "from-rose-500 to-pink-600" },
  { name: "Estúdio de Foto", icon: Camera, desc: "Sessão de fotos com IA", color: "from-cyan-400 to-blue-500" },
  { name: "UGC Build", icon: Smartphone, desc: "Fotos ultra-realistas", color: "from-orange-500 to-amber-600" },
  { name: "Mockup Produto", icon: Package, desc: "Cenários automáticos", color: "from-emerald-400 to-teal-700" },
  { name: "Assets 3D", icon: Shapes, desc: "PNG transparente", color: "from-red-500 to-rose-700" },
  { name: "Remix Layout", icon: ScanLine, desc: "Replique criativos", color: "from-purple-500 to-fuchsia-700" },
  { name: "CopyMaker", icon: FileText, desc: "Copies com contexto", color: "from-green-400 to-emerald-700" },
  { name: "Consultor de Perfil", icon: Briefcase, desc: "Análise completa", color: "from-blue-400 to-indigo-600" },
  { name: "Restaurador PRO", icon: History, desc: "Upscale e restauração", color: "from-amber-400 to-amber-700" },
  { name: "Modo Manual", icon: PencilRuler, desc: "Edição precisa", color: "from-lime-400 to-green-600" },
  { name: "Criação Livre", icon: Sparkles, desc: "Modo experimental", color: "from-yellow-400 to-orange-600" },
  { name: "Meus Clientes", icon: Users, desc: "Gestão completa", color: "from-sky-400 to-cyan-700" },
];

/* ─── Looping gallery row ─── */

function GalleryRow({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div
        className={direction === "left" ? "scroll-row-left" : "scroll-row-right"}
        style={{
          display: "flex",
          gap: "12px",
          width: "max-content",
          "--set-width": `${images.length * (180 + 12)}px`,
          "--set-width-mobile": `${images.length * (130 + 10)}px`,
        } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-[130px] h-[170px] md:w-[180px] md:h-[240px] rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 border border-white/[0.06]"
          >
            <Image
              src={src}
              alt="Imagem gerada no Calango Studio"
              fill
              className="object-cover"
              sizes="180px"
              loading="lazy"
              quality={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsShowcase() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ─── Background: looping gallery rows ─── */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 md:gap-4 pointer-events-none">
        <GalleryRow images={row1} direction="left" />
        <GalleryRow images={row2} direction="right" />
        <GalleryRow images={row3} direction="left" />
      </div>

      {/* Dark overlay to make gallery bg subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/85 to-bg-primary pointer-events-none" />
      {/* Extra vignette on sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary pointer-events-none" />

      {/* ─── Glassmorphism dashboard overlay ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Wand2 size={12} />
            12 ferramentas integradas
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Tudo isso, direto do{" "}
            <span className="text-gradient-animated">seu painel.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Sem aba extra. Sem assinatura duplicada. Cada ferramenta existe porque faz parte do dia a dia real de quem atende clientes.
          </p>
        </motion.div>

        {/* Glass card with tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-[2px] rounded-[28px] md:rounded-[36px] bg-gradient-to-br from-accent/20 via-transparent to-accent-end/15 opacity-60 blur-[1px]" />

          <div
            className="relative rounded-[26px] md:rounded-[34px] border border-white/[0.12] overflow-hidden"
            style={{
              background: "rgba(8, 8, 10, 0.75)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 30px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Top accent bar */}
            <div className="h-1 md:h-1.5 bg-gradient-to-r from-accent via-accent-end to-accent opacity-80" />

            {/* Browser-style header */}
            <div className="flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4 md:mx-8 h-7 md:h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/ferramentas
              </div>
            </div>

            <div className="p-4 md:p-8">
              {/* Section label */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Wand2 size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.18em] font-bold">Estúdio de criação</p>
                  <p className="text-xs md:text-sm font-bold text-white">Suas ferramentas</p>
                </div>
              </div>

              {/* Tools grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {dashboardTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.3 }}
                    className="group flex items-center gap-2.5 md:gap-3 p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <tool.icon size={14} className="text-white md:hidden" strokeWidth={2} />
                      <tool.icon size={16} className="text-white hidden md:block" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-xs font-bold text-white truncate">{tool.name}</p>
                      <p className="text-[8px] md:text-[10px] text-zinc-500 truncate">{tool.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stat bar */}
              <div className="mt-4 md:mt-6 flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-accent/[0.04] border border-accent/10">
                <div className="flex items-center gap-2">
                  <Sparkles size={12} className="text-accent" />
                  <span className="text-[9px] md:text-[11px] text-zinc-400 font-semibold">
                    Todas incluídas no seu plano
                  </span>
                </div>
                <span className="text-[9px] md:text-[11px] text-accent font-bold uppercase tracking-wider">
                  12 ferramentas
                </span>
              </div>
            </div>
          </div>

          {/* Bottom glow reflection */}
          <div className="absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2 w-3/4 h-16 md:h-24 bg-accent/10 blur-[40px] md:blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
