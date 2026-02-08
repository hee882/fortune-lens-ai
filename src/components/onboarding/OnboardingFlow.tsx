"use client";

import { AnimatePresence } from "framer-motion";
import { useOnboardingStore, TOTAL_STEPS } from "@/lib/store";
import StepRenderer from "./StepRenderer";
import ProgressBar from "./ProgressBar";
import ParticleField from "@/components/ui/ParticleField";

export default function OnboardingFlow() {
  const { currentStep, direction } = useOnboardingStore();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#1a1150] to-[#0d0d3a] overflow-hidden">
      <ParticleField />
      {currentStep > 0 && currentStep <= 7 && (
        <ProgressBar current={currentStep} total={7} />
      )}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <StepRenderer key={currentStep} step={currentStep} direction={direction} />
        </AnimatePresence>
      </div>
    </div>
  );
}
