"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useOnboardingStore } from "@/lib/store";

const SCAN_MESSAGES = [
  "별자리를 읽고 있습니다...",
  "수비학 패턴을 분석 중...",
  "운명의 흐름을 감지 중...",
  "당신만의 에너지를 해석 중...",
  "AI 렌즈를 통해 들여다보는 중...",
];

export default function ScanningStep() {
  const { userProfile, nextStep } = useOnboardingStore();
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % SCAN_MESSAGES.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const remaining = 100 - prev;
        const increment = Math.max(0.5, remaining * 0.03);
        return Math.min(prev + increment, 100);
      });
    }, 40);

    const completeTimeout = setTimeout(() => {
      nextStep();
    }, 4500);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [nextStep]);

  return (
    <div className="flex flex-col items-center text-center space-y-10">
      {/* 스캐닝 링 */}
      <div className="relative w-44 h-44">
        {/* 외부 링 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent, rgba(245,197,66,0.4), transparent, rgba(139,92,246,0.3), transparent)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
          }}
        />
        {/* 내부 링 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-5 rounded-full"
          style={{
            background: "conic-gradient(from 180deg, transparent, rgba(167,139,250,0.3), transparent, rgba(251,191,36,0.2), transparent)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
          }}
        />
        {/* 중앙 글로우 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <span className="text-5xl">🔮</span>
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl text-white font-light">
          <span className="text-amber-300">{userProfile.name}</span>
          <span className="text-white/60">님의 운명을 분석하고 있습니다</span>
        </h2>
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/40 text-sm"
        >
          {SCAN_MESSAGES[messageIndex]}
        </motion.p>
      </div>

      {/* 프로그레스 */}
      <div className="space-y-2 w-56">
        <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-purple-400 to-amber-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/25 text-xs tabular-nums">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
