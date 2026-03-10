"use client";

import { motion } from "framer-motion";
import { artes } from "@/data/artes";

const ITEM_W_DESKTOP = 220;
const ITEM_W_MOBILE = 140;
const GAP = 12;

// Duplicate items for seamless loop (3x)
function tripleRow(row: string[]) {
  return [...row, ...row, ...row];
}

export default function ArtesGallery() {
  // Adicione imagens 4:5 em /public/images/artes/ para aparecerem na galeria
  if (artes.length === 0) return null;

  const items = tripleRow(artes);
  const setWidth = artes.length * (ITEM_W_DESKTOP + GAP);
  const setWidthMobile = artes.length * (ITEM_W_MOBILE + GAP);

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-xs text-zinc-400 font-semibold uppercase tracking-[0.2em] mb-4 md:mb-5 inline-block">
            Da comunidade
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-5 tracking-tight">
            Feito com Calango Studio.
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Criativos reais, feitos por quem usa a plataforma.
          </p>
        </motion.div>
      </div>

      {/* Single row - scrolls LEFT */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 scroll-row-left"
          style={{
            "--set-width": `${setWidth}px`,
            "--set-width-mobile": `${setWidthMobile}px`,
          } as React.CSSProperties}
        >
          {items.map((filename, i) => (
            <div key={`a-${i}`} className="flex-shrink-0 w-[140px] md:w-[220px] relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5]">
                <img
                  src={`/images/artes/${filename}`}
                  alt="Feito com Calango Studio"
                  loading="lazy"
                  width={220}
                  height={275}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
