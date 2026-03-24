"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";

const VIDEO_SRC =
  "https://pub-1c2eab8e243f42fcb91e2869bdc29d12.r2.dev/vsl2-web-720p.webm";
const UNLOCK_TIME = 580; // 9:40 in seconds
const STORAGE_KEY = "freemium_vsl_progress";
const COOKIE_NAME = "freemium_vsl";

/* ─── Helpers ─── */
function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

interface SavedProgress {
  currentTime: number;
  completed: boolean;
  timestamp: number;
}

function loadProgress(): SavedProgress | null {
  try {
    // Try localStorage first
    const ls = localStorage.getItem(STORAGE_KEY);
    if (ls) return JSON.parse(ls);
    // Fallback to cookie
    const ck = getCookie(COOKIE_NAME);
    if (ck) return JSON.parse(ck);
  } catch {
    // ignore
  }
  return null;
}

function saveProgress(currentTime: number, completed: boolean) {
  const data: SavedProgress = { currentTime, completed, timestamp: Date.now() };
  const json = JSON.stringify(data);
  try {
    localStorage.setItem(STORAGE_KEY, json);
  } catch {
    // ignore
  }
  setCookie(COOKIE_NAME, json, 30);
}

/* ─── Smart Progress Bar ─── */
function SmartProgressBar({ progress }: { progress: number }) {
  const getSmartProgress = (real: number): number => {
    if (real <= 0) return 0;
    if (real >= 1) return 100;
    if (real <= 0.5) return (real / 0.5) * 70;
    if (real <= 0.75) return 70 + ((real - 0.5) / 0.25) * 15;
    if (real <= 0.9) return 85 + ((real - 0.75) / 0.15) * 8;
    if (real <= 0.99) return 93 + ((real - 0.9) / 0.09) * 6;
    return 99 + (real - 0.99) * 100;
  };

  const visual = getSmartProgress(progress);

  return (
    <div className="w-full h-1.5 md:h-2 rounded-full bg-white/[0.08] overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-[width] duration-300 ease-linear"
        style={{ width: `${Math.min(visual, 100)}%` }}
      />
    </div>
  );
}

/* ─── Main Component ─── */
export default function FreemiumVSLPlayer({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const rafRef = useRef<number>();
  const saveIntervalRef = useRef<ReturnType<typeof setInterval>>();
  const hasUnlocked = useRef(false);

  // On mount: check if already completed
  useEffect(() => {
    const saved = loadProgress();
    if (saved?.completed) {
      hasUnlocked.current = true;
      onUnlock();
    }
  }, [onUnlock]);

  // Track progress with rAF
  const updateProgress = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration > 0) {
      const current = video.currentTime;
      setProgress(current / video.duration);

      // Check unlock threshold
      if (current >= UNLOCK_TIME && !hasUnlocked.current) {
        hasUnlocked.current = true;
        saveProgress(current, true);
        onUnlock();
      }
    }
    rafRef.current = requestAnimationFrame(updateProgress);
  }, [onUnlock]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsReady(true);
    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    const handlePause = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Save on pause
      if (video.duration > 0) {
        saveProgress(video.currentTime, video.currentTime >= UNLOCK_TIME);
      }
    };
    const handleEnded = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setProgress(1);
      saveProgress(video.duration, true);
      if (!hasUnlocked.current) {
        hasUnlocked.current = true;
        onUnlock();
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress, onUnlock]);

  // Periodic save every 5 seconds
  useEffect(() => {
    saveIntervalRef.current = setInterval(() => {
      const video = videoRef.current;
      if (video && !video.paused && video.duration > 0) {
        saveProgress(video.currentTime, video.currentTime >= UNLOCK_TIME);
      }
    }, 5000);
    return () => {
      if (saveIntervalRef.current) clearInterval(saveIntervalRef.current);
    };
  }, []);

  // Resume from saved position when unmuting
  const handleActivateSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const saved = loadProgress();
    setIsMuted(false);
    video.muted = false;
    video.loop = false;

    // Resume from saved position, or start from 0
    if (saved && saved.currentTime > 0 && !saved.completed) {
      video.currentTime = saved.currentTime;
    } else if (!saved?.completed) {
      video.currentTime = 0;
    }

    video.play().catch(() => {});
  };

  return (
    <div className="relative">
      <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:!shadow-[0_30px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-zinc-500 font-medium tracking-wide">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
            calango.studio
          </div>
        </div>

        {/* Video area */}
        <div className="relative bg-black">
          {/* Loading skeleton */}
          <AnimatePresence>
            {!isReady && (
              <motion.div
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-10"
              >
                <div className="w-8 h-8 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          <video
            ref={videoRef}
            src={VIDEO_SRC}
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
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="relative z-10 flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-sm animate-pulse-cta">
                <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <Volume2 size={18} className="text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-bold text-white">
                    Clique aqui para ativar o som
                  </p>
                  <p className="text-[10px] md:text-xs text-zinc-400">
                    Assista a apresentação completa
                  </p>
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Smart progress bar - always visible when unmuted */}
        {!isMuted && (
          <div className="px-4 md:px-5 py-2 md:py-2.5 bg-white/[0.02] border-t border-white/[0.06]">
            <SmartProgressBar progress={progress} />
          </div>
        )}
      </div>

      {/* Glow under video */}
      <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-20 md:h-32 bg-green-500/12 blur-[40px] md:blur-[100px] rounded-full" />
    </div>
  );
}
