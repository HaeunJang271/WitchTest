import { describe, expect, it } from "vitest";
import { questions } from "@/data/questions";
import { TOTAL_QUESTIONS, WITCH_TYPES } from "@/lib/constants";
import { buildResultPath, isWitchType } from "@/lib/resultPath";

describe("questions dataset", () => {
  it("contains exactly 16 questions with four options each", () => {
    expect(questions).toHaveLength(TOTAL_QUESTIONS);
    for (const question of questions) {
      expect(question.options).toHaveLength(4);
      for (const option of question.options) {
        expect(WITCH_TYPES).toContain(option.type);
      }
    }
  });
});

describe("resultPath helpers", () => {
  it("validates WitchType strings", () => {
    expect(isWitchType("HERBAL")).toBe(true);
    expect(isWitchType("UNKNOWN")).toBe(false);
  });

  it("builds result paths with optional secondary", () => {
    expect(buildResultPath("HERBAL", "LUNAR")).toBe(
      "/result?primary=HERBAL&secondary=LUNAR",
    );
    expect(buildResultPath("GREEN", null)).toBe("/result?primary=GREEN");
  });
});
