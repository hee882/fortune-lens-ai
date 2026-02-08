"use client";

import { AnimatePresence } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import StepRenderer from "./StepRenderer";
import ProgressBar from "./ProgressBar";
import ParticleField from "@/components/ui/ParticleField";

export default function OnboardingFlow() {
  const { currentStep, direction } = useOnboardingStore();
  const isScrollable = currentStep === 9; // 결과 페이지는 스크롤

  return (
    <div className="relative min-h-svh bg-[#06061a] overflow-x-hidden">
      {/* 배경 그라데이션 레이어 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#120e3a] to-[#06061a]" />
        {/* 라디얼 글로우 */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[100px]" />
      </div>

      <ParticleField />

      {currentStep > 0 && currentStep <= 7 && (
        <ProgressBar current={currentStep} total={7} />
      )}

      <div className={`relative z-10 px-4 sm:px-6 ${
        isScrollable
          ? "py-12 sm:py-16"
          : "flex items-center justify-center min-h-svh py-8"
      }`}>
        <AnimatePresence mode="wait" custom={direction}>
          <StepRenderer key={currentStep} step={currentStep} direction={direction} />
        </AnimatePresence>
      </div>
    </div>
  );
}
