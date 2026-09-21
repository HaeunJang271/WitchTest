import { afterEach, describe, expect, it, vi } from "vitest";
import { STORAGE_KEY } from "@/lib/constants";
import { clearProgress, loadProgress, saveProgress } from "@/lib/storage";

describe("storage", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns empty progress when window is unavailable", () => {
    vi.stubGlobal("window", undefined);
    const progress = loadProgress();
    expect(progress.currentIndex).toBe(0);
    expect(progress.answers).toEqual({});
  });

  it("saves and loads progress via localStorage", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {
      localStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => {
          store.set(key, value);
        },
        removeItem: (key: string) => {
          store.delete(key);
        },
      },
    });

    saveProgress({
      answers: { 1: "1a" },
      currentIndex: 2,
      tieBreakerChoice: null,
    });

    expect(store.get(STORAGE_KEY)).toContain("1a");
    expect(loadProgress()).toEqual({
      answers: { 1: "1a" },
      currentIndex: 2,
      tieBreakerChoice: null,
    });

    clearProgress();
    expect(store.has(STORAGE_KEY)).toBe(false);
  });
});
