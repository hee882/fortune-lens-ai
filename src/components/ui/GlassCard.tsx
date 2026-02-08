"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({ children, className = "", glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`
        relative rounded-2xl p-6
        bg-gradient-to-br from-white/[0.07] to-white/[0.02]
        backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        ${glow ? "shadow-[0_0_40px_rgba(245,197,66,0.08)]" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
