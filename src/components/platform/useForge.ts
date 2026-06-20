"use client";
/**
 * useForge — animation state machine for platform mock components.
 *
 * Advances `step` from 0 to steps-1 in `interval` ms intervals.
 * Only runs when:
 *   1. The element referenced by `ref` is ≥35% visible (IntersectionObserver)
 *   2. `active !== false`
 *
 * If `prefers-reduced-motion` is set, immediately pins to the final step
 * and never loops.
 *
 * Returns `{ step, ref }` — attach `ref` to the outermost div of the consumer.
 */
import { useEffect, useRef, useState } from "react";

export function useForge(
  steps: number,
  opts: { active?: boolean; loop?: boolean; interval?: number } = {}
) {
  const { active = true, loop = true, interval = 1100 } = opts;
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  // IntersectionObserver — update visibility
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Step ticker — respects visibility, active prop, and reduced-motion
  useEffect(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setStep(steps - 1);
      return;
    }

    if (!visible || !active) return;

    let i = step;
    const t = setInterval(() => {
      i = loop ? (i + 1) % steps : Math.min(i + 1, steps - 1);
      setStep(i);
    }, interval);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, active, steps, loop, interval]);

  return { step, ref };
}
