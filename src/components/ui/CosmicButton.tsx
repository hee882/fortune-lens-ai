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
  const baseStyle =
    "relative px-8 py-3 rounded-xl font-medium text-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary: `
      bg-gradient-to-r from-amber-500 to-yellow-400
      text-cosmic-900 hover:shadow-[0_0_30px_rgba(245,197,66,0.4)]
      disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none
    `,
    ghost: `
      bg-white/5 border border-white/10 text-white/70
      hover:bg-white/10 hover:text-white
    `,
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {variant === "primary" && !disabled && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />
      )}
    </motion.button>
  );
}
