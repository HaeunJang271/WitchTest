/**
 * Quiz progress indicator with accessible value text.
 */
export function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full" role="status" aria-live="polite">
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label={`진행률 ${percent}퍼센트`}
      >
        <div
          className="h-full rounded-full bg-[var(--candle)] transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
