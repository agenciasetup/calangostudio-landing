"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Timer, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTDOWN_SECONDS = 10 * 60; // 10 minutes

export default function CouponBar() {
  const searchParams = useSearchParams();
  const coupon = searchParams.get("coupon");
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (coupon) {
      setVisible(true);
    }
  }, [coupon]);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [visible]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  if (!visible) return null;

  return (
    <>
      {/* Spacer to push content below the fixed bar */}
      <div className="h-10 sm:h-11" />
      <AnimatePresence>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-accent to-accent-end"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-black/70" />
              <span className="text-xs sm:text-sm font-bold text-black">
                Seu cupom foi aplicado nessa página.
              </span>
            </div>

            <span className="text-xs sm:text-sm font-black text-black/80">
              Garanta agora para não perder a chance.
            </span>

            <div className="flex items-center gap-1.5 bg-black/20 rounded-lg px-3 py-1">
              <Timer size={13} className="text-white" />
              <span className="font-mono font-black text-sm text-white tabular-nums">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
