import { questionsPartOne } from "@/data/questionsPartOne";
import { questionsPartTwo } from "@/data/questionsPartTwo";
import type { Question } from "@/types/witch";

/**
 * All 16 WitchTest questions with typed options.
 */
export const questions: Question[] = [
  ...questionsPartOne,
  ...questionsPartTwo,
];
