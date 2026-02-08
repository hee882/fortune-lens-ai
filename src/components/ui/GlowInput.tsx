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
        className={`
          w-full px-6 py-4 rounded-xl
          bg-white/5 backdrop-blur-md
          border transition-all duration-300
          text-white text-lg text-center
          placeholder:text-white/30
          outline-none
          ${
            isFocused
              ? "border-amber-400/60 shadow-[0_0_30px_rgba(245,197,66,0.2)]"
              : "border-white/10 hover:border-white/20"
          }
        `}
      />
    </div>
  );
}
