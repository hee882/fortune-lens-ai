"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import CosmicButton from "@/components/ui/CosmicButton";

const FEATURES = [
  { emoji: "🔮", title: "AI 운세 분석", desc: "이름 + 생년월일 + 성격으로 맞춤 분석" },
  { emoji: "📅", title: "오늘의 운세", desc: "매일 새로운 하루 가이드" },
  { emoji: "🗓️", title: "2026 연간 운세", desc: "올해 8개 카테고리별 상세 분석" },
  { emoji: "🌌", title: "인생 운세", desc: "별자리 + 수비학 + 띠 기반 사주 분석" },
];

export default function WelcomeStep() {
  const { nextStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center space-y-8 max-w-lg mx-auto">
      {/* 타이틀 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-3"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
          FortuneLens
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase">
          AI Fortune Analysis
        </p>
      </motion.div>

      {/* 메인 설명 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xl md:text-2xl text-white/80 font-light">
          당신의 생년월일과 성격 분석을 통해<br />
          <span className="text-amber-400">AI가 당신의 미래를 들여다봅니다</span>
        </p>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
          이름과 생년월일을 알려주시고,<br />
          간단한 5가지 질문에 답하시면<br />
          별자리 · 수비학 · 사주를 결합한 AI 분석이 시작됩니다
        </p>
      </motion.div>

      {/* 서비스 소개 카드 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-2 gap-3 w-full"
      >
        {FEATURES.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-left"
          >
            <span className="text-2xl">{feat.emoji}</span>
            <p className="text-white/90 text-sm font-medium mt-2">{feat.title}</p>
            <p className="text-white/40 text-xs mt-1">{feat.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="space-y-2"
      >
        <CosmicButton onClick={nextStep}>
          나의 운명 들여다보기
        </CosmicButton>
        <p className="text-white/20 text-xs">약 1분 소요 · 무료</p>
      </motion.div>
    </div>
  );
}
