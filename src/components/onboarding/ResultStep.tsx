"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import { generateFortune } from "@/lib/fortune";
import GlassCard from "@/components/ui/GlassCard";
import CosmicButton from "@/components/ui/CosmicButton";

type Tab = "today" | "yearly" | "life";

const TAB_LABELS: { key: Tab; label: string; emoji: string }[] = [
  { key: "today", label: "오늘의 운세", emoji: "📅" },
  { key: "yearly", label: "2026 운세", emoji: "🗓️" },
  { key: "life", label: "인생 운세", emoji: "🌌" },
];

export default function ResultStep() {
  const { userProfile, reset } = useOnboardingStore();
  const { name, birthday, traits } = userProfile;
  const [activeTab, setActiveTab] = useState<Tab>("today");

  const fortune = useMemo(() => {
    if (!birthday) return null;
    return generateFortune(birthday, traits);
  }, [birthday, traits]);

  if (!fortune || !birthday) return null;

  return (
    <div className="space-y-5 max-w-lg mx-auto pb-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <p className="text-amber-400/80 text-sm tracking-widest uppercase">
          AI 분석 완료
        </p>
        <h2 className="text-3xl font-light text-white">
          <span className="text-amber-400">{name}</span>님의 운명 리포트
        </h2>
        <div className="flex items-center justify-center gap-3 text-white/50 text-sm flex-wrap">
          <span>{fortune.zodiac.emoji} {fortune.zodiac.name}</span>
          <span className="text-white/20">·</span>
          <span>{fortune.chineseZodiac.emoji} {fortune.chineseZodiac.animal}띠</span>
          <span className="text-white/20">·</span>
          <span>생명경로수 {fortune.lifePath}</span>
        </div>
      </motion.div>

      {/* 종합 점수 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="text-center">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-2">종합 운세 지수</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            {fortune.overallScore}
          </div>
          <p className="text-white/40 text-xs mt-1">/ 100</p>
          <div className="flex justify-center gap-2 mt-3">
            {fortune.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs"
              >
                #{kw}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* 탭 네비게이션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex gap-2 justify-center"
      >
        {TAB_LABELS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 cursor-pointer ${
              activeTab === tab.key
                ? "bg-amber-400/20 border border-amber-400/30 text-amber-300"
                : "bg-white/5 border border-white/10 text-white/50 hover:text-white/70"
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </motion.div>

      {/* 탭 콘텐츠 */}
      {activeTab === "today" && (
        <motion.div
          key="today"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">📅 오늘의 운세</h3>
            <p className="text-white/70 text-sm leading-relaxed">{fortune.todaySummary}</p>
          </GlassCard>

          {/* 8카테고리 점수 */}
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-4">카테고리별 분석</h3>
            <div className="space-y-3">
              {fortune.categories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">
                      {cat.emoji} {cat.category}
                    </span>
                    <span className={`text-sm font-medium ${
                      cat.score >= 85 ? "text-amber-400" : cat.score >= 75 ? "text-white/70" : "text-white/40"
                    }`}>
                      {cat.score}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.score}%` }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        cat.score >= 85
                          ? "bg-gradient-to-r from-amber-500 to-yellow-400"
                          : cat.score >= 75
                            ? "bg-gradient-to-r from-purple-500 to-violet-400"
                            : "bg-gradient-to-r from-slate-500 to-slate-400"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* 행운 아이템 */}
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">🍀 오늘의 행운</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-white/30 text-xs">행운의 숫자</p>
                <p className="text-white text-lg font-medium">{fortune.luckyNumber}</p>
              </div>
              <div className="text-center">
                <p className="text-white/30 text-xs">행운의 색상</p>
                <p className="text-white text-lg font-medium">{fortune.luckyColor}</p>
              </div>
              <div className="text-center">
                <p className="text-white/30 text-xs">행운의 아이템</p>
                <p className="text-white text-sm font-medium">{fortune.luckyItem}</p>
              </div>
              <div className="text-center">
                <p className="text-white/30 text-xs">행운의 방향</p>
                <p className="text-white text-lg font-medium">{fortune.luckyDirection}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {activeTab === "yearly" && (
        <motion.div
          key="yearly"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">🗓️ 2026년 운세 리포트</h3>
            <p className="text-white/70 text-sm leading-relaxed">{fortune.yearlySummary}</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">올해의 핵심 키워드</h3>
            <div className="flex justify-center gap-3">
              {fortune.keywords.map((kw, i) => (
                <motion.div
                  key={kw}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-purple-500/20 border border-amber-400/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-amber-300 text-sm font-medium">{kw}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* 카테고리별 상세 */}
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-4">카테고리별 연간 전망</h3>
            <div className="space-y-4">
              {fortune.categories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-sm font-medium">
                      {cat.emoji} {cat.category}
                    </span>
                    <span className={`text-sm font-bold ${
                      cat.score >= 85 ? "text-amber-400" : cat.score >= 75 ? "text-purple-400" : "text-white/50"
                    }`}>
                      {cat.score}점
                    </span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{cat.summary}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {activeTab === "life" && (
        <motion.div
          key="life"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* 사주 종합 분석 */}
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">🌌 인생 운세 (사주 분석)</h3>
            <p className="text-white/70 text-sm leading-relaxed">{fortune.lifeSummary}</p>
          </GlassCard>

          {/* 별자리 상세 */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{fortune.zodiac.emoji}</span>
              <div>
                <p className="text-white font-medium">{fortune.zodiac.name}</p>
                <p className="text-white/40 text-xs">원소: {fortune.zodiac.element} · 수호성: {fortune.zodiac.ruling}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">{fortune.zodiac.personality}</p>
          </GlassCard>

          {/* 중국 띠 */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{fortune.chineseZodiac.emoji}</span>
              <div>
                <p className="text-white font-medium">{fortune.chineseZodiac.animal}띠</p>
                <p className="text-white/40 text-xs">{birthday.year}년생</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">{fortune.chineseZodiac.personality} 기질을 타고났습니다.</p>
          </GlassCard>

          {/* 수비학 */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/30 to-purple-500/30 flex items-center justify-center">
                <span className="text-amber-300 font-bold text-lg">{fortune.lifePath}</span>
              </div>
              <div>
                <p className="text-white font-medium">생명경로수 {fortune.lifePath} — {fortune.lifePathInfo.title}</p>
                <p className="text-white/40 text-xs">수비학(Numerology) 기반 분석</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{fortune.lifePathInfo.desc}</p>
          </GlassCard>

          {/* 성격 키워드 */}
          <GlassCard>
            <h3 className="text-amber-400 text-sm font-medium mb-3">당신의 성격 프로필</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {traits.map((trait, i) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-300 text-xs"
                >
                  {traitToKoLabel(trait)}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* 하단 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-4"
      >
        <CosmicButton variant="ghost" onClick={reset}>
          다른 사람 운세 보기
        </CosmicButton>
      </motion.div>
    </div>
  );
}

function traitToKoLabel(trait: string): string {
  const map: Record<string, string> = {
    energetic: "열정적인", intuitive: "직관적인", intellectual: "사색적인", grounded: "안정적인",
    introspective: "내면 지향적인", spontaneous: "즉흥적인", creative: "창의적인", social: "사교적인",
    ambitious: "야심찬", peaceful: "평화로운", driven: "추진력 있는", explorer: "탐험가적인",
    empathetic: "공감하는", analytical: "분석적인", storyteller: "이야기꾼", motivator: "동기부여자",
    visionary: "비전 있는", harmonious: "조화로운", catalyst: "변화를 이끄는", patient: "인내심 깊은",
  };
  return map[trait] || trait;
}
