import { WITCH_TYPES } from "@/lib/constants";
import type {
  AnswerSelection,
  CalculateResultOutput,
  WitchType,
} from "@/types/witch";

/**
 * Creates a zeroed score map for every WitchType.
 */
export function createEmptyScores(): Record<WitchType, number> {
  return WITCH_TYPES.reduce(
    (acc, type) => {
      acc[type] = 0;
      return acc;
    },
    {} as Record<WitchType, number>,
  );
}

/**
 * Ranks types by score descending, using canonical order for equal scores.
 */
function rankTypes(scores: Record<WitchType, number>): WitchType[] {
  return [...WITCH_TYPES].sort((a, b) => {
    const scoreDiff = scores[b] - scores[a];
    if (scoreDiff !== 0) {
      return scoreDiff;
    }
    return WITCH_TYPES.indexOf(a) - WITCH_TYPES.indexOf(b);
  });
}

/**
 * Pure function that scores answers and resolves primary/secondary types.
 * Does not randomly break ties; 3+ first-place ties require a tie-breaker.
 */
export function calculateResult(
  answers: AnswerSelection[],
): CalculateResultOutput {
  const scores = createEmptyScores();

  for (const answer of answers) {
    scores[answer.type] += 1;
  }

  const ranked = rankTypes(scores);

  if (answers.length === 0) {
    return {
      scores,
      ranked,
      primary: null,
      secondary: null,
      tiedForFirst: [],
      needsTieBreaker: false,
    };
  }

  const topScore = scores[ranked[0]];
  const tiedForFirst = ranked.filter((type) => scores[type] === topScore);

  if (tiedForFirst.length >= 3) {
    return {
      scores,
      ranked,
      primary: null,
      secondary: null,
      tiedForFirst,
      needsTieBreaker: true,
    };
  }

  if (tiedForFirst.length === 2) {
    return {
      scores,
      ranked,
      primary: tiedForFirst[0],
      secondary: tiedForFirst[1],
      tiedForFirst,
      needsTieBreaker: false,
    };
  }

  const primary = tiedForFirst[0];
  const secondary = ranked[1] ?? null;

  return {
    scores,
    ranked,
    primary,
    secondary,
    tiedForFirst,
    needsTieBreaker: false,
  };
}

/**
 * Resolves a multi-way first-place tie after the user picks a primary type.
 */
export function resolveTieBreaker(
  answers: AnswerSelection[],
  chosenPrimary: WitchType,
): CalculateResultOutput {
  const base = calculateResult(answers);

  if (!base.tiedForFirst.includes(chosenPrimary)) {
    throw new Error("Chosen primary is not among tied types.");
  }

  const remaining = base.tiedForFirst.filter((type) => type !== chosenPrimary);
  const secondary = remaining[0] ?? base.ranked.find((t) => t !== chosenPrimary) ?? null;

  return {
    ...base,
    primary: chosenPrimary,
    secondary,
    needsTieBreaker: false,
  };
}
