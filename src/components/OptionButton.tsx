"use client";

import { motion } from "framer-motion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import type { QuestionOption } from "@/types/witch";

interface OptionButtonProps {
  option: QuestionOption;
  selected: boolean;
  onSelect: (option: QuestionOption) => void;
  disabled?: boolean;
}

/**
 * Selectable answer card with icon + text (not color alone).
 */
export function OptionButton({
  option,
  selected,
  onSelect,
  disabled = false,
}: OptionButtonProps) {
  const { prefersReducedMotion, fade } = useMotionSafe();

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option)}
      aria-pressed={selected}
      aria-label={`${option.icon} ${option.text}`}
      initial={false}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: selected ? 1 : 1,
              opacity: 1,
            }
      }
      whileTap={prefersReducedMotion || disabled ? undefined : { scale: 0.98 }}
      transition={fade}
      className={`touch-target flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ritual)] ${
        selected
          ? "border-[var(--ritual)] bg-white/[0.08] ring-1 ring-[var(--ritual)]/50"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      } ${disabled ? "cursor-wait opacity-80" : ""}`}
    >
      <span className="mt-0.5 text-xl leading-none" aria-hidden="true">
        {option.icon}
      </span>
      <span className="text-[15px] leading-snug text-[var(--fg)]">
        {option.text}
      </span>
      {selected ? (
        <span className="sr-only">선택됨</span>
      ) : null}
    </motion.button>
  );
}
