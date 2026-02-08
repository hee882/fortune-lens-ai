export interface QuestionOption {
  id: string;
  emoji: string;
  label: string;
  trait: string;
  gradient: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface Birthday {
  year: number;
  month: number;
  day: number;
}

export interface UserProfile {
  name: string;
  birthday: Birthday | null;
  traits: string[];
  answers: Record<string, string>;
}

export interface OnboardingState {
  currentStep: number;
  direction: 1 | -1;
  userProfile: UserProfile;
  isAnalyzing: boolean;

  nextStep: () => void;
  prevStep: () => void;
  setName: (name: string) => void;
  setBirthday: (birthday: Birthday) => void;
  setAnswer: (questionId: string, optionId: string) => void;
  setIsAnalyzing: (val: boolean) => void;
  reset: () => void;
}

// ── 운세 유형 (아키타입) ──
export interface FortuneArchetype {
  id: string;
  name: string;
  emoji: string;
  title: string;
  color: string;       // 테마 색상 (tailwind)
  description: string;
  strengths: string[];
  weaknesses: string[];
  signatureTraits: string[];
  bestMatch: string;   // 최고 궁합 아키타입 id
  goodMatches: string[];
  challengeMatch: string;
}

export interface CompatibilityResult {
  targetType: FortuneArchetype;
  level: "best" | "good" | "neutral" | "challenge";
  score: number;       // 0~100
  description: string;
}

// ── 데일리 카드 ──
export interface DailyCard {
  id: number;
  name: string;
  emoji: string;
  meaning: string;
  advice: string;
  reversed: boolean;
}

// ── 공유 데이터 ──
export interface ShareData {
  typeId: string;
  typeName: string;
  typeEmoji: string;
  overallScore: number;
  zodiacName: string;
  keywords: string[];
}
