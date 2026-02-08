import { create } from "zustand";
import type { Birthday, OnboardingState } from "./types";
import type { Question } from "./types";
import { extractTraits, pickRandomQuestions } from "./questions";

export const TOTAL_STEPS = 10; // 0=welcome, 1=name, 2=birthday, 3-7=questions, 8=scanning, 9=result

interface StoreState extends OnboardingState {
  sessionQuestions: Question[];
  initSession: () => void;
}

export const useOnboardingStore = create<StoreState>((set) => ({
  currentStep: 0,
  direction: 1,
  userProfile: {
    name: "",
    birthday: null,
    traits: [],
    answers: {},
  },
  isAnalyzing: false,
  sessionQuestions: pickRandomQuestions(),

  initSession: () =>
    set({
      sessionQuestions: pickRandomQuestions(),
    }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS - 1),
      direction: 1 as const,
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
      direction: -1 as const,
    })),

  setName: (name: string) =>
    set((state) => ({
      userProfile: { ...state.userProfile, name },
    })),

  setBirthday: (birthday: Birthday) =>
    set((state) => ({
      userProfile: { ...state.userProfile, birthday },
    })),

  setAnswer: (questionId: string, optionId: string) =>
    set((state) => {
      const newAnswers = { ...state.userProfile.answers, [questionId]: optionId };
      const traits = extractTraits(newAnswers);
      return {
        userProfile: {
          ...state.userProfile,
          answers: newAnswers,
          traits,
        },
      };
    }),

  setIsAnalyzing: (isAnalyzing: boolean) => set({ isAnalyzing }),

  reset: () =>
    set({
      currentStep: 0,
      direction: 1 as const,
      userProfile: { name: "", birthday: null, traits: [], answers: {} },
      isAnalyzing: false,
      sessionQuestions: pickRandomQuestions(),
    }),
}));
