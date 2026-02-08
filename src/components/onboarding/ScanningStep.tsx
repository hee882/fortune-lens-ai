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
  const { userProfile } = useOnboardingStore();
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % SCAN_MESSAGES.length);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      {/* 스캐닝 원 애니메이션 */}
      <div className="relative w-40 h-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 border-r-purple-500"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border-2 border-transparent border-b-amber-300 border-l-violet-400"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-4xl">🔮</span>
        </motion.div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl text-white font-light">
          <span className="text-amber-400">{userProfile.name}</span>님의 운명을 분석하고 있습니다
        </h2>
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-white/50 text-sm"
        >
          {SCAN_MESSAGES[messageIndex]}
        </motion.p>
      </div>

      {/* 프로그레스 바 */}
      <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-white/30 text-xs">{Math.min(progress, 100)}%</p>
    </div>
  );
}
