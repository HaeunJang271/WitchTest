import type { Question } from "@/types/witch";

/** Questions 1–8 for the 16-type quiz. */
export const questionsPartOne: Question[] = [
  {
    id: 1,
    question: "새로운 공간에 들어왔다. 가장 먼저 하고 싶은 것은?",
    options: [
      { id: "1a", text: "작은 화분과 허브를 들여놓는다.", icon: "🌿", type: "GREEN" },
      { id: "1b", text: "방을 정리하고 집처럼 아늑하게 만든다.", icon: "🏠", type: "COTTAGE" },
      { id: "1c", text: "촛불을 켜고 공간의 분위기를 바꾼다.", icon: "🕯️", type: "CANDLE" },
      { id: "1d", text: "부적이나 보호의 상징을 하나 둔다.", icon: "🧿", type: "PROTECTION" },
    ],
  },
  {
    id: 2,
    question: "친구가 힘든 일을 털어놓았다.",
    options: [
      { id: "2a", text: "따뜻한 음식이나 차를 만들어준다.", icon: "🍳", type: "KITCHEN" },
      { id: "2b", text: "감정을 천천히 들여다보게 도와준다.", icon: "🌑", type: "SHADOW" },
      { id: "2c", text: "카드를 뽑으며 이야기를 정리한다.", icon: "🔮", type: "DIVINATION" },
      { id: "2d", text: "같이 산책하며 동물의 기운을 느낀다.", icon: "🦴", type: "ANIMAL" },
    ],
  },
  {
    id: 3,
    question: "하루의 하늘이 유난히 아름다울 때?",
    options: [
      { id: "3a", text: "달의 모양을 확인하고 기록한다.", icon: "🌙", type: "LUNAR" },
      { id: "3b", text: "햇살과 계절의 빛을 느낀다.", icon: "☀️", type: "SOLAR" },
      { id: "3c", text: "물가에 가서 파도나 바람을 듣는다.", icon: "🌊", type: "SEA" },
      { id: "3d", text: "숲이나 정원에서 숨은 존재를 상상한다.", icon: "🧚", type: "FAERY" },
    ],
  },
  {
    id: 4,
    question: "나만의 작업 공간을 만든다면?",
    options: [
      { id: "4a", text: "원석과 광물이 놓인 자리", icon: "💎", type: "CRYSTAL" },
      { id: "4b", text: "신화와 공물이 있는 제단", icon: "🏛️", type: "DEITY" },
      { id: "4c", text: "조상과 기억을 기리는 조용한 공간", icon: "👻", type: "SPIRIT" },
      { id: "4d", text: "시질과 실험 노트가 가득한 책상", icon: "🌀", type: "CHAOS" },
    ],
  },
  {
    id: 5,
    question: "여행을 간다면 어디가 끌릴까?",
    options: [
      { id: "5a", text: "허브와 식물이 많은 정원·숲", icon: "🌿", type: "GREEN" },
      { id: "5b", text: "바다와 해안가", icon: "🌊", type: "SEA" },
      { id: "5c", text: "야생동물과 만날 수 있는 자연", icon: "🦴", type: "ANIMAL" },
      { id: "5d", text: "요정 전설이 내려오는 마을", icon: "🧚", type: "FAERY" },
    ],
  },
  {
    id: 6,
    question: "하루를 특별하게 만들고 싶다.",
    options: [
      { id: "6a", text: "달의 주기에 맞춰 작은 의식을 한다.", icon: "🌙", type: "LUNAR" },
      { id: "6b", text: "일출이나 일몰을 바라본다.", icon: "☀️", type: "SOLAR" },
      { id: "6c", text: "특별한 요리를 직접 만든다.", icon: "🍳", type: "KITCHEN" },
      { id: "6d", text: "집을 정돈하고 평온한 분위기를 만든다.", icon: "🏠", type: "COTTAGE" },
    ],
  },
  {
    id: 7,
    question: "마법 도구 하나만 고른다면?",
    options: [
      { id: "7a", text: "의미가 담긴 원석", icon: "💎", type: "CRYSTAL" },
      { id: "7b", text: "색깔이 다른 촛불", icon: "🕯️", type: "CANDLE" },
      { id: "7c", text: "타로·오라클 카드 덱", icon: "🔮", type: "DIVINATION" },
      { id: "7d", text: "보호를 위한 부적", icon: "🧿", type: "PROTECTION" },
    ],
  },
  {
    id: 8,
    question: "당신이 남기고 싶은 기록은?",
    options: [
      { id: "8a", text: "감정과 내면의 변화", icon: "🌑", type: "SHADOW" },
      { id: "8b", text: "조상과 영적 존재에 관한 이야기", icon: "👻", type: "SPIRIT" },
      { id: "8c", text: "신화와 헌신의 순간", icon: "🏛️", type: "DEITY" },
      { id: "8d", text: "실험한 마법과 그 결과", icon: "🌀", type: "CHAOS" },
    ],
  },
];
