"use client";

/**
 * DemoSection — wraps the VSL player (previously inside Hero.tsx).
 * Extracted from Hero so the new Hero can focus on the platform mock visual.
 * All VSL logic is preserved exactly: SmartProgressBar, OfferPopup, VSLPlayer.
 */

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Volume2, X, Gift, Clock, Play } from "lucide-react";
import { PAY_URL } from "@/lib/links";

/* ─── Smart Progress Bar ─── */
function SmartProgressBar({ progress }: { progress: number }) {
  const getSmartProgress = (real: number): number => {
    if (real <= 0) return 0;
    if (real >= 1) return 100;
    if (real <= 0.5) return (real / 0.5) * 70;
    else if (real <= 0.75) return 70 + ((real - 0.5) / 0.25) * 15;
    else if (real <= 0.9) return 85 + ((real - 0.75) / 0.15) * 8;
    else if (real <= 0.99) return 93 + ((real - 0.9) / 0.09) * 6;
    else return 99 + (real - 0.99) * 100;
  };

  const visual = getSmartProgress(progress);

  return (
    <div className="w-full h-1.5 md:h-2 rounded-full bg-white/[0.08] overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-end transition-[width] duration-300 ease-linear"
        style={{ width: `${Math.min(visual, 100)}%` }}
      />
    </div>
  );
}

/* ─── VSL Offer Popup ─── */
function OfferPopup({ onClose }: { onClose: () => void }) {
  const [seconds, setSeconds] = useState(60);
  const proUrl = `${PAY_URL}?plan=pro`;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{
          background: "rgba(10, 10, 12, 0.95)",
          border: "1px solid rgba(255, 170, 0, 0.25)",
          boxShadow: "0 30px 100px rgba(0,0,0,0.6), 0 0 80px rgba(255,170,0,0.08)",
        }}
      >
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-accent via-accent-end to-accent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors z-10"
        >
          <X size={14} className="text-zinc-400" />
        </button>

        <div className="p-6 md:p-8 text-center">
          {/* Gift icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-end/20 border border-accent/25 flex items-center justify-center mb-5 animate-glow-ring">
            <Gift size={28} className="text-accent" />
          </div>

          <h3 className="font-poppins font-black text-2xl md:text-3xl text-white mb-2">
            Parabéns por assistir!
          </h3>
          <p className="text-txt-secondary text-sm md:text-base mb-6 leading-relaxed">
            Você ganhou um cupom exclusivo de{" "}
            <span className="font-black text-accent text-lg">10% OFF</span>{" "}
            no plano Pro.
          </p>

          {/* Timer */}
          {seconds > 0 ? (
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock size={14} className="text-accent/70" />
              <span className="text-sm text-zinc-400">
                Expira em{" "}
                <span className="font-poppins font-black text-white text-lg tabular-nums">
                  {seconds}s
                </span>
              </span>
            </div>
          ) : (
            <p className="text-red-400 text-sm font-semibold mb-6">Cupom expirado</p>
          )}

          {/* CTA */}
          <a
            href={seconds > 0 ? proUrl : "#planos"}
            className={`block w-full py-4 rounded-2xl font-black text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
              seconds > 0
                ? "bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }`}
          >
            {seconds > 0 ? "Assinar Pro com 10% OFF" : "Ver planos"}
          </a>

          {seconds > 0 && (
            <p className="text-[10px] text-zinc-500 mt-3 uppercase tracking-wider font-bold">
              De R$ 199,90 por R$ 179,91/mês
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── VSL Video Player ─── */
function VSLPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showOffer, setShowOffer] = useState(false);
  const hasShownOffer = useRef(false);
  const rafRef = useRef<number>();

  const updateProgress = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration > 0) {
      setProgress(video.currentTime / video.duration);
    }
    rafRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    const handlePause = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    const handleEnded = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setProgress(1);
      if (!hasShownOffer.current && !isMuted) {
        hasShownOffer.current = true;
        setShowOffer(true);
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress, isMuted]);

  const handleActivateSound = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsMuted(false);
    video.muted = false;
    video.loop = false;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  return (
    <>
      <div className="relative">
        <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:!shadow-[0_30px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
              calango.studio
            </div>
          </div>

          {/* Video area */}
          <div className="relative bg-black">
            <video
              ref={videoRef}
              src="https://pub-1c2eab8e243f42fcb91e2869bdc29d12.r2.dev/vsl-720.mp4"
              muted={isMuted}
              loop={isMuted}
              autoPlay
              playsInline
              preload="auto"
              className="w-full aspect-video object-cover"
            />

            {/* "Clique para ativar o som" overlay */}
            {isMuted && (
              <button
                onClick={handleActivateSound}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              >
                {/* Dark scrim */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                {/* Blinking CTA */}
                <div className="relative z-10 flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-sm animate-pulse-cta">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <Volume2 size={18} className="text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm md:text-base font-bold text-white">Clique aqui para ativar o som</p>
                    <p className="text-[10px] md:text-xs text-zinc-400">Assista a apresentação completa</p>
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Smart progress bar */}
          {!isMuted && (
            <div className="px-4 md:px-5 py-2 md:py-2.5 bg-white/[0.02] border-t border-white/[0.06]">
              <SmartProgressBar progress={progress} />
            </div>
          )}
        </div>

        <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-accent/12 blur-[40px] md:blur-[100px] rounded-full" />
      </div>

      {/* Offer popup */}
      <AnimatePresence>
        {showOffer && <OfferPopup onClose={() => setShowOffer(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ─── DemoSection ─── */
export default function DemoSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="section-glow-pulse w-[600px] h-[600px] bg-gradient-to-br from-accent/10 via-accent-end/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="badge-pill mb-5 inline-flex">
            <Play size={12} />
            Apresentação completa
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Veja a demo{" "}
            <span className="text-gradient-animated">completa.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Assista e entenda como o Calango Studio transforma o dia a dia de designers e social medias.
          </p>
        </motion.div>

        {/* VSL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto max-w-4xl"
        >
          <VSLPlayer />
        </motion.div>
      </div>
    </section>
  );
}
