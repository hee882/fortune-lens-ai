"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import CosmicButton from "@/components/ui/CosmicButton";

export default function WelcomeStep() {
  const { nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
          FortuneLens
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase">
          AI Fortune Analysis
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl md:text-2xl text-white/70 font-light max-w-md"
      >
        AI 렌즈로 들여다보는 당신의 운명
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-white/40 text-sm max-w-sm"
      >
        이름과 생년월일, 그리고 몇 가지 간단한 질문으로<br />
        당신만의 운세를 분석해 드립니다
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <CosmicButton onClick={nextStep}>
          운명을 들여다보기
        </CosmicButton>
      </motion.div>
    </div>
  );
}
