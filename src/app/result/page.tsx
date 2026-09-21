"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageContainer } from "@/components/PageContainer";
import { ResultActions } from "@/components/ResultActions";
import { ResultCard } from "@/components/ResultCard";
import { getWitchTypeMeta } from "@/data/witchTypes";
import { isWitchType } from "@/lib/resultPath";
import { clearProgress } from "@/lib/storage";

/**
 * Parses and renders a result from URL query params.
 */
function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const primaryParam = searchParams.get("primary");
  const secondaryParam = searchParams.get("secondary");

  const primary = useMemo(() => {
    if (!primaryParam || !isWitchType(primaryParam)) {
      return null;
    }
    return getWitchTypeMeta(primaryParam);
  }, [primaryParam]);

  const secondary = useMemo(() => {
    if (!secondaryParam || !isWitchType(secondaryParam)) {
      return null;
    }
    return getWitchTypeMeta(secondaryParam);
  }, [secondaryParam]);

  if (!primary) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-[var(--fg-muted)]">
          결과를 찾을 수 없어요. 테스트를 다시 시작해 주세요.
        </p>
        <Link
          href="/"
          className="touch-target inline-flex items-center justify-center rounded-full bg-[var(--ritual)]/90 px-5 text-sm text-[#1a1408]"
        >
          처음으로
        </Link>
      </div>
    );
  }

  return (
    <>
      <ResultCard ref={cardRef} primary={primary} secondary={secondary} />
      <ResultActions
        primary={primary}
        cardRef={cardRef}
        onRetake={() => {
          clearProgress();
          router.push("/test");
        }}
      />
    </>
  );
}

/**
 * Result page shell with suspense boundary for search params.
 */
export default function ResultPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      <PageContainer className="py-8">
        <Suspense
          fallback={
            <p className="text-center text-sm text-[var(--fg-muted)]" role="status">
              결과를 불러오는 중…
            </p>
          }
        >
          <ResultContent />
        </Suspense>
      </PageContainer>
    </main>
  );
}
