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
