"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/PageContainer";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  TEST_META_LINE,
  TEST_SUBTITLE,
  TEST_TITLE,
} from "@/lib/constants";
import { clearProgress } from "@/lib/storage";
import { useMotionSafe } from "@/hooks/useMotionSafe";

/**
 * Landing / start screen for the WitchTest experience.
 */
export default function HomePage() {
  const { prefersReducedMotion, fade } = useMotionSafe();

  return (
    <main className="flex min-h-dvh flex-col">
      <PageContainer className="justify-center text-center">
        <motion.p
          className="font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-[var(--fg)] sm:text-5xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fade, delay: 0.05 }}
        >
          {BRAND_NAME}
        </motion.p>

        <motion.p
          className="mt-3 text-sm tracking-wide text-[var(--fg-muted)]"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...fade, delay: 0.12 }}
        >
          {BRAND_TAGLINE}
        </motion.p>

        <motion.h1
          className="mt-10 font-[family-name:var(--font-display)] text-[1.85rem] leading-tight text-[var(--fg)] sm:text-4xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fade, delay: 0.2 }}
        >
          {TEST_TITLE}
        </motion.h1>

        <motion.p
          className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--fg-muted)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fade, delay: 0.28 }}
        >
          {TEST_SUBTITLE.replace("나만의", "\n나만의")}
        </motion.p>

        <motion.p
          className="mt-6 text-[11px] tracking-[0.16em] text-[var(--candle)]"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...fade, delay: 0.36 }}
        >
          {TEST_META_LINE}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fade, delay: 0.45 }}
        >
          <Link
            href="/test"
            onClick={() => clearProgress()}
            className="touch-target inline-flex min-w-[220px] items-center justify-center rounded-full bg-[var(--candle)]/90 px-6 text-base font-medium text-[#1a1408] transition hover:bg-[var(--candle)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--candle)]"
            aria-label="테스트 시작"
          >
            ✦ 테스트 시작
          </Link>
        </motion.div>

        <p className="mt-10 text-[11px] leading-relaxed text-[var(--fg-muted)]/80">
          이 테스트는 심리학적으로 검증된 성격검사가 아니며
          <br />
          실제 초자연적 능력을 측정하지 않습니다.
        </p>
      </PageContainer>
    </main>
  );
}
