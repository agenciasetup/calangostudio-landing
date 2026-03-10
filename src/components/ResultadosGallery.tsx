"use client";

import { motion } from "framer-motion";

interface ResultadoItem {
  filename: string;
  label: string;
}

const ITEM_W_DESKTOP = 280;
const ITEM_W_MOBILE = 180;
const GAP = 14;

// Duplicate items 2x for seamless loop (fewer DOM nodes)
function dupeRow(row: ResultadoItem[]) {
  return [...row, ...row];
}

export default function ResultadosGallery({ items }: { items: ResultadoItem[] }) {
  if (items.length === 0) return null;

  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const row1Items = dupeRow(row1);
  const row2Items = dupeRow(row2);

  const row1SetWidth = row1.length * (ITEM_W_DESKTOP + GAP);
  const row2SetWidth = row2.length * (ITEM_W_DESKTOP + GAP);
  const row1SetWidthMobile = row1.length * (ITEM_W_MOBILE + GAP);
  const row2SetWidthMobile = row2.length * (ITEM_W_MOBILE + GAP);

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
            Gerado no Calango Studio
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-5 tracking-tight">
            Resultados reais.
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Imagens geradas por designers e social media que usam a plataforma todos os dias.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - scrolls LEFT */}
      <div className="overflow-hidden mb-3.5">
        <div
          className="flex scroll-row-left"
          style={{
            gap: `${GAP}px`,
            "--set-width": `${row1SetWidth}px`,
            "--set-width-mobile": `${row1SetWidthMobile}px`,
          } as React.CSSProperties}
        >
          {row1Items.map((item, i) => (
            <ResultCard key={`r1-${i}`} filename={item.filename} label={item.label} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls RIGHT */}
      <div className="overflow-hidden">
        <div
          className="flex scroll-row-right"
          style={{
            gap: `${GAP}px`,
            "--set-width": `${row2SetWidth}px`,
            "--set-width-mobile": `${row2SetWidthMobile}px`,
          } as React.CSSProperties}
        >
          {row2Items.map((item, i) => (
            <ResultCard key={`r2-${i}`} filename={item.filename} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ filename, label }: { filename: string; label: string }) {
  return (
    <div className="flex-shrink-0 w-[180px] md:w-[280px] relative rounded-2xl overflow-hidden">
      <div className="absolute top-2 left-2 z-10">
        <span className="text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/70 text-zinc-200 backdrop-blur-sm border border-white/10">
          {label}
        </span>
      </div>
      <div className="aspect-[4/5]">
        <img
          src={`/images/resultados/${filename}`}
          alt={`Resultado ${label}`}
          loading="lazy"
          decoding="async"
          width={280}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
