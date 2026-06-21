"use client";

/**
 * InstagramShowcase — "O feed que você entrega, pronto pra postar."
 *
 * The audience (designers / social media) ships Instagram content for clients.
 * This section shows the payoff of the creatives in the format they actually
 * deliver: a phone-framed IG profile whose feed is filled with images generated
 * in the Studio, plus a real, swipeable carousel post (drag / arrows / dots).
 *
 * Interaction is the point — the carousel is genuinely draggable. Parallax gives
 * the phone + post different scroll depths. All motion honors reduced-motion.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Clapperboard,
  UserSquare2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useScrollProgress, useParallax } from "@/lib/useParallax";
import { reveal, staggerContainer, inView } from "@/lib/motion";

const IG_GRADIENT = "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)";

// Feed grid — a varied mix, the "client feed" filled with generated creatives.
const FEED = [
  "animal_criativo",
  "business_criativo",
  "classic_criativo",
  "animal3_criativo",
  "business2_criativo",
  "animal5_criativo",
  "car2_criativo",
  "animal2_criativo",
  "animal4_criativo",
].map((n) => `/images/resultados/${n}.jpg`);

// Carousel post — a swipeable "drop".
const CAROUSEL = [
  "hero_criativo",
  "car_criativo",
  "hero3_criativo",
  "animal6_criativo",
].map((n) => `/images/resultados/${n}.jpg`);

const slide = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

// ─── Swipeable IG carousel post ───────────────────────────────────────────────
function CarouselPost() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);
  const n = CAROUSEL.length;
  const paginate = (d: number) =>
    setIndex(([i]) => [(i + d + n) % n, d]);

  return (
    <div className="w-[270px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0c0e] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] sm:w-[300px]">
      {/* post header */}
      <div className="flex items-center gap-2.5 px-3.5 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-full p-[2px]" style={{ background: IG_GRADIENT }}>
          <span
            className="h-full w-full rounded-full border border-[#0c0c0e] bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url(/images/filipe-lourenco.webp)",
              backgroundSize: "175%",
              backgroundPosition: "52% 9%",
            }}
            role="img"
            aria-label="Foto de perfil"
          />
        </span>
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-white">calango.psd</p>
          <p className="text-[10px] text-zinc-500">Criado no Calango Studio</p>
        </div>
        <span className="ml-auto text-zinc-500">···</span>
      </div>

      {/* media — draggable carousel (4:5) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) paginate(1);
              else if (info.offset.x > 50) paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={CAROUSEL[index]}
              alt={`Criativo ${index + 1} de ${n}`}
              fill
              draggable={false}
              sizes="300px"
              className="select-none object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* counter pill */}
        <div className="absolute right-2.5 top-2.5 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
          {index + 1}/{n}
        </div>

        {/* arrows */}
        <button
          aria-label="Anterior"
          onClick={() => paginate(-1)}
          className="absolute left-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          aria-label="Próximo"
          onClick={() => paginate(1)}
          className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* action row */}
      <div className="flex items-center gap-4 px-3.5 pt-3 text-white">
        <Heart size={20} className="fill-rose-500 text-rose-500" />
        <MessageCircle size={20} />
        <Send size={20} />
        <Bookmark size={20} className="ml-auto" />
      </div>

      {/* dots */}
      <div className="flex justify-center gap-1.5 py-2.5">
        {CAROUSEL.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === index ? 16 : 6,
              background: i === index ? "#3897f0" : "rgba(255,255,255,0.28)",
            }}
          />
        ))}
      </div>

      {/* caption */}
      <div className="px-3.5 pb-4">
        <p className="text-[12px] leading-relaxed text-zinc-300">
          <span className="font-semibold text-white">calango.psd</span> criativos da
          semana, feitos em minutos no Calango ✨
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-600">há 2 horas</p>
      </div>
    </div>
  );
}

