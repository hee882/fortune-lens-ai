"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import CosmicButton from "@/components/ui/CosmicButton";

const FEATURES = [
  { emoji: "🔮", title: "AI 운세 분석", desc: "이름 + 생년월일 + 성격 맞춤" },
  { emoji: "📅", title: "오늘의 운세", desc: "매일 새로운 하루 가이드" },
  { emoji: "🗓️", title: "2026 연간 운세", desc: "8개 카테고리 상세 분석" },
  { emoji: "🌌", title: "인생 운세", desc: "별자리·수비학·사주 통합" },
];

export default function WelcomeStep() {
  const { nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center space-y-10 max-w-md mx-auto">
      {/* 로고 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-3 pt-2"
      >
        <div className="relative inline-block">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            FortuneLens
          </h1>
          <div className="absolute -inset-4 bg-amber-400/[0.06] blur-2xl rounded-full -z-10" />
        </div>
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium">
          AI-Powered Fortune Analysis
        </p>
      </motion.div>

      {/* 메인 카피 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="space-y-4"
      >
        <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
          당신의 생년월일과 선택을 분석해<br />
          <span className="text-amber-300 font-normal">AI가 운명의 지도를 그려드립니다</span>
        </p>
        <p className="text-white/35 text-sm leading-relaxed">
          5가지 질문에 직감으로 답하면<br />
          별자리 · 수비학 · 사주를 결합한 분석이 시작됩니다
        </p>
      </motion.div>

      {/* 피처 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-2 gap-3 w-full"
      >
        {FEATURES.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-left
                       hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
          >
            <span className="text-xl">{feat.emoji}</span>
            <p className="text-white/85 text-sm font-medium mt-2 leading-snug">{feat.title}</p>
            <p className="text-white/35 text-[11px] mt-1 leading-snug">{feat.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="space-y-3 pb-4"
      >
        <CosmicButton onClick={nextStep}>
          나의 운명 들여다보기
        </CosmicButton>
        <p className="text-white/20 text-xs tracking-wide">약 1분 소요 · 무료</p>
      </motion.div>
    </div>
  );
}
