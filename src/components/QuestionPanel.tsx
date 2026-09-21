"use client";

import { AnimatePresence, motion } from "framer-motion";
import { OptionButton } from "@/components/OptionButton";
import { ProgressBar } from "@/components/ProgressBar";
import { TOTAL_QUESTIONS } from "@/lib/constants";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import type { Question, QuestionOption } from "@/types/witch";

interface QuestionPanelProps {
  question: Question;
  index: number;
  selectedOptionId: string | null;
  onSelect: (option: QuestionOption) => void;
  onBack: () => void;
  selecting: boolean;
}

/**
 * Renders one quiz question with progress and options.
 */
export function QuestionPanel({
  question,
  index,
  selectedOptionId,
  onSelect,
  onBack,
  selecting,
}: QuestionPanelProps) {
  const { prefersReducedMotion, slide } = useMotionSafe();
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="flex flex-1 flex-col gap-5">
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-[0.2em] text-[var(--fg-muted)]">
            QUESTION {displayNumber} / {TOTAL_QUESTIONS}
          </p>
          {index > 0 ? (
            <button
              type="button"
              onClick={onBack}
              className="touch-target rounded-full px-3 text-sm text-[var(--fg-muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ritual)]"
              aria-label="이전 질문으로 돌아가기"
            >
              ← 이전
            </button>
          ) : (
            <span className="h-12 w-12" aria-hidden="true" />
          )}
        </div>
        <ProgressBar current={index + 1} total={TOTAL_QUESTIONS} />
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
          transition={slide}
          className="flex flex-1 flex-col gap-5"
        >
          <h1 className="font-[family-name:var(--font-display)] text-[1.55rem] leading-snug text-[var(--fg)] sm:text-3xl">
            {question.question}
          </h1>

          <div className="flex flex-col gap-3" role="group" aria-label="선택지">
            {question.options.map((option) => (
              <OptionButton
                key={option.id}
                option={option}
                selected={selectedOptionId === option.id}
                onSelect={onSelect}
                disabled={selecting}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
