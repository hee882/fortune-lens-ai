"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import OptionCard from "@/components/ui/OptionCard";
import CosmicButton from "@/components/ui/CosmicButton";
import type { Question } from "@/lib/types";

interface QuestionStepProps {
  question: Question;
  index: number;
}

export default function QuestionStep({ question, index }: QuestionStepProps) {
  const { setAnswer, nextStep, prevStep, userProfile } = useOnboardingStore();
  const selectedOption = userProfile.answers[question.id];

  const handleSelect = (optionId: string) => {
    setAnswer(question.id, optionId);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="text-center space-y-8 max-w-md mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3"
      >
        <p className="text-amber-400/70 text-xs tracking-[0.25em] uppercase font-medium">
          질문 {index + 1} / 5
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-light text-white leading-snug"
        >
          {question.text}
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 gap-3"
      >
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={selectedOption === option.id}
            onSelect={() => handleSelect(option.id)}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <CosmicButton variant="ghost" onClick={prevStep}>
          뒤로
        </CosmicButton>
      </motion.div>
    </div>
  );
}
