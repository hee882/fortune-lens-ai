"use client";

import { motion } from "framer-motion";
import { slideVariants } from "@/lib/animations";
import { useOnboardingStore } from "@/lib/store";
import WelcomeStep from "./WelcomeStep";
import NameStep from "./NameStep";
import BirthdayStep from "./BirthdayStep";
import QuestionStep from "./QuestionStep";
import ScanningStep from "./ScanningStep";
import ResultStep from "./ResultStep";

interface StepRendererProps {
  step: number;
  direction: number;
}

export default function StepRenderer({ step, direction }: StepRendererProps) {
  const sessionQuestions = useOnboardingStore((s) => s.sessionQuestions);

  const renderStep = () => {
    if (step === 0) return <WelcomeStep />;
    if (step === 1) return <NameStep />;
    if (step === 2) return <BirthdayStep />;
    if (step >= 3 && step <= 7) {
      const qIndex = step - 3;
      return <QuestionStep question={sessionQuestions[qIndex]} index={qIndex} />;
    }
    if (step === 8) return <ScanningStep />;
    if (step === 9) return <ResultStep />;
    return null;
  };

  return (
    <motion.div
      key={step}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      className="w-full max-w-2xl"
    >
      {renderStep()}
    </motion.div>
  );
}
