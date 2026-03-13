"use client";

import { motion } from "framer-motion";

/* ── Floating Icon ── */
export function FloatingIcon({
  icon: Icon,
  className = "",
  size = 20,
  delay = 0,
  color = "text-accent/20",
}: {
  icon: React.ElementType;
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${color} ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 8, -8, 0],
        opacity: [0.12, 0.4, 0.12],
      }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Icon size={size} />
    </motion.div>
  );
}

/* ── Large blurred orb ── */
export function GlowOrb({
  className = "",
  color = "bg-accent/[0.04]",
  size = "w-[500px] h-[500px]",
}: {
  className?: string;
  color?: string;
  size?: string;
}) {
  return (
    <div
      className={`absolute rounded-full blur-[140px] pointer-events-none ${color} ${size} ${className}`}
    />
  );
}

/* ── Animated popup toast ── */
export function PopupToast({
  icon: Icon,
  text,
  color = "text-accent",
  bgColor = "bg-accent/10",
  borderColor = "border-accent/20",
  delay = 0,
  className = "",
}: {
  icon: React.ElementType;
  text: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${bgColor} border ${borderColor} shadow-lg shadow-black/30`}
        style={{ backdropFilter: "blur(16px)" }}
      >
        <Icon size={16} className={color} />
        <span className="text-sm font-bold text-white whitespace-nowrap">
          {text}
        </span>
      </div>
    </motion.div>
  );
}

/* ── Progress Bar ── */
export function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i === current
              ? "w-8 bg-gradient-to-r from-accent to-accent-end"
              : i < current
              ? "w-2.5 bg-accent/40"
              : "w-2.5 bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

/* ── Slide Layout: text left, visual right ── */
export function SlideLayout({
  children,
  reverse = false,
}: {
  children: [React.ReactNode, React.ReactNode];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-[1400px] mx-auto px-6 lg:px-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 w-full min-w-0">{children[0]}</div>
      <div className="flex-1 w-full min-w-0">{children[1]}</div>
    </div>
  );
}

/* ── Slide Layout: centered single column ── */
export function SlideCentered({
  children,
  maxW = "max-w-[1100px]",
}: {
  children: React.ReactNode;
  maxW?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center w-full ${maxW} mx-auto px-6 lg:px-12`}
    >
      {children}
    </div>
  );
}

/* ── Badge pill ── */
export function Badge({
  icon: Icon,
  text,
  color = "text-accent",
  borderColor = "border-white/[0.08]",
  bgColor = "glass-panel",
}: {
  icon: React.ElementType;
  text: string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${bgColor} border ${borderColor} mb-6 lg:mb-8`}
    >
      <Icon size={14} className={color} />
      <span
        className={`text-xs font-bold uppercase tracking-wider ${
          color.includes("emerald") ? "text-emerald-300/80" : "text-txt-secondary"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
