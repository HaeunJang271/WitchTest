import { describe, expect, it } from "vitest";
import {
  calculateResult,
  resolveTieBreaker,
} from "@/lib/calculateResult";
import type { AnswerSelection, WitchType } from "@/types/witch";

function answersOf(types: WitchType[]): AnswerSelection[] {
  return types.map((type, index) => ({
    questionId: index + 1,
    type,
  }));
}

describe("calculateResult", () => {
  it("returns empty result for no answers", () => {
    const result = calculateResult([]);
    expect(result.primary).toBeNull();
    expect(result.secondary).toBeNull();
    expect(result.needsTieBreaker).toBe(false);
    expect(result.scores.GREEN).toBe(0);
  });

  it("picks the highest score as primary", () => {
    const result = calculateResult(
      answersOf([
        "GREEN",
        "GREEN",
        "GREEN",
        "KITCHEN",
        "KITCHEN",
        "LUNAR",
      ]),
    );
    expect(result.primary).toBe("GREEN");
    expect(result.secondary).toBe("KITCHEN");
    expect(result.needsTieBreaker).toBe(false);
  });

  it("assigns two-way first-place ties to primary and secondary", () => {
    const result = calculateResult(
      answersOf(["GREEN", "KITCHEN", "GREEN", "KITCHEN"]),
    );
    expect(result.tiedForFirst).toEqual(["GREEN", "KITCHEN"]);
    expect(result.primary).toBe("GREEN");
    expect(result.secondary).toBe("KITCHEN");
    expect(result.needsTieBreaker).toBe(false);
  });

  it("flags three-or-more first-place ties for a tie-breaker", () => {
    const result = calculateResult(
      answersOf(["GREEN", "KITCHEN", "LUNAR"]),
    );
    expect(result.needsTieBreaker).toBe(true);
    expect(result.primary).toBeNull();
    expect(result.secondary).toBeNull();
    expect(result.tiedForFirst).toEqual(["GREEN", "KITCHEN", "LUNAR"]);
  });

  it("uses canonical order when scores are equal for ranking", () => {
    const result = calculateResult(answersOf(["SEA", "GREEN"]));
    expect(result.primary).toBe("GREEN");
    expect(result.secondary).toBe("SEA");
  });
});

describe("resolveTieBreaker", () => {
  it("sets chosen type as primary and next tied as secondary", () => {
    const answers = answersOf(["GREEN", "KITCHEN", "LUNAR"]);
    const resolved = resolveTieBreaker(answers, "LUNAR");
    expect(resolved.needsTieBreaker).toBe(false);
    expect(resolved.primary).toBe("LUNAR");
    expect(resolved.secondary).toBe("GREEN");
  });

  it("throws when chosen type is not tied", () => {
    const answers = answersOf(["GREEN", "KITCHEN", "LUNAR"]);
    expect(() => resolveTieBreaker(answers, "CHAOS")).toThrow();
  });
});
