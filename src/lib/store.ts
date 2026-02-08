import { create } from "zustand";
import type { Birthday, OnboardingState } from "./types";
import type { Question } from "./types";
import { extractTraits, pickRandomQuestions } from "./questions";

export const TOTAL_STEPS = 10; // 0=welcome, 1=name, 2=birthday, 3-7=questions, 8=scanning, 9=result

const TRANSITION_DELAY = 450; // 스텝 전환 쿨다운 (ms)

interface StoreState extends OnboardingState {
  sessionQuestions: Question[];
  isTransitioning: boolean;
  initSession: () => void;
}

let transitionTimer: ReturnType<typeof setTimeout> | null = null;

export const useOnboardingStore = create<StoreState>((set, get) => ({
  currentStep: 0,
  direction: 1,
  userProfile: {
    name: "",
    birthday: null,
    traits: [],
    answers: {},
  },
  isAnalyzing: false,
  isTransitioning: false,
  sessionQuestions: pickRandomQuestions(),

  initSession: () =>
    set({
      sessionQuestions: pickRandomQuestions(),
    }),

  nextStep: () => {
    if (get().isTransitioning) return;
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS - 1),
      direction: 1 as const,
      isTransitioning: true,
    }));
    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => set({ isTransitioning: false }), TRANSITION_DELAY);
  },

  prevStep: () => {
    if (get().isTransitioning) return;
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
      direction: -1 as const,
      isTransitioning: true,
    }));
    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => set({ isTransitioning: false }), TRANSITION_DELAY);
  },

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

  reset: () => {
    if (transitionTimer) clearTimeout(transitionTimer);
    set({
      currentStep: 0,
      direction: 1 as const,
      userProfile: { name: "", birthday: null, traits: [], answers: {} },
      isAnalyzing: false,
      isTransitioning: false,
      sessionQuestions: pickRandomQuestions(),
    });
  },
}));
