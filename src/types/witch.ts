/**
 * Witchcraft Type identifiers used across the app.
 */
export type WitchType =
  | "HERBAL"
  | "KITCHEN"
  | "LUNAR"
  | "DIVINATION"
  | "RITUAL"
  | "TALISMAN"
  | "GRIMOIRE"
  | "GREEN";

/**
 * A single selectable answer mapped to a WitchType.
 */
export interface QuestionOption {
  id: string;
  text: string;
  icon: string;
  type: WitchType;
}

/**
 * One quiz question with four typed options.
 */
export interface Question {
  id: number;
  question: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
}

/**
 * User answer: question id paired with the chosen WitchType.
 */
export interface AnswerSelection {
  questionId: number;
  type: WitchType;
}

/**
 * Persisted progress for resuming a quiz session.
 */
export interface TestProgress {
  answers: Record<number, string>;
  currentIndex: number;
  tieBreakerChoice: WitchType | null;
}

/**
 * Full metadata for a result type card.
 */
export interface WitchTypeMeta {
  id: WitchType;
  name: string;
  englishName: string;
  icon: string;
  description: string;
  keywords: readonly string[];
  recommendedActivities: readonly string[];
  accentClass: string;
}

/**
 * Output of the pure result calculator.
 */
export interface CalculateResultOutput {
  scores: Record<WitchType, number>;
  ranked: WitchType[];
  primary: WitchType | null;
  secondary: WitchType | null;
  tiedForFirst: WitchType[];
  needsTieBreaker: boolean;
}
