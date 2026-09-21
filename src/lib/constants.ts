import type { WitchType } from "@/types/witch";

/** Total number of quiz questions. */
export const TOTAL_QUESTIONS = 16;

/** Minimum touch target height in pixels. */
export const MIN_TOUCH_TARGET_PX = 48;

/** localStorage key for quiz progress. */
export const STORAGE_KEY = "witchtest-progress-v1";

/** Canonical type order used for stable tie-breaking. */
export const WITCH_TYPES: readonly WitchType[] = [
  "HERBAL",
  "KITCHEN",
  "LUNAR",
  "DIVINATION",
  "RITUAL",
  "TALISMAN",
  "GRIMOIRE",
  "GREEN",
] as const;

/** Brand display name used in UI and share copy. */
export const BRAND_NAME = "CYNTHIA";

/** Product / project name. */
export const PRODUCT_NAME = "WitchTest";

/** Brand tagline. */
export const BRAND_TAGLINE = "평범한 밤에 작은 마법을.";

/** Test title shown on the landing page. */
export const TEST_TITLE = "당신의 마법 성향은?";

/** Test subtitle. */
export const TEST_SUBTITLE =
  "16개의 질문으로 알아보는 나만의 Witchcraft Type";

/** Landing meta line. */
export const TEST_META_LINE = "16 QUESTIONS · 8 TYPES · 약 3분";
