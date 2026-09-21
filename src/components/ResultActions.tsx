"use client";

import { useState } from "react";
import { Download, RotateCcw, Share2 } from "lucide-react";
import { toPng } from "html-to-image";
import { logger } from "@/lib/logger";
import { shareResult } from "@/lib/share";
import type { WitchTypeMeta } from "@/types/witch";

interface ResultActionsProps {
  primary: WitchTypeMeta;
  cardRef: React.RefObject<HTMLDivElement | null>;
  onRetake: () => void;
}

/**
 * Share, save-as-PNG, and retake actions for the result page.
 */
export function ResultActions({
  primary,
  cardRef,
  onRetake,
}: ResultActionsProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleShare(): Promise<void> {
    setBusy(true);
    setStatus(null);
    try {
      const url = window.location.href;
      const mode = await shareResult(primary, url);
      setStatus(mode === "shared" ? "공유했어요." : "결과 링크를 복사했어요.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setStatus(null);
        return;
      }
      logger.error("Share failed", error);
      setStatus("공유에 실패했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  }

  async function handleSave(): Promise<void> {
    if (!cardRef.current) {
      setStatus("결과 카드를 찾을 수 없어요.");
      return;
    }

    setBusy(true);
    setStatus(null);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#0d1116",
      });
      const link = document.createElement("a");
      link.download = `cynthia-${primary.englishName.toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      setStatus("결과 카드를 저장했어요.");
    } catch (error) {
      logger.error("PNG export failed", error);
      setStatus("이미지 저장에 실패했어요.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => void handleShare()}
          disabled={busy}
          className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm text-[var(--fg)] transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ritual)] disabled:opacity-60"
          aria-label="결과 공유하기"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          공유하기
        </button>
        <button
          type="button"
          onClick={() => void handleSave()}
          disabled={busy}
          className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm text-[var(--fg)] transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ritual)] disabled:opacity-60"
          aria-label="결과 카드 PNG로 저장"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          카드 저장
        </button>
      </div>

      <button
        type="button"
        onClick={onRetake}
        className="touch-target inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ritual)]/90 px-4 text-sm font-medium text-[#1a1408] transition hover:bg-[var(--ritual)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ritual)]"
        aria-label="다시 테스트하기"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        다시 테스트하기
      </button>

      {status ? (
        <p className="text-center text-xs text-[var(--fg-muted)]" role="status">
          {status}
        </p>
      ) : null}
    </div>
  );
}
