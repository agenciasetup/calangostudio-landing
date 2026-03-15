"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import {
  Target,
  Handshake,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Volume2,
  X,
  Gift,
  Clock,
} from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return isMobile;
}

/* iOS-style text selection highlight */
function IOSHighlight({ children, delay = 0 }: { children: string; delay?: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="relative inline">
      <motion.span
        className="absolute inset-0 rounded-md bg-accent/25"
        initial={{ scaleX: 0 }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
      {/* Left handle */}
      <motion.span
        className="absolute -left-[3px] top-0 bottom-0 w-[2.5px] rounded-full bg-accent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={active ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-accent" />
      </motion.span>
      {/* Right handle */}
      <motion.span
        className="absolute -right-[3px] top-0 bottom-0 w-[2.5px] rounded-full bg-accent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={active ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.55 }}
      >
        <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-accent" />
      </motion.span>
      <span className="relative z-10 text-gradient-animated">{children}</span>
    </span>
  );
}

/* CSS-only floating particles for hero BG */
function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${8 + (i * 7.5) % 85}%`,
        top: `${10 + (i * 11) % 75}%`,
        size: `${2 + (i % 3)}px`,
        duration: `${5 + (i % 4) * 2}s`,
        delay: `${(i * 0.7) % 4}s`,
        px: `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 5) * 10)}px`,
        py: `${-40 - (i % 4) * 25}px`,
        color:
          i % 3 === 0
            ? "rgba(255,170,0,0.5)"
            : i % 3 === 1
            ? "rgba(255,123,71,0.4)"
            : "rgba(255,255,255,0.2)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            "--size": p.size,
            "--duration": p.duration,
            "--delay": p.delay,
            "--px": p.px,
            "--py": p.py,
            "--color": p.color,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─── Smart Progress Bar ─── */
function SmartProgressBar({ progress }: { progress: number }) {
  // Transform real progress into perceived progress (faster early, slower late)
  const getSmartProgress = (real: number): number => {
    if (real <= 0) return 0;
    if (real >= 1) return 100;
    if (real <= 0.5) {
      // 0-50% real → 0-70% visual (faster)
      return (real / 0.5) * 70;
    } else if (real <= 0.75) {
      // 50-75% real → 70-85% visual
      return 70 + ((real - 0.5) / 0.25) * 15;
    } else if (real <= 0.9) {
      // 75-90% real → 85-93% visual
      return 85 + ((real - 0.75) / 0.15) * 8;
    } else if (real <= 0.99) {
      // 90-99% real → 93-99% visual
      return 93 + ((real - 0.9) / 0.09) * 6;
    } else {
      return 99 + (real - 0.99) * 100;
    }
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
  const proUrl = "https://pay.hotmart.com/F104772530K?off=y2uzyv4s&offDiscount=10LANGOS";

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
              De R$ 169,90 por R$ 152,91/mês
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

  // Track progress
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
              src="https://pub-1c2eab8e243f42fcb91e2869bdc29d1.r2.dev/vsl-720.mp4"
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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], isMobile ? [1, 1] : [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-start px-4 pt-32 md:pt-40 pb-24 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg hero-grid-animated absolute inset-0 opacity-100" />
      </div>

      {/* Pulsing radial glow */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="section-glow-pulse w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-accent/20 via-accent-end/10 to-transparent blur-[80px] md:blur-[140px]" />
        <div className="section-glow-pulse-alt w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tl from-purple-500/8 via-blue-500/5 to-transparent blur-[60px] md:blur-[120px]" style={{ top: "30%", left: "60%" }} />
      </motion.div>

      {/* Floating particles */}
      <HeroParticles />

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[8%] hidden lg:block opacity-[0.06]"
      >
        <Target size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-48 right-[6%] hidden lg:block opacity-[0.06]"
      >
        <Sparkles size={50} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[35%] left-[4%] hidden lg:block opacity-[0.05]"
      >
        <Handshake size={45} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="mb-6 md:mb-8"
        >
          <span className="badge-pill">
            <Sparkles size={12} />
            Plataforma de operação do designer
          </span>
        </motion.div>

        {/* Headline with iOS selection effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-poppins font-black text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] mb-6 md:mb-8 tracking-tight"
        >
          Feche clientes, organize{" "}
          <br className="hidden sm:block" />
          seu trabalho e entregue{" "}
          <br className="hidden sm:block" />
          conteúdo{" "}
          <IOSHighlight delay={1200}>em um só lugar.</IOSHighlight>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base md:text-lg text-txt-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          O Calango Studio é a operação do designer: prospecte empresas, feche serviços, organize briefing e contrato, e produza posts, copies e imagens com base no contexto real de cada cliente.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
        >
          <a href="#planos" className="btn-primary px-10 py-4 text-sm tracking-widest flex items-center gap-2 group">
            Entrar no Calango Studio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#como-funciona" className="btn-secondary px-7 py-3.5 flex items-center gap-2 text-sm">
            Ver como funciona <ArrowDown size={14} className="animate-float" />
          </a>
        </motion.div>

        {/* ===== VSL VIDEO / DASHBOARD MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ y: mockupY }}
          className="relative mx-auto max-w-4xl"
        >
          <VSLPlayer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
