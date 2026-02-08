"use client";

import { motion } from "framer-motion";
import type { QuestionOption } from "@/lib/types";

interface OptionCardProps {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: () => void;
}

export default function OptionCard({ option, isSelected, onSelect }: OptionCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-5 rounded-2xl cursor-pointer
        backdrop-blur-md border transition-all duration-300
        flex flex-col items-center gap-3 text-center
        bg-gradient-to-br ${option.gradient}
        ${
          isSelected
            ? "border-amber-400/60 shadow-[0_0_30px_rgba(245,197,66,0.3)] bg-white/10"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }
      `}
    >
      <span className="text-3xl">{option.emoji}</span>
      <span className={`text-sm font-medium ${isSelected ? "text-amber-300" : "text-white/80"}`}>
        {option.label}
      </span>
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="#0a0a2e" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
