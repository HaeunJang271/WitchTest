"use client";

import { PageContainer } from "@/components/PageContainer";
import { QuestionPanel } from "@/components/QuestionPanel";
import { TieBreakerPanel } from "@/components/TieBreakerPanel";
import { useTestSession } from "@/hooks/useTestSession";

/**
 * Quiz flow page with progress persistence and tie-breaker support.
 */
export default function TestPage() {
  const {
    hydrated,
    currentQuestion,
    currentIndex,
    selectedOptionId,
    selecting,
    showTieBreaker,
    tiedTypes,
    selectOption,
    goBack,
    chooseTieBreaker,
  } = useTestSession();

  if (!hydrated || !currentQuestion) {
    return (
      <main className="flex min-h-dvh items-center justify-center">
        <p className="text-sm text-[var(--fg-muted)]" role="status">
          불러오는 중…
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col">
      <PageContainer>
        {showTieBreaker ? (
          <TieBreakerPanel tiedTypes={tiedTypes} onChoose={chooseTieBreaker} />
        ) : (
          <QuestionPanel
            question={currentQuestion}
            index={currentIndex}
            selectedOptionId={selectedOptionId}
            onSelect={selectOption}
            onBack={goBack}
            selecting={selecting}
          />
        )}
      </PageContainer>
    </main>
  );
}
