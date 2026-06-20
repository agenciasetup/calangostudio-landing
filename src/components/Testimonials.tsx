"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

// All 19 real feedback screenshots from public/images/feedbacks/
const feedbackImages = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/feedbacks/feedback-${i + 1}.jpg`,
  alt: `Feedback real de cliente ${i + 1}`,
}));

// Row 1: images 1–10 → scrolls left
// Row 2: images 10–19 → scrolls right
const row1 = feedbackImages.slice(0, 10);
const row2 = feedbackImages.slice(10, 19);

// Card widths and gaps mirror what's in globals.css
const CARD_W_DESKTOP = 240;
const CARD_W_MOBILE = 200;
const GAP_DESKTOP = 16;
const GAP_MOBILE = 12;

function computeSetWidth(count: number, cardW: number, gap: number): number {
  // (cardW + gap) × count — the width of one full set before duplication
  return (cardW + gap) * count;
}

interface FeedbackCardProps {
  src: string;
  alt: string;
}

function FeedbackCard({ src, alt }: FeedbackCardProps) {
  return (
    <div
      className="feedback-card"
      tabIndex={0}
      role="img"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={240}
        height={400}
        loading="lazy"
        sizes="(max-width: 767px) 200px, 240px"
        className="feedback-card__img"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

interface MarqueeRowProps {
  images: typeof feedbackImages;
  direction: "left" | "right";
}

function MarqueeRow({ images, direction }: MarqueeRowProps) {
  // Duplicate the set for a seamless infinite loop
  const doubled = [...images, ...images];
  const cls =
    direction === "left" ? "scroll-row-left" : "scroll-row-right";

  const setWidthDesktop = computeSetWidth(images.length, CARD_W_DESKTOP, GAP_DESKTOP);
  const setWidthMobile = computeSetWidth(images.length, CARD_W_MOBILE, GAP_MOBILE);

  return (
    <div className="marquee-track-wrapper" aria-hidden="true">
      <div
        className={`marquee-track ${cls}`}
        style={
          {
            "--set-width": `${setWidthDesktop}px`,
            "--set-width-mobile": `${setWidthMobile}px`,
          } as React.CSSProperties
        }
      >
        {doubled.map((img, i) => (
          <FeedbackCard key={`${direction}-${i}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-inset testimonials-section py-16 md:py-20">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14 px-4"
        >
          <span className="badge-pill mb-6 inline-flex">
            <MessageSquare size={12} />
            Depoimentos reais
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Quem usa,{" "}
            <span className="text-gradient-animated">não volta atrás.</span>
          </h2>
        </motion.div>

        {/* Marquee rows — clipped to section width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="testimonials-marquee-area"
        >
          <MarqueeRow images={row1} direction="left" />
          <div className="h-3 md:h-4" />
          <MarqueeRow images={row2} direction="right" />
        </motion.div>

        {/* Reduced-motion fallback: static wrapped grid */}
        <div className="testimonials-static-grid px-4">
          {feedbackImages.map((img, i) => (
            <div key={i} className="testimonials-static-card">
              <Image
                src={img.src}
                alt={img.alt}
                width={240}
                height={400}
                loading="lazy"
                sizes="(max-width: 640px) 45vw, 220px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* Quiet trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-[11px] text-[rgba(161,161,170,0.5)] tracking-[0.2em] uppercase mt-8 md:mt-10 px-4"
        >
          feedbacks reais &middot; sem filtro &middot; sem edição
        </motion.p>
      </div>
    </section>
  );
}
