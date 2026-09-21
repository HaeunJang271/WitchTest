"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import {
  calculateResult,
  resolveTieBreaker,
} from "@/lib/calculateResult";
import { TOTAL_QUESTIONS } from "@/lib/constants";
import { buildResultPath } from "@/lib/resultPath";
import { clearProgress, loadProgress, saveProgress } from "@/lib/storage";
import type {
  AnswerSelection,
  QuestionOption,
  TestProgress,
  WitchType,
} from "@/types/witch";

const ADVANCE_DELAY_MS = 280;

/**
 * Client-side quiz state with localStorage persistence.
 */
export function useTestSession() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState<TestProgress>({
    answers: {},
    currentIndex: 0,
    tieBreakerChoice: null,
  });
  const [selecting, setSelecting] = useState(false);
  const [showTieBreaker, setShowTieBreaker] = useState(false);
  const [tiedTypes, setTiedTypes] = useState<WitchType[]>([]);

  useEffect(() => {
    // Defer hydration so React does not treat this as a sync cascading render.
    const frame = window.requestAnimationFrame(() => {
      setProgress(loadProgress());
      setHydrated(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    saveProgress(progress);
  }, [progress, hydrated]);

  const currentQuestion = questions[progress.currentIndex];

  const selectedOptionId = useMemo(() => {
    if (!currentQuestion) {
      return null;
    }
    return progress.answers[currentQuestion.id] ?? null;
  }, [currentQuestion, progress.answers]);

  const answerSelections: AnswerSelection[] = useMemo(() => {
    return questions
      .map((question) => {
        const optionId = progress.answers[question.id];
        if (!optionId) {
          return null;
        }
        const option = question.options.find((item) => item.id === optionId);
        if (!option) {
          return null;
        }
        return { questionId: question.id, type: option.type };
      })
      .filter((item): item is AnswerSelection => item !== null);
  }, [progress.answers]);

  const finishOrTieBreak = useCallback(
    (selections: AnswerSelection[], choice: WitchType | null) => {
      let result = calculateResult(selections);

      if (result.needsTieBreaker) {
        if (!choice) {
          setTiedTypes(result.tiedForFirst);
          setShowTieBreaker(true);
          return;
        }
        result = resolveTieBreaker(selections, choice);
      }

      if (!result.primary) {
        return;
      }

      clearProgress();
      router.push(buildResultPath(result.primary, result.secondary));
    },
    [router],
  );

  const selectOption = useCallback(
    (option: QuestionOption) => {
      if (!currentQuestion || selecting || showTieBreaker) {
        return;
      }

      setSelecting(true);
      const nextAnswers = {
        ...progress.answers,
        [currentQuestion.id]: option.id,
      };
      const isLast = progress.currentIndex >= TOTAL_QUESTIONS - 1;
      const tieChoice = progress.tieBreakerChoice;

      // Persist selection first so the selected state is visible.
      setProgress((prev) => ({
        ...prev,
        answers: nextAnswers,
      }));

      window.setTimeout(() => {
        if (isLast) {
          const selections: AnswerSelection[] = questions
            .map((question) => {
              const optionId = nextAnswers[question.id];
              if (!optionId) {
                return null;
              }
              const matched = question.options.find(
                (item) => item.id === optionId,
              );
              if (!matched) {
                return null;
              }
              return { questionId: question.id, type: matched.type };
            })
            .filter((item): item is AnswerSelection => item !== null);

          finishOrTieBreak(selections, tieChoice);
          setSelecting(false);
          return;
        }

        setProgress((prev) => ({
          ...prev,
          answers: nextAnswers,
          currentIndex: prev.currentIndex + 1,
        }));
        setSelecting(false);
      }, ADVANCE_DELAY_MS);
    },
    [
      currentQuestion,
      selecting,
      showTieBreaker,
      progress.currentIndex,
      progress.answers,
      progress.tieBreakerChoice,
      finishOrTieBreak,
    ],
  );

  const goBack = useCallback(() => {
    if (progress.currentIndex <= 0 || selecting) {
      return;
    }
    setShowTieBreaker(false);
    setProgress((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex - 1,
    }));
  }, [progress.currentIndex, selecting]);

  const chooseTieBreaker = useCallback(
    (type: WitchType) => {
      setProgress((prev) => ({ ...prev, tieBreakerChoice: type }));
      finishOrTieBreak(answerSelections, type);
    },
    [answerSelections, finishOrTieBreak],
  );

  return {
    hydrated,
    currentQuestion,
    currentIndex: progress.currentIndex,
    selectedOptionId,
    selecting,
    showTieBreaker,
    tiedTypes,
    selectOption,
    goBack,
    chooseTieBreaker,
  };
}
