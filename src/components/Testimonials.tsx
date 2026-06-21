"use client";

/**
 * Testimonials — "Quem usa, não volta atrás."
 *
 * The old horizontal marquee put fixed-width / auto-height screenshots in a row,
 * so every card was a different height and the band looked jagged. This is a
 * vertical "wall of love": real WhatsApp screenshots flow down columns that
 * drift at different speeds. In columns, varied heights read as an intentional
 * masonry — clean, alive, and still fully readable. Hover pauses; reduced-motion
 * shows a static masonry.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { reveal, staggerContainer, inView } from "@/lib/motion";

const feedbackImages = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/feedbacks/feedback-${i + 1}.jpg`,
  alt: `Feedback real de cliente ${i + 1}`,
}));

// Round-robin into 4 self-sufficient columns (each loops its own set).
const COLS = [0, 1, 2, 3].map((c) => feedbackImages.filter((_, i) => i % 4 === c));
const DUR = ["54s", "66s", "48s", "60s"];
const DIR = ["vmarquee--up", "vmarquee--down", "vmarquee--up", "vmarquee--down"];
// Extra columns reveal as the viewport widens (keeps cards readable on mobile).
const VIS = ["flex", "flex", "hidden md:flex", "hidden lg:flex"];

function Card({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <Image
        src={src}
        alt={alt}
        width={260}
        height={440}
        loading="lazy"
        sizes="(max-width: 767px) 45vw, 260px"
        className="block h-auto w-full"
      />
    </div>
  );
}

function MarqueeColumn({
  images,
  dir,
  dur,
  vis,
}: {
  images: typeof feedbackImages;
  dir: string;
  dur: string;
  vis: string;
}) {
  const doubled = [...images, ...images];
  return (
    <div className={`${vis} min-w-0 flex-col`}>
      <div className={`vmarquee ${dir}`} style={{ "--dur": dur } as React.CSSProperties}>
        {doubled.map((img, i) => (
          <Card key={`${img.src}-${i}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="atmo relative overflow-hidden section-pad"
      style={{ background: "#030303" }}
      aria-label="Depoimentos reais"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mx-auto mb-12 max-w-3xl px-4 text-center md:mb-16"
        >
          <motion.span variants={reveal(12)} className="eyebrow mb-6 inline-flex">
            Feedbacks reais
          </motion.span>
          <motion.h2
            variants={reveal(20)}
            className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl"
          >
            Quem usa, <span className="text-gradient-animated">não volta atrás.</span>
          </motion.h2>
          <motion.p variants={reveal(16)} className="mx-auto mt-5 max-w-lg text-base text-txt-secondary md:text-lg">
            Prints reais de quem trocou seis ferramentas pelo Calango. Sem filtro, sem edição.
          </motion.p>
        </motion.div>

        {/* The wall */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="vwall mx-auto grid h-[520px] max-w-6xl grid-cols-2 gap-3 overflow-hidden px-4 md:h-[640px] md:grid-cols-3 lg:h-[720px] lg:grid-cols-4"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 11%, #000 89%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 11%, #000 89%, transparent)",
          }}
        >
          {COLS.map((images, i) => (
            <MarqueeColumn key={i} images={images} dir={DIR[i]} dur={DUR[i]} vis={VIS[i]} />
          ))}
        </motion.div>

        {/* Trust line */}
        <p className="mt-10 px-4 text-center text-[11px] uppercase tracking-[0.2em] text-[rgba(161,161,170,0.5)] md:mt-12">
          feedbacks reais · sem filtro · sem edição
        </p>
      </div>
    </section>
  );
}
