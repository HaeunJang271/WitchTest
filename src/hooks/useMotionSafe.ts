"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Returns Framer Motion transition settings that respect reduced motion.
 */
export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    fade: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    slide: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  };
}
