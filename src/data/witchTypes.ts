import type { WitchType, WitchTypeMeta } from "@/types/witch";

/**
 * Result copy and styling metadata for every Witchcraft Type.
 */
export const witchTypeMeta: Record<WitchType, WitchTypeMeta> = {
  HERBAL: {
    id: "HERBAL",
    name: "허브 마법사",
    englishName: "HERBAL",
    icon: "🌿",
    description:
      "당신은 식물과 자연을 가까이에서 관찰하는 데 끌리는 사람입니다. 작은 잎의 변화, 향, 계절의 차이처럼 평범해 보이는 것에서 의미를 발견합니다.",
    keywords: ["PLANT", "HERB", "NATURE", "OBSERVATION"],
    recommendedActivities: [
      "허브 화분 키우기",
      "티 블렌딩 기록하기",
      "산책하며 식물 스케치하기",
    ],
    accentClass: "accent-herbal",
  },
  KITCHEN: {
    id: "KITCHEN",
    name: "쿠킹 마녀",
    englishName: "KITCHEN",
    icon: "🍲",
    description:
      "당신에게 부엌은 단순히 음식을 만드는 공간이 아닙니다. 재료의 향과 맛을 조합하고, 누군가를 위해 무언가를 만들어주는 과정 자체에 매력을 느낍니다.",
    keywords: ["FOOD", "SPICE", "CARE", "CREATION"],
    recommendedActivities: [
      "향신료 조합 실험하기",
      "친구를 위한 간단한 식사 준비",
      "계절 재료로 레시피 만들기",
    ],
    accentClass: "accent-kitchen",
  },
  LUNAR: {
    id: "LUNAR",
    name: "문셀 마녀",
    englishName: "LUNAR",
    icon: "🌙",
    description:
      "당신은 변화와 흐름에 관심이 많습니다. 달의 모습, 계절, 시간의 흐름처럼 계속 변화하는 것들을 바라보는 것을 좋아합니다.",
    keywords: ["MOON", "CYCLE", "TIME", "INTUITION"],
    recommendedActivities: [
      "달의 위상 관찰 일기",
      "밤하늘 산책",
      "주기적인 루틴 만들기",
    ],
    accentClass: "accent-lunar",
  },
  DIVINATION: {
    id: "DIVINATION",
    name: "점술가",
    englishName: "DIVINATION",
    icon: "🔮",
    description:
      "당신은 눈에 보이는 것보다 그 안에 숨은 의미와 패턴에 끌립니다. 카드, 상징, 이미지 등을 바라보며 새로운 해석을 만들어냅니다.",
    keywords: ["TAROT", "SYMBOL", "PATTERN", "READING"],
    recommendedActivities: [
      "데일리 카드 뽑기",
      "상징 스크랩북 만들기",
      "꿈이나 이미지 기록하기",
    ],
    accentClass: "accent-divination",
  },
  RITUAL: {
    id: "RITUAL",
    name: "의식 마녀",
    englishName: "RITUAL",
    icon: "🕯️",
    description:
      "당신은 반복되는 행동에 특별한 의미를 부여하는 사람입니다. 작은 행동도 의식으로 만들 수 있습니다.",
    keywords: ["RITUAL", "FOCUS", "INTENTION", "CEREMONY"],
    recommendedActivities: [
      "아침·저녁 작은 의식 만들기",
      "촛불 명상",
      "의도 적고 정리하는 시간 갖기",
    ],
    accentClass: "accent-ritual",
  },
  TALISMAN: {
    id: "TALISMAN",
    name: "부적술사",
    englishName: "TALISMAN",
    icon: "🧿",
    description:
      "당신은 물건에 담긴 상징과 이야기에 끌립니다. 작은 물건에도 자신만의 의미를 부여할 수 있습니다.",
    keywords: ["SYMBOL", "OBJECT", "CHARM", "MEANING"],
    recommendedActivities: [
      "의미 있는 물건 컬렉션 정리",
      "나만의 부적 만들기",
      "장신구의 이야기 기록하기",
    ],
    accentClass: "accent-talisman",
  },
  GRIMOIRE: {
    id: "GRIMOIRE",
    name: "그리모어 마녀",
    englishName: "GRIMOIRE",
    icon: "📖",
    description:
      "당신은 마법을 그냥 믿기보다 알고 싶어 하는 사람입니다. 오래된 기록을 읽고, 전통을 조사하고, 발견한 것을 자신의 방식으로 기록합니다.",
    keywords: ["BOOK", "HISTORY", "RESEARCH", "RECORD"],
    recommendedActivities: [
      "민속·마법 역사 읽기",
      "관찰 노트 남기기",
      "도서관·박물관 탐방",
    ],
    accentClass: "accent-grimoire",
  },
  GREEN: {
    id: "GREEN",
    name: "숲의 마녀",
    englishName: "GREEN",
    icon: "🌲",
    description:
      "당신은 자연이라는 거대한 공간 자체에 끌립니다. 숲, 바람, 동물, 계절의 변화처럼 사람이 통제할 수 없는 것들을 관찰하는 것을 좋아합니다.",
    keywords: ["FOREST", "WILD", "ANIMAL", "EARTH"],
    recommendedActivities: [
      "숲길 산책",
      "야외에서 조용히 앉기",
      "계절 변화 사진 기록",
    ],
    accentClass: "accent-green",
  },
};

/**
 * Looks up metadata for a WitchType.
 */
export function getWitchTypeMeta(type: WitchType): WitchTypeMeta {
  return witchTypeMeta[type];
}
