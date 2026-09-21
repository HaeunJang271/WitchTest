# WitchTest (NOCTORA)

모바일 우선 Witchcraft 성향 테스트 웹앱입니다.

**브랜드 문구:** 평범한 밤에 작은 마법을.

이 테스트는 엔터테인먼트용이며, 심리학적으로 검증된 성격검사가 아니고 실제 초자연적 능력을 측정하지 않습니다.

## 스택

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- html-to-image (결과 카드 PNG 저장)

## 시작하기

```bash
npm install
npm run dev
```

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint
- `npm run test:run` — 유닛 테스트

## 페이지

- `/` — 시작 화면
- `/test` — 16문항 테스트 (+ 동점 tie-breaker)
- `/result?primary=HERBAL&secondary=LUNAR` — 결과
