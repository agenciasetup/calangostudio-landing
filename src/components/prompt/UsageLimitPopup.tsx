"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles, X, ArrowRight } from "lucide-react";

interface UsageLimitPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function UsageLimitPopup({ open, onClose }: UsageLimitPopupProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md glass-card !rounded-[24px] md:!rounded-[28px] overflow-hidden">
              {/* Top gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-accent-end" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-txt-muted hover:text-white transition-colors z-10"
              >
                <X size={16} />
              </button>

              <div className="p-6 md:p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-5 shadow-glow">
                  <Crown size={28} className="text-black" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-black text-xl md:text-2xl mb-2">
                  Limite diário atingido
                </h3>
                <p className="text-sm text-txt-secondary mb-6 leading-relaxed">
                  Você usou suas <strong className="text-white">3 extrações gratuitas</strong> de hoje.
                  Assine o Calango Studio e tenha acesso ilimitado ao Prompt Maker e mais 12 ferramentas de IA.
                </p>

                {/* Discount badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                  <Sparkles size={16} className="text-accent" />
                  <span className="font-poppins font-bold text-sm text-accent">
                    20% OFF no primeiro mês do plano PRO
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="/?utm_source=promptmaker&utm_medium=limit_popup&utm_campaign=pro_20off&coupon=20LANGOS"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-black text-sm tracking-[0.14em] uppercase bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_24px_rgba(249,115,22,0.22)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Assinar com 20% OFF
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>

                <p className="text-[10px] text-txt-muted mt-4 uppercase tracking-wider font-bold">
                  Ou volte amanhã para mais 3 extrações gratuitas
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
