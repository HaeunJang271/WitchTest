"use client";

import { getWitchTypeMeta } from "@/data/witchTypes";
import { OptionButton } from "@/components/OptionButton";
import type { QuestionOption, WitchType } from "@/types/witch";

interface TieBreakerPanelProps {
  tiedTypes: WitchType[];
  onChoose: (type: WitchType) => void;
}

/**
 * Extra question shown when three or more types share first place.
 */
export function TieBreakerPanel({
  tiedTypes,
  onChoose,
}: TieBreakerPanelProps) {
  const options: QuestionOption[] = tiedTypes.map((type) => {
    const meta = getWitchTypeMeta(type);
    return {
      id: `tie-${type}`,
      text: `${meta.name} (${meta.englishName})`,
      icon: meta.icon,
      type,
    };
  });

  return (
    <section className="flex flex-1 flex-col gap-5" aria-labelledby="tie-title">
      <p className="text-xs tracking-[0.2em] text-[var(--fg-muted)]">
        TIE-BREAKER
      </p>
      <h1
        id="tie-title"
        className="font-[family-name:var(--font-display)] text-[1.55rem] leading-snug sm:text-3xl"
      >
        점수가 같아요. 더 끌리는 마법은?
      </h1>
      <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
        공동 1위 타입 중 하나를 골라 주세요. 무작위로 결과가 정해지지 않습니다.
      </p>
      <div className="flex flex-col gap-3" role="group" aria-label="동점 선택지">
        {options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            selected={false}
            onSelect={(selected) => onChoose(selected.type)}
          />
        ))}
      </div>
    </section>
  );
}
