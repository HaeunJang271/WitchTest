import type { WitchType, WitchTypeMeta } from "@/types/witch";
import { witchTypeMeta as partOne } from "@/data/witchTypesPartOne";

const partTwo: Record<
  Exclude<
    WitchType,
    | "GREEN"
    | "KITCHEN"
    | "COTTAGE"
    | "SEA"
    | "LUNAR"
    | "SOLAR"
    | "CRYSTAL"
    | "CANDLE"
  >,
  WitchTypeMeta
> = {
  DIVINATION: {
    id: "DIVINATION",
    name: "디비네이션 위치",
    englishName: "DIVINATION",
    icon: "🔮",
    description:
      "당신은 타로와 오라클, 룬, 펜듈럼, 스크라잉처럼 의미를 읽어내는 실천에 끌립니다. 상징과 패턴 속에서 이야기를 발견합니다.",
    keywords: ["TAROT", "ORACLE", "RUNE", "SCRYING"],
    recommendedActivities: [
      "데일리 카드 뽑기",
      "상징 일기 쓰기",
      "간단한 펜듈럼 연습",
    ],
    accentClass: "accent-divination",
  },
  PROTECTION: {
    id: "PROTECTION",
    name: "프로텍션 위치",
    englishName: "PROTECTION",
    icon: "🧿",
    description:
      "당신은 보호와 정화, 결계처럼 경계를 지키는 마법에 끌립니다. 부적과 아뮬렛, 공간과 도구를 돌보는 실천이 잘 맞습니다.",
    keywords: ["WARD", "AMULET", "CLEANSE", "BOUNDARY"],
    recommendedActivities: [
      "공간 정화 루틴 만들기",
      "작은 부적 준비하기",
      "도구 정리와 보호 의도",
    ],
    accentClass: "accent-protection",
  },
  FAERY: {
    id: "FAERY",
    name: "페어리 위치",
    englishName: "FAERY",
    icon: "🧚",
    description:
      "당신은 요정과 페어리 관련 민속, 자연 속 영적 존재에 관한 이야기에 끌립니다. 섬세하고 신비로운 자연 실천을 좋아합니다.",
    keywords: ["FAERY", "FOLKLORE", "NATURE", "SPIRIT"],
    recommendedActivities: [
      "숲·정원에서 조용히 머물기",
      "민속 이야기 읽기",
      "작은 자연물로 제단 꾸미기",
    ],
    accentClass: "accent-faery",
  },
  SPIRIT: {
    id: "SPIRIT",
    name: "스피릿 위치",
    englishName: "SPIRIT",
    icon: "👻",
    description:
      "당신은 영적 존재와 조상에 관한 민속·신앙을 살피는 데 관심이 많습니다. 존중과 기록을 바탕으로 한 영적 실천에 끌립니다.",
    keywords: ["ANCESTOR", "SPIRIT", "FOLK", "REVERENCE"],
    recommendedActivities: [
      "조상·기억 공간 만들기",
      "관련 민속 자료 읽기",
      "조용한 헌신의 시간 갖기",
    ],
    accentClass: "accent-spirit",
  },
  ANIMAL: {
    id: "ANIMAL",
    name: "애니멀 위치",
    englishName: "ANIMAL",
    icon: "🦴",
    description:
      "당신은 동물의 상징과 동물 관련 민속, 자연과 생명이 연결된 실천에 끌립니다. 관찰과 공감이 당신의 마법을 이끕니다.",
    keywords: ["ANIMAL", "SYMBOL", "WILD", "COMPANION"],
    recommendedActivities: [
      "동물 상징 조사하기",
      "야외에서 생명 관찰하기",
      "반려동물·야생과 연결 일기",
    ],
    accentClass: "accent-animal",
  },
  SHADOW: {
    id: "SHADOW",
    name: "섀도 위치",
    englishName: "SHADOW",
    icon: "🌑",
    description:
      "당신은 자기성찰과 그림자 작업, 감정과 내면을 탐구하는 과정에 끌립니다. 어두운 면을 외면하기보다 이해하려 합니다.",
    keywords: ["SHADOW", "REFLECT", "EMOTION", "INNER"],
    recommendedActivities: [
      "감정 일기 쓰기",
      "조용한 내면 탐구 시간",
      "그림자 작업 프롬프트 연습",
    ],
    accentClass: "accent-shadow",
  },
  DEITY: {
    id: "DEITY",
    name: "데이티 위치",
    englishName: "DEITY",
    icon: "🏛️",
    description:
      "당신은 신에 대한 헌신과 기도, 공물과 제단, 신화 연구에 끌립니다. 개인적인 위치크래프트와 신앙을 자연스럽게 연결합니다.",
    keywords: ["DEITY", "PRAYER", "ALTAR", "MYTH"],
    recommendedActivities: [
      "작은 제단 정리하기",
      "신화·이야기 읽기",
      "짧은 기도·감사 의식",
    ],
    accentClass: "accent-deity",
  },
  CHAOS: {
    id: "CHAOS",
    name: "카오스 위치",
    englishName: "CHAOS",
    icon: "🌀",
    description:
      "당신은 정해진 틀보다 실험과 개인적 체계 구축에 끌립니다. 시질과 기록, 결과를 관찰하며 자신만의 마법 방식을 만듭니다.",
    keywords: ["SIGIL", "EXPERIMENT", "SYSTEM", "RECORD"],
    recommendedActivities: [
      "간단한 시질 만들기",
      "실험 결과 노트 남기기",
      "나만의 상징 체계 정리",
    ],
    accentClass: "accent-chaos",
  },
};

/**
 * Combined metadata map for all Witchcraft Types.
 */
export const witchTypeMeta: Record<WitchType, WitchTypeMeta> = {
  ...partOne,
  ...partTwo,
};

/**
 * Looks up metadata for a WitchType.
 */
export function getWitchTypeMeta(type: WitchType): WitchTypeMeta {
  return witchTypeMeta[type];
}
