import type { Question } from "@/types/witch";

/** Questions 9–16. */
export const questionsPartTwo: Question[] = [
  {
    id: 9,
    question: "요리할 때 가장 재미있는 것은?",
    options: [
      { id: "9a", text: "재료의 향과 특성을 알아가는 것", icon: "🌿", type: "HERBAL" },
      { id: "9b", text: "여러 재료를 조합하는 것", icon: "🍲", type: "KITCHEN" },
      { id: "9c", text: "요리하는 과정을 하나의 의식처럼 만드는 것", icon: "🕯️", type: "RITUAL" },
      { id: "9d", text: "음식의 역사와 유래를 찾아보는 것", icon: "📖", type: "GRIMOIRE" },
    ],
  },
  {
    id: 10,
    question: "당신이 가장 좋아할 기록은?",
    options: [
      { id: "10a", text: "달의 변화 기록", icon: "🌙", type: "LUNAR" },
      { id: "10b", text: "식물 성장 기록", icon: "🌿", type: "HERBAL" },
      { id: "10c", text: "매일 뽑은 카드 기록", icon: "🔮", type: "DIVINATION" },
      { id: "10d", text: "특별한 물건의 의미를 적는 기록", icon: "🧿", type: "TALISMAN" },
    ],
  },
  {
    id: 11,
    question: "숲에서 하루를 보낼 수 있다면?",
    options: [
      { id: "11a", text: "아무 계획 없이 돌아다닌다.", icon: "🌲", type: "GREEN" },
      { id: "11b", text: "식물과 버섯을 관찰한다.", icon: "🌿", type: "HERBAL" },
      { id: "11c", text: "밤이 되면 달을 바라본다.", icon: "🌙", type: "LUNAR" },
      { id: "11d", text: "발견한 것들을 하나씩 기록한다.", icon: "📖", type: "GRIMOIRE" },
    ],
  },
  {
    id: 12,
    question: "오래된 책 한 권을 발견했다.",
    options: [
      { id: "12a", text: "처음부터 끝까지 읽는다.", icon: "📖", type: "GRIMOIRE" },
      { id: "12b", text: "이상한 상징부터 찾아본다.", icon: "🔮", type: "DIVINATION" },
      { id: "12c", text: "책에 들어 있는 문양을 관찰한다.", icon: "🧿", type: "TALISMAN" },
      { id: "12d", text: "책과 달의 관련성이 있는지 찾아본다.", icon: "🌙", type: "LUNAR" },
    ],
  },
  {
    id: 13,
    question: "나만의 작은 의식을 만든다면?",
    options: [
      { id: "13a", text: "촛불을 켜고 시작한다.", icon: "🕯️", type: "RITUAL" },
      { id: "13b", text: "따뜻한 음료나 음식을 준비한다.", icon: "🍲", type: "KITCHEN" },
      { id: "13c", text: "식물이나 허브를 곁에 둔다.", icon: "🌿", type: "HERBAL" },
      { id: "13d", text: "특정한 달의 밤에 진행한다.", icon: "🌙", type: "LUNAR" },
    ],
  },
  {
    id: 14,
    question: "당신에게 가장 매력적인 마녀의 모습은?",
    options: [
      { id: "14a", text: "오래된 목걸이와 부적을 모으는 마녀", icon: "🧿", type: "TALISMAN" },
      { id: "14b", text: "카드를 펼쳐 미래를 읽는 마녀", icon: "🔮", type: "DIVINATION" },
      { id: "14c", text: "숲속에서 살아가는 마녀", icon: "🌲", type: "GREEN" },
      { id: "14d", text: "주방에서 이상한 재료로 요리하는 마녀", icon: "🍲", type: "KITCHEN" },
    ],
  },
  {
    id: 15,
    question: "무언가를 배우게 된다면?",
    options: [
      { id: "15a", text: "오래된 마법과 민속의 역사", icon: "📖", type: "GRIMOIRE" },
      { id: "15b", text: "식물과 허브", icon: "🌿", type: "HERBAL" },
      { id: "15c", text: "전통적인 음식과 향신료", icon: "🍲", type: "KITCHEN" },
      { id: "15d", text: "상징과 부적의 의미", icon: "🧿", type: "TALISMAN" },
    ],
  },
  {
    id: 16,
    question: "당신에게 '마법'은 무엇에 가장 가까운가요?",
    options: [
      { id: "16a", text: "세상의 흐름과 연결되는 것", icon: "🌙", type: "LUNAR" },
      { id: "16b", text: "나의 의도를 행동으로 표현하는 것", icon: "🕯️", type: "RITUAL" },
      { id: "16c", text: "보이지 않는 의미를 읽어내는 것", icon: "🔮", type: "DIVINATION" },
      { id: "16d", text: "자연과 연결되는 것", icon: "🌲", type: "GREEN" },
    ],
  },
];
