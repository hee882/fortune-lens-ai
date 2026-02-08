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
    <div className="text-center space-y-8 max-w-lg mx-auto">
      <div className="space-y-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-400/80 text-sm tracking-widest uppercase"
        >
          질문 {index + 1} / 5
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-light text-white"
        >
          {question.text}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
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
        transition={{ delay: 0.3 }}
      >
        <CosmicButton variant="ghost" onClick={prevStep}>
          뒤로
        </CosmicButton>
      </motion.div>
    </div>
  );
}
