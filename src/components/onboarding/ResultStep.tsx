"use client";

import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import { generateFortune, getAllCompatibilities, getArchetypeById } from "@/lib/fortune";
import type { CompatibilityResult } from "@/lib/types";
import GlassCard from "@/components/ui/GlassCard";
import CosmicButton from "@/components/ui/CosmicButton";

type Tab = "today" | "yearly" | "life" | "type";

const TAB_LABELS: { key: Tab; label: string; emoji: string }[] = [
  { key: "today", label: "오늘", emoji: "📅" },
  { key: "yearly", label: "2026", emoji: "🗓️" },
  { key: "life", label: "인생", emoji: "🌌" },
  { key: "type", label: "유형&궁합", emoji: "💫" },
];

export default function ResultStep() {
  const { userProfile, reset } = useOnboardingStore();
  const { name, birthday, traits } = userProfile;
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [showShareToast, setShowShareToast] = useState(false);

  const fortune = useMemo(() => {
    if (!birthday) return null;
    return generateFortune(birthday, traits);
  }, [birthday, traits]);

  const compatibilities = useMemo(() => {
    if (!fortune) return [];
    return getAllCompatibilities(fortune.archetype);
  }, [fortune]);

  const shareUrl = useMemo(() => {
    if (!fortune) return "";
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams({
      t: fortune.archetype.id,
      s: String(fortune.overallScore),
      z: fortune.zodiac.sign,
    });
    return `${window.location.origin}/share?${params.toString()}`;
  }, [fortune]);

  const handleShare = useCallback(async (platform: "twitter" | "copy" | "kakao" | "facebook" | "line" | "whatsapp") => {
    if (!fortune) return;
    const text = `나는 "${fortune.archetype.emoji} ${fortune.archetype.name}" 유형! 종합 운세 ${fortune.overallScore}점 ✨ 너의 운세 유형은?`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "kakao":
        window.open(
          `https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}`,
          "_blank"
        );
        break;
      case "line":
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}\n${shareUrl}`)}`,
          "_blank"
        );
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
        } catch {
          const textarea = document.createElement("textarea");
          textarea.value = `${text}\n${shareUrl}`;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
        break;
    }
  }, [fortune, shareUrl]);

  if (!fortune || !birthday) return null;

  const levelBadge = (level: CompatibilityResult["level"]) => {
    switch (level) {
      case "best": return { text: "최고궁합", color: "text-amber-400 bg-amber-400/15 border-amber-400/30" };
      case "good": return { text: "좋은궁합", color: "text-green-400 bg-green-400/15 border-green-400/30" };
      case "neutral": return { text: "보통", color: "text-white/50 bg-white/5 border-white/15" };
      case "challenge": return { text: "도전적", color: "text-red-400 bg-red-400/15 border-red-400/30" };
    }
  };

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
          <span>{fortune.archetype.emoji} {fortune.archetype.name}</span>
        </div>
      </motion.div>

      {/* 종합 점수 + 오늘의 한마디 */}
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
          {/* 오늘의 한마디 */}
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1.5">오늘의 한마디</p>
            <p className="text-white/60 text-sm italic leading-relaxed">
              &ldquo;{fortune.dailyQuote}&rdquo;
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* 데일리 카드 미니 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="text-center">
          <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">오늘의 카드</p>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="inline-block"
          >
            <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-purple-500/30 to-amber-400/30 border border-white/10 flex flex-col items-center justify-center mx-auto">
              <span className="text-3xl">{fortune.dailyCard.emoji}</span>
              <p className="text-white/80 text-[10px] mt-1 font-medium">{fortune.dailyCard.name}</p>
              {fortune.dailyCard.reversed && (
                <p className="text-red-400/60 text-[8px]">역방향</p>
              )}
            </div>
          </motion.div>
          <p className="text-amber-300/80 text-xs mt-3 font-medium">{fortune.dailyCard.meaning}</p>
          <p className="text-white/50 text-xs mt-1 leading-relaxed">{fortune.dailyCard.advice}</p>
        </GlassCard>
      </motion.div>

      {/* 탭 네비게이션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex gap-1.5 justify-center"
      >
        {TAB_LABELS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-2 rounded-xl text-xs transition-all duration-300 cursor-pointer ${
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
      <AnimatePresence mode="wait">
        {activeTab === "today" && (
          <motion.div
            key="today"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <GlassCard>
              <h3 className="text-amber-400 text-sm font-medium mb-3">📅 오늘의 운세</h3>
              <p className="text-white/70 text-sm leading-relaxed">{fortune.todaySummary}</p>
            </GlassCard>

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
            exit={{ opacity: 0, y: -10 }}
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
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <GlassCard>
              <h3 className="text-amber-400 text-sm font-medium mb-3">🌌 인생 운세 (사주 분석)</h3>
              <p className="text-white/70 text-sm leading-relaxed">{fortune.lifeSummary}</p>
            </GlassCard>

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

        {activeTab === "type" && (
          <motion.div
            key="type"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {/* 나의 유형 카드 */}
            <GlassCard className="text-center" glow>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">당신의 운세 유형</p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <span className="text-6xl block mb-2">{fortune.archetype.emoji}</span>
                <h3 className="text-2xl font-medium text-white mb-1">{fortune.archetype.name}</h3>
                <p className="text-white/40 text-xs tracking-widest uppercase">{fortune.archetype.title}</p>
              </motion.div>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                {fortune.archetype.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {fortune.archetype.strengths.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs">
                    {s}
                  </span>
                ))}
                {fortune.archetype.weaknesses.map((w) => (
                  <span key={w} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs">
                    {w}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* 궁합 리스트 */}
            <GlassCard>
              <h3 className="text-amber-400 text-sm font-medium mb-4">💫 다른 유형과의 궁합</h3>
              <div className="space-y-3">
                {compatibilities.map((comp, i) => {
                  const badge = levelBadge(comp.level);
                  return (
                    <motion.div
                      key={comp.targetType.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="border border-white/[0.06] rounded-xl p-3 bg-white/[0.02]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{comp.targetType.emoji}</span>
                          <div>
                            <p className="text-white/90 text-sm font-medium">{comp.targetType.name}</p>
                            <p className="text-white/30 text-[10px]">{comp.targetType.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] border ${badge.color}`}>
                            {badge.text}
                          </span>
                          <span className={`text-sm font-bold ${
                            comp.score >= 80 ? "text-amber-400" : comp.score >= 60 ? "text-white/70" : "text-red-400/70"
                          }`}>
                            {comp.score}%
                          </span>
                        </div>
                      </div>
                      <p className="text-white/45 text-xs leading-relaxed">{comp.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>

            {/* 최고 궁합 하이라이트 */}
            {(() => {
              const best = getArchetypeById(fortune.archetype.bestMatch);
              if (!best) return null;
              return (
                <GlassCard className="text-center">
                  <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">운명의 파트너</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <span className="text-3xl block">{fortune.archetype.emoji}</span>
                      <p className="text-white/70 text-xs mt-1">{fortune.archetype.name}</p>
                    </div>
                    <span className="text-2xl text-amber-400">💕</span>
                    <div className="text-center">
                      <span className="text-3xl block">{best.emoji}</span>
                      <p className="text-white/70 text-xs mt-1">{best.name}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3 leading-relaxed">
                    {fortune.archetype.name}과 {best.name}은 서로의 부족한 점을 채워주는 최고의 조합입니다
                  </p>
                </GlassCard>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 공유하기 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard className="text-center">
          <p className="text-white/40 text-xs mb-4">친구에게 공유하고 궁합을 확인해보세요!</p>
          <div className="flex justify-center gap-2.5 flex-wrap">
            {/* X (Twitter) */}
            <button
              onClick={() => handleShare("twitter")}
              className="w-11 h-11 rounded-full bg-black/40 border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="X에 공유"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" fillOpacity="0.8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            {/* Facebook */}
            <button
              onClick={() => handleShare("facebook")}
              className="w-11 h-11 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center hover:bg-[#1877F2]/25 transition-colors cursor-pointer"
              aria-label="Facebook에 공유"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            {/* KakaoTalk */}
            <button
              onClick={() => handleShare("kakao")}
              className="w-11 h-11 rounded-full bg-[#FEE500]/15 border border-[#FEE500]/30 flex items-center justify-center hover:bg-[#FEE500]/25 transition-colors cursor-pointer"
              aria-label="카카오에 공유"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E"><path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.794 5.11 4.504 6.458l-.968 3.537c-.074.27.233.488.476.338l4.14-2.74c.6.076 1.216.116 1.848.116 5.523 0 10-3.463 10-7.709S17.523 3 12 3z"/></svg>
            </button>
            {/* LINE */}
            <button
              onClick={() => handleShare("line")}
              className="w-11 h-11 rounded-full bg-[#06C755]/15 border border-[#06C755]/30 flex items-center justify-center hover:bg-[#06C755]/25 transition-colors cursor-pointer"
              aria-label="LINE에 공유"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#06C755"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
            </button>
            {/* WhatsApp */}
            <button
              onClick={() => handleShare("whatsapp")}
              className="w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center hover:bg-[#25D366]/25 transition-colors cursor-pointer"
              aria-label="WhatsApp에 공유"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
            {/* 링크 복사 */}
            <button
              onClick={() => handleShare("copy")}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="링크 복사"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
          </div>

          {/* 토스트 */}
          <AnimatePresence>
            {showShareToast && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-amber-400 text-xs mt-3"
              >
                링크가 복사되었습니다!
              </motion.p>
            )}
          </AnimatePresence>
        </GlassCard>
      </motion.div>

      {/* 하단 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-3 pt-2"
      >
        <CosmicButton onClick={reset}>
          다시 해보기
        </CosmicButton>
        <p className="text-white/20 text-[10px]">다른 질문 조합으로 새로운 결과를 확인하세요</p>
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
