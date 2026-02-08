# FortuneLens AI

> "See your future through the AI lens"

AI 기반 운세 분석 엔터테인먼트 서비스. 이름과 생년월일, 그리고 간단한 성격 질문을 통해 개인화된 운세를 제공합니다.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: Zustand

## Features

- 서양 별자리 + 중국 띠 + 수비학 기반 개인화
- 5가지 성격 질문을 통한 AI 맞춤 분석
- 오늘의 운세 / 주간 / 월간 / 연간 운세
- 8대 카테고리별 상세 분석 (종합운, 연애운, 재물운, 직장운, 사업운, 건강운, 대인관계운, 행운 아이템)
- 코스믹 테마 UI + 글래스모피즘 디자인

## Getting Started

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## Project Structure

```
src/
  app/          - Next.js App Router 페이지
  components/
    onboarding/ - 온보딩 플로우 컴포넌트
    ui/         - 재사용 UI 컴포넌트
  lib/          - 유틸리티, 타입, 상태 관리
```

## License

Private