// ─── Phone-framed IG profile with feed ────────────────────────────────────────
function PhoneProfile() {
  return (
    <div className="relative mx-auto w-[290px] rounded-[44px] border border-white/12 bg-[#050506] p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] sm:w-[310px]">
      {/* dynamic island */}
      <div className="absolute left-1/2 top-[14px] z-20 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

      <div className="overflow-hidden rounded-[34px] bg-[#0a0a0b]">
        {/* status / nav bar */}
        <div className="flex items-center justify-between px-4 pb-2 pt-9">
          <ChevronLeft size={20} className="text-white" />
          <div className="flex items-center gap-1 text-[15px] font-bold text-white">
            calango.psd
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-lg leading-none">＋</span>
            <span className="text-lg leading-none">≡</span>
          </div>
        </div>

        {/* profile header */}
        <div className="px-4">
          <div className="flex items-center gap-5">
            <span className="grid h-[68px] w-[68px] place-items-center rounded-full p-[2.5px]" style={{ background: IG_GRADIENT }}>
              <span
                className="h-full w-full rounded-full border-2 border-[#0a0a0b] bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/filipe-lourenco.webp)",
                  backgroundSize: "175%",
                  backgroundPosition: "52% 9%",
                }}
                role="img"
                aria-label="Foto de perfil"
              />
            </span>
            <div className="flex flex-1 justify-around text-center text-white">
              {[
                ["184", "posts"],
                ["24,3 mil", "seguidores"],
                ["412", "seguindo"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-[15px] font-bold leading-tight">{v}</p>
                  <p className="text-[11px] text-zinc-400">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 leading-snug">
            <p className="text-[13px] font-semibold text-white">calango.psd</p>
            <p className="text-[12px] text-zinc-400">Criativos &amp; design com IA ✨</p>
            <p className="text-[12px] text-zinc-500">feito no Calango Studio</p>
          </div>

          {/* buttons */}
          <div className="mt-3 flex gap-1.5">
            <button
              className="flex-1 rounded-lg py-1.5 text-[12px] font-semibold text-white"
              style={{ background: "#3897f0" }}
            >
              Seguir
            </button>
            <button className="flex-1 rounded-lg bg-white/10 py-1.5 text-[12px] font-semibold text-white">
              Mensagem
            </button>
            <button className="grid w-9 place-items-center rounded-lg bg-white/10 text-white">
              <ChevronRight size={14} className="rotate-90" />
            </button>
          </div>

          {/* highlights */}
          <div className="mt-4 flex gap-4">
            {["Antes", "Resultados", "Bastidores", "Reviews"].map((h) => (
              <div key={h} className="flex flex-col items-center gap-1">
                <span className="h-12 w-12 rounded-full border border-white/15 bg-white/[0.04]" />
                <span className="text-[9px] text-zinc-400">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* tabs */}
        <div className="mt-3 grid grid-cols-3 border-t border-white/10">
          <div className="flex justify-center border-t border-white py-2 text-white">
            <Grid3x3 size={18} />
          </div>
          <div className="flex justify-center py-2 text-zinc-600">
            <Clapperboard size={18} />
          </div>
          <div className="flex justify-center py-2 text-zinc-600">
            <UserSquare2 size={18} />
          </div>
        </div>

        {/* feed grid */}
        <div className="grid grid-cols-3 gap-[2px] pb-3">
          {FEED.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden bg-zinc-900">
              <Image
                src={src}
                alt={`Post ${i + 1} do feed`}
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InstagramShowcase() {
  const { ref, progress } = useScrollProgress();
  const phoneY = useParallax(progress, 50);
  const postY = useParallax(progress, -40);

  return (
    <section
      ref={ref}
      className="atmo grain relative overflow-hidden section-pad px-4"
      style={{ background: "radial-gradient(120% 80% at 80% 20%, #140a14 0%, #060406 50%, #030303 100%)" }}
      aria-label="O feed do seu cliente"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        {/* ── Copy ──────────────────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="text-center lg:text-left"
        >
          <motion.span variants={reveal(12)} className="eyebrow mb-6 inline-flex">
            <Sparkles size={13} className="text-[#dc2743]" />
            Pro feed do cliente
          </motion.span>
          <motion.h2
            variants={reveal(20)}
            className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl"
          >
            O feed do seu cliente,{" "}
            <span className="text-gradient-animated">pronto pra postar.</span>
          </motion.h2>
          <motion.p
            variants={reveal(16)}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-txt-secondary md:text-lg lg:mx-0"
          >
            Gere os criativos no Studio e entregue um perfil inteiro com a cara da marca.
            Carrossel, capa, identidade. Tudo no contexto do cliente, tudo num lugar só.
          </motion.p>

          <motion.ul variants={reveal(14)} className="mx-auto mt-7 flex max-w-md flex-col gap-2.5 lg:mx-0">
            {[
              "Carrosséis e posts com a identidade da marca",
              "Feed coeso, gerado em minutos",
              "Do briefing salvo direto pro criativo",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full" style={{ background: IG_GRADIENT }}>
                  <Heart size={10} className="fill-white text-white" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.a
            variants={reveal(12)}
            href="#planos"
            className="btn-primary mt-9 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-black"
          >
            Montar o feed do cliente
            <ArrowRight size={15} strokeWidth={2.5} />
          </motion.a>
        </motion.div>

        {/* ── Phone + swipeable carousel post, side by side ────────────────── */}
        <div className="relative mx-auto flex w-full max-w-[640px] flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-center lg:gap-0">
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={inView}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <PhoneProfile />
          </motion.div>

          {/* swipeable post — slight overlap + tilt for a premium composition */}
          <motion.div
            style={{ y: postY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 flex-shrink-0 lg:-ml-10 lg:mb-12 lg:-rotate-3"
          >
            <CarouselPost />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
