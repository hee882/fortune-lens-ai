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
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`
        relative min-h-[120px] p-5 rounded-2xl cursor-pointer
        backdrop-blur-xl border transition-all duration-300
        flex flex-col items-center justify-center gap-2.5 text-center
        bg-gradient-to-br ${option.gradient}
        ${isSelected
          ? `border-amber-400/50
             shadow-[0_0_30px_rgba(245,197,66,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
             bg-white/[0.08]`
          : `border-white/[0.08]
             bg-white/[0.03]
             hover:border-white/[0.15] hover:bg-white/[0.06]
             hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]`
        }
      `}
    >
      <span className="text-3xl leading-none select-none">{option.emoji}</span>
      <span className={`text-sm font-medium leading-tight ${
        isSelected ? "text-amber-200" : "text-white/75"
      }`}>
        {option.label}
      </span>
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center shadow-[0_0_12px_rgba(245,197,66,0.5)]"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="#0a0a2e" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
