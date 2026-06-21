"use client";

import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Scroll-linked depth primitives — the "premium iOS" feel comes from layers
 * that drift at different rates as a section crosses the viewport, plus a
 * pointer-reactive tilt on hero windows. All honor prefers-reduced-motion.
 */

/**
 * useScrollProgress — track a section's progress through the viewport.
 * Attach `ref` to the section element; `progress` runs 0 → 1 as it crosses.
 * Multiple parallax layers in one section should share a single progress value.
 */
export function useScrollProgress(
  offset: Array<string | number> = ["start end", "end start"],
) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // framer's Edge typing is stricter than the runtime; cast through.
    offset: offset as never,
  });
  return { ref, progress: scrollYProgress };
}

/**
 * useParallax — derive a vertical drift MotionValue from a scroll progress.
 * `distance` = total px of travel; the layer starts `distance` low and rises to
 * `-distance` as you scroll past. Under reduced-motion it stays put.
 */
export function useParallax(progress: MotionValue<number>, distance = 60) {
  const reduced = useReducedMotion();
  return useTransform(
    progress,
    [0, 1],
    reduced ? [0, 0] : [distance, -distance],
  );
}

/**
 * useTilt — pointer-reactive 3D tilt for a card/window, spring-smoothed.
 * Spread `bind` on the element; apply rotateX/rotateY to an inner element with
 * `transformStyle: "preserve-3d"` under a `.perspective` parent.
 */
export function useTilt(max = 8) {
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sx = useSpring(rotateX, { stiffness: 140, damping: 18, mass: 0.4 });
  const sy = useSpring(rotateY, { stiffness: 140, damping: 18, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * max);
    rotateX.set(-py * max);
  };
  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { rotateX: sx, rotateY: sy, bind: { onMouseMove, onMouseLeave } };
}
