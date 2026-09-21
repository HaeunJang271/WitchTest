import { describe, expect, it } from "vitest";
import { questions } from "@/data/questions";
import { witchTypeMeta } from "@/data/witchTypes";
import { TOTAL_QUESTIONS, WITCH_TYPES } from "@/lib/constants";
import { buildResultPath, isWitchType } from "@/lib/resultPath";
import type { WitchType } from "@/types/witch";

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

  it("gives each type exactly four appearances", () => {
    const counts = Object.fromEntries(
      WITCH_TYPES.map((type) => [type, 0]),
    ) as Record<WitchType, number>;

    for (const question of questions) {
      for (const option of question.options) {
        counts[option.type] += 1;
      }
    }

    for (const type of WITCH_TYPES) {
      expect(counts[type]).toBe(4);
    }
  });

  it("has metadata for every type", () => {
    for (const type of WITCH_TYPES) {
      expect(witchTypeMeta[type].id).toBe(type);
      expect(witchTypeMeta[type].name.length).toBeGreaterThan(0);
    }
  });
});

describe("resultPath helpers", () => {
  it("validates WitchType strings", () => {
    expect(isWitchType("GREEN")).toBe(true);
    expect(isWitchType("HERBAL")).toBe(false);
  });

  it("builds result paths with optional secondary", () => {
    expect(buildResultPath("GREEN", "LUNAR")).toBe(
      "/result?primary=GREEN&secondary=LUNAR",
    );
    expect(buildResultPath("CHAOS", null)).toBe("/result?primary=CHAOS");
  });
});
