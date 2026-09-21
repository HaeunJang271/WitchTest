import type { WitchTypeMeta } from "@/types/witch";

type PartOneType =
  | "GREEN"
  | "KITCHEN"
  | "COTTAGE"
  | "SEA"
  | "LUNAR"
  | "SOLAR"
  | "CRYSTAL"
  | "CANDLE";

/**
 * Result metadata for the first half of Witchcraft Types.
 */
export const witchTypeMeta: Record<PartOneType, WitchTypeMeta> = {
  GREEN: {
    id: "GREEN",
    name: "그린 위치",
    englishName: "GREEN",
    icon: "🌿",
    description:
      "당신은 허브와 식물, 정원처럼 자연과 가까이 있는 실천에 끌립니다. 식물의 상징과 대응을 살피며, 자연 중심의 스펠을 만드는 데 마음이 갑니다.",
    keywords: ["HERB", "PLANT", "GARDEN", "NATURE"],
    recommendedActivities: [
      "허브 화분 키우기",
      "정원·산책길 식물 관찰",
      "식물 상징 노트 만들기",
    ],
    accentClass: "accent-green",
  },
  KITCHEN: {
    id: "KITCHEN",
    name: "키친 위치",
    englishName: "KITCHEN",
    icon: "🍳",
    description:
      "당신에게 부엌은 일상 마법의 중심입니다. 요리와 차, 향신료에 상징과 의도를 담아, 먹는 행위 자체를 실천으로 만듭니다.",
    keywords: ["FOOD", "TEA", "SPICE", "INTENTION"],
    recommendedActivities: [
      "의도 담은 간단한 요리",
      "허브티 블렌딩",
      "향신료 상징 정리하기",
    ],
    accentClass: "accent-kitchen",
  },
  COTTAGE: {
    id: "COTTAGE",
    name: "코티지 위치",
    englishName: "COTTAGE",
    icon: "🏠",
    description:
      "당신은 집과 일상의 평온에서 마법을 찾습니다. 청소와 정리, 가정을 돌보는 작은 의식처럼 생활 속 실천에 끌립니다.",
    keywords: ["HOME", "DAILY", "CLEANSE", "COMFORT"],
    recommendedActivities: [
      "공간 정돈 의식 만들기",
      "집 안 작은 제단 꾸미기",
      "저녁 루틴에 의도 담기",
    ],
    accentClass: "accent-cottage",
  },
  SEA: {
    id: "SEA",
    name: "씨 위치",
    englishName: "SEA",
    icon: "🌊",
    description:
      "당신은 바다와 파도, 소금과 조개처럼 물과 연결된 상징에 끌립니다. 해양 자연물과 물 관련 리추얼에서 감각이 깨어납니다.",
    keywords: ["OCEAN", "WAVE", "SALT", "SHELL"],
    recommendedActivities: [
      "바닷가·물가 산책",
      "소금·조개 상징 수집",
      "물소리 들으며 의도 적기",
    ],
    accentClass: "accent-sea",
  },
  LUNAR: {
    id: "LUNAR",
    name: "루나 위치",
    englishName: "LUNAR",
    icon: "🌙",
    description:
      "당신은 달의 위상과 월령, 달의 상징에 민감합니다. 달 주기에 맞춰 리추얼을 맞추고 흐름을 기록하는 일을 좋아합니다.",
    keywords: ["MOON", "PHASE", "CYCLE", "RITUAL"],
    recommendedActivities: [
      "월령 관찰 일기",
      "보름·삭에 맞춘 작은 의식",
      "달빛 아래 산책",
    ],
    accentClass: "accent-lunar",
  },
  SOLAR: {
    id: "SOLAR",
    name: "솔라 위치",
    englishName: "SOLAR",
    icon: "☀️",
    description:
      "당신은 태양과 계절, 일출과 일몰의 상징에 끌립니다. 밝은 에너지와 시간의 순환을 실천에 자연스럽게 녹여냅니다.",
    keywords: ["SUN", "SEASON", "DAWN", "LIGHT"],
    recommendedActivities: [
      "일출·일몰 관찰",
      "계절 변화 기록하기",
      "낮 시간에 짧은 의도 의식",
    ],
    accentClass: "accent-solar",
  },
  CRYSTAL: {
    id: "CRYSTAL",
    name: "크리스털 위치",
    englishName: "CRYSTAL",
    icon: "💎",
    description:
      "당신은 원석과 광물의 질감, 색, 상징에 끌립니다. 크리스털의 대응을 살피고 원석을 곁에 두는 리추얼을 좋아합니다.",
    keywords: ["STONE", "MINERAL", "CORRESPONDENCE", "FOCUS"],
    recommendedActivities: [
      "원석 하나 골라 의미 적기",
      "크리스털 정화·배치",
      "광물 상징 스크랩하기",
    ],
    accentClass: "accent-crystal",
  },
  CANDLE: {
    id: "CANDLE",
    name: "캔들 위치",
    englishName: "CANDLE",
    icon: "🕯️",
    description:
      "당신은 촛불의 불꽃과 색, 촛농이 만들어내는 상징에 끌립니다. 캔들 매직과 촛불 리추얼로 의도를 또렷하게 세웁니다.",
    keywords: ["CANDLE", "FLAME", "COLOR", "FOCUS"],
    recommendedActivities: [
      "색상별 촛불 의도 연습",
      "짧은 촛불 명상",
      "촛농 모양 관찰 기록",
    ],
    accentClass: "accent-candle",
  },
};
