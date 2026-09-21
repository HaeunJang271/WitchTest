"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import type { WitchTypeMeta } from "@/types/witch";

interface ResultCardProps {
  primary: WitchTypeMeta;
  secondary: WitchTypeMeta | null;
}

/**
 * Shareable HTML result card rendered for display and PNG export.
 */
export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  function ResultCard({ primary, secondary }, ref) {
    const { prefersReducedMotion, fade } = useMotionSafe();

    const steps = prefersReducedMotion
      ? { icon: {}, title: {}, body: {} }
      : {
          icon: { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { ...fade, delay: 0.05 } },
          title: { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { ...fade, delay: 0.15 } },
          body: { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { ...fade, delay: 0.28 } },
        };

    return (
      <div
        ref={ref}
        className={`overflow-hidden rounded-3xl border border-white/10 bg-[#0d1116] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${primary.accentClass}`}
      >
        <p className="text-[10px] tracking-[0.25em] text-[var(--fg-muted)]">
          CYNTHIA · MAGIC TYPE
        </p>

        <motion.div
          className="mt-5 text-5xl"
          aria-hidden="true"
          {...steps.icon}
        >
          {primary.icon}
        </motion.div>

        <motion.div className="mt-4 space-y-1" {...steps.title}>
          <p className="text-xs tracking-[0.2em] text-[var(--accent)]">
            {primary.englishName}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--fg)]">
            {primary.name}
          </h1>
        </motion.div>

        <motion.div className="mt-5 space-y-5" {...steps.body}>
          <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
            {primary.description}
          </p>

          <div>
            <p className="mb-2 text-[10px] tracking-[0.2em] text-[var(--fg-muted)]">
              KEYWORDS
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="키워드">
              {primary.keywords.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-[var(--fg)]"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-[10px] tracking-[0.2em] text-[var(--fg-muted)]">
              RECOMMENDED
            </p>
            <ul className="space-y-1.5 text-sm text-[var(--fg)]">
              {primary.recommendedActivities.map((activity) => (
                <li key={activity} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ✦
                  </span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {secondary ? (
            <p className="border-t border-white/10 pt-4 text-xs text-[var(--fg-muted)]">
              Secondary: {secondary.icon} {secondary.englishName} ·{" "}
              {secondary.name}
            </p>
          ) : null}

          <p className="pt-1 text-center font-[family-name:var(--font-display)] text-sm tracking-wide text-[var(--fg-muted)]">
            평범한 밤에 작은 마법을.
          </p>
        </motion.div>
      </div>
    );
  },
);
