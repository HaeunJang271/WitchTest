import { STORAGE_KEY } from "@/lib/constants";
import { logger } from "@/lib/logger";
import type { TestProgress } from "@/types/witch";

const EMPTY_PROGRESS: TestProgress = {
  answers: {},
  currentIndex: 0,
  tieBreakerChoice: null,
};

/**
 * Loads quiz progress from localStorage, or returns a fresh session.
 */
export function loadProgress(): TestProgress {
  if (typeof window === "undefined") {
    return { ...EMPTY_PROGRESS, answers: {} };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...EMPTY_PROGRESS, answers: {} };
    }

    const parsed = JSON.parse(raw) as Partial<TestProgress>;
    return {
      answers: parsed.answers ?? {},
      currentIndex:
        typeof parsed.currentIndex === "number" ? parsed.currentIndex : 0,
      tieBreakerChoice: parsed.tieBreakerChoice ?? null,
    };
  } catch (error) {
    logger.error("Failed to load quiz progress", error);
    return { ...EMPTY_PROGRESS, answers: {} };
  }
}

/**
 * Persists quiz progress to localStorage.
 */
export function saveProgress(progress: TestProgress): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    logger.error("Failed to save quiz progress", error);
  }
}

/**
 * Clears stored quiz progress.
 */
export function clearProgress(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    logger.error("Failed to clear quiz progress", error);
  }
}
