"use client";

import { useState } from "react";

interface GlowInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function GlowInput({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
}: GlowInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        autoComplete="off"
        className={`
          w-full px-6 py-4 rounded-xl
          bg-white/[0.04] backdrop-blur-xl
          border transition-all duration-300
          text-white text-lg text-center font-light
          placeholder:text-white/25
          outline-none
          ${isFocused
            ? "border-amber-400/40 shadow-[0_0_24px_rgba(245,197,66,0.12)]"
            : "border-white/[0.08] hover:border-white/[0.15]"
          }
        `}
      />
    </div>
  );
}
