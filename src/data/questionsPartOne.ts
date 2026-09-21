import type { Question } from "@/types/witch";

/** Questions 1–8. */
export const questionsPartOne: Question[] = [
  {
    id: 1,
    question: "새로운 방으로 이사했다. 가장 먼저 하고 싶은 것은?",
    options: [
      { id: "1a", text: "작은 화분과 허브를 들여놓는다.", icon: "🌿", type: "HERBAL" },
      { id: "1b", text: "촛불을 켜고 방을 천천히 정리한다.", icon: "🕯️", type: "RITUAL" },
      { id: "1c", text: "이 공간의 역사나 이야기가 궁금해진다.", icon: "📖", type: "GRIMOIRE" },
      { id: "1d", text: "나에게 의미 있는 물건을 하나 놓는다.", icon: "🧿", type: "TALISMAN" },
    ],
  },
  {
    id: 2,
    question: "친구가 힘든 일을 털어놓았다.",
    options: [
      { id: "2a", text: "직접 맛있는 음식을 만들어준다.", icon: "🍲", type: "KITCHEN" },
      { id: "2b", text: "같이 산책하면서 이야기를 들어준다.", icon: "🌲", type: "GREEN" },
      { id: "2c", text: "카드를 뽑아보며 이야기를 정리한다.", icon: "🔮", type: "DIVINATION" },
      { id: "2d", text: "조용한 공간에서 마음을 가라앉힌다.", icon: "🕯️", type: "RITUAL" },
    ],
  },
  {
    id: 3,
    question: "밤하늘을 보고 있다.",
    options: [
      { id: "3a", text: "오늘 달의 모양을 확인한다.", icon: "🌙", type: "LUNAR" },
      { id: "3b", text: "달에 관한 이야기를 찾아본다.", icon: "📖", type: "GRIMOIRE" },
      { id: "3c", text: "지금 떠오른 생각을 기록한다.", icon: "🔮", type: "DIVINATION" },
      { id: "3d", text: "그냥 밤의 공기를 느낀다.", icon: "🌲", type: "GREEN" },
    ],
  },
  {
    id: 4,
    question: "마녀의 작업실을 하나 가질 수 있다면?",
    options: [
      { id: "4a", text: "식물과 허브가 가득한 방", icon: "🌿", type: "HERBAL" },
      { id: "4b", text: "거대한 마법의 부엌", icon: "🍲", type: "KITCHEN" },
      { id: "4c", text: "천장까지 책이 꽂힌 서재", icon: "📖", type: "GRIMOIRE" },
      { id: "4d", text: "촛불과 향으로 가득한 방", icon: "🕯️", type: "RITUAL" },
    ],
  },
  {
    id: 5,
    question: "오래된 상자를 발견했다.",
    options: [
      { id: "5a", text: "안에 무엇이 들어 있는지 직감적으로 궁금하다.", icon: "🔮", type: "DIVINATION" },
      { id: "5b", text: "상자의 문양과 장식을 살펴본다.", icon: "🧿", type: "TALISMAN" },
      { id: "5c", text: "상자의 유래를 조사한다.", icon: "📖", type: "GRIMOIRE" },
      { id: "5d", text: "어디에서 발견됐는지 주변부터 살핀다.", icon: "🌲", type: "GREEN" },
    ],
  },
  {
    id: 6,
    question: "하루를 특별하게 만들고 싶다.",
    options: [
      { id: "6a", text: "달을 보며 하루를 시작한다.", icon: "🌙", type: "LUNAR" },
      { id: "6b", text: "평소와 다른 작은 의식을 만든다.", icon: "🕯️", type: "RITUAL" },
      { id: "6c", text: "특별한 음식을 직접 만든다.", icon: "🍲", type: "KITCHEN" },
      { id: "6d", text: "식물을 돌본다.", icon: "🌿", type: "HERBAL" },
    ],
  },
  {
    id: 7,
    question: "여행을 간다면?",
    options: [
      { id: "7a", text: "숲이나 자연이 있는 곳", icon: "🌲", type: "GREEN" },
      { id: "7b", text: "오래된 도서관이나 박물관", icon: "📖", type: "GRIMOIRE" },
      { id: "7c", text: "전통적인 장신구와 공예품을 볼 수 있는 곳", icon: "🧿", type: "TALISMAN" },
      { id: "7d", text: "오래된 점술이나 민속 문화를 볼 수 있는 곳", icon: "🔮", type: "DIVINATION" },
    ],
  },
  {
    id: 8,
    question: "마법 도구 하나만 가질 수 있다면?",
    options: [
      { id: "8a", text: "특별한 허브", icon: "🌿", type: "HERBAL" },
      { id: "8b", text: "신비로운 카드 덱", icon: "🔮", type: "DIVINATION" },
      { id: "8c", text: "오래된 부적", icon: "🧿", type: "TALISMAN" },
      { id: "8d", text: "달의 모양을 담은 펜던트", icon: "🌙", type: "LUNAR" },
    ],
  },
];
