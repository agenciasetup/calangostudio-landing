import type { Variants } from "framer-motion";

/**
 * Shared motion language for the landing page.
 *
 * One set of easings + reveal variants so every section feels part of the same
 * premium "physics". Import these instead of redefining transitions per
 * component — it's what makes the whole page read as one coherent product.
 */

// Expressive ease-out — page-load / hero moments.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
// Soft settle — scroll-triggered reveals.
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

// Default viewport config for whileInView reveals (fire once, slightly early).
export const inView = { once: true, margin: "-80px" } as const;

/** Fade + rise. `y` = starting offset in px. */
export const reveal = (y = 24, delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration, ease: EASE_SOFT, delay } },
});

/** Fade + slide on X. */
export const revealX = (x = 24, delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration, ease: EASE_SOFT, delay } },
});

/** Fade + scale up (for media / windows / cards). */
export const revealScale = (delay = 0, duration = 0.7): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration, ease: EASE_SOFT, delay } },
});

/** Container that staggers its children's reveals. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});
