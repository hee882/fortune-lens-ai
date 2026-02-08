"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CosmicButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function CosmicButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}: CosmicButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-8 py-3.5 rounded-2xl font-semibold text-base
        transition-all duration-300 cursor-pointer
        ${variant === "primary"
          ? `bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500
             text-[#0a0a2e]
             shadow-[0_4px_24px_rgba(245,197,66,0.3)]
             hover:shadow-[0_4px_40px_rgba(245,197,66,0.5)]
             disabled:opacity-35 disabled:cursor-not-allowed disabled:shadow-none`
          : `bg-white/[0.06] border border-white/[0.1] text-white/60
             hover:bg-white/[0.1] hover:text-white/90 hover:border-white/20`
        }
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && !disabled && (
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer pointer-events-none" />
      )}
    </motion.button>
  );
}
