"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ShareClientProps {
  typeId: string;
  typeName: string;
  typeEmoji: string;
  typeTitle: string;
  score: string;
}

const ALL_TYPES = [
  { id: "pioneer", name: "별의 개척자", emoji: "⚡" },
  { id: "healer", name: "달빛 치유사", emoji: "🌙" },
  { id: "creator", name: "불꽃 창조자", emoji: "🔥" },
  { id: "sage", name: "숲의 현자", emoji: "🌿" },
  { id: "adventurer", name: "바람의 모험가", emoji: "🌊" },
  { id: "oracle", name: "수정 예언자", emoji: "🔮" },
  { id: "commander", name: "황금 지휘자", emoji: "👑" },
  { id: "dreamer", name: "별빛 몽상가", emoji: "✨" },
];

export default function ShareClient({ typeId, typeName, typeEmoji, typeTitle, score }: ShareClientProps) {
  const scoreNum = Number(score);

  return (
    <div className="relative min-h-svh bg-[#06061a] overflow-hidden">
      {/* 배경 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#120e3a] to-[#06061a]" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-svh px-4 py-10">
        {/* 상단 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px]">
            궁합 테스트
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[11px]">
            1분 무료
          </span>
        </motion.div>

        {/* 메인 카드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center max-w-sm w-full"
        >
          <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-2">이 사람의 운세 유형</p>

          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-7xl block mb-3"
          >
            {typeEmoji}
          </motion.span>

          <h1 className="text-3xl font-medium text-white mb-1">{typeName}</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-5">{typeTitle}</p>

          {/* 점수 바 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-white/40 text-xs">종합 운세 지수</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  {score}
                </span>
                <span className="text-white/30 text-xs">/ 100</span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(scoreNum, 100)}%` }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
              />
            </div>
          </div>

          {/* 궁합 유도 메시지 */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-6">
            <p className="text-white/60 text-sm mb-1">
              이 사람은 <span className="text-amber-300 font-medium">{typeName}</span> 유형!
            </p>
            <p className="text-white/80 text-sm font-medium">
              나랑 궁합이 맞을까? 🤔
            </p>
            <p className="text-white/30 text-[10px] mt-2 leading-relaxed">
              너의 유형을 알면 궁합을 확인할 수 있어!<br />
              8가지 유형 · 28가지 궁합 조합
            </p>
          </div>

          {/* CTA 버튼 */}
          <Link
            href="/"
            className="inline-block w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(245,197,66,0.3)] transition-shadow"
          >
            나도 해보고 궁합 확인하기
          </Link>
          <p className="text-white/20 text-[10px] mt-2">약 1분 · 완전 무료 · 가입 없이</p>
        </motion.div>

        {/* 8가지 유형 미리보기 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-sm w-full"
        >
          <p className="text-white/30 text-[10px] tracking-widest uppercase text-center mb-3">
            8가지 운세 유형
          </p>
          <div className="grid grid-cols-4 gap-2">
            {ALL_TYPES.map((type) => (
              <div
                key={type.id}
                className={`text-center py-2.5 rounded-xl border ${
                  type.id === typeId
                    ? "bg-amber-400/10 border-amber-400/25"
                    : "bg-white/[0.02] border-white/[0.06]"
                }`}
              >
                <span className="text-lg block">{type.emoji}</span>
                <p className={`text-[9px] mt-0.5 ${
                  type.id === typeId ? "text-amber-300" : "text-white/30"
                }`}>
                  {type.name}
                </p>
                {type.id === typeId && (
                  <p className="text-[8px] text-amber-400/60 mt-0.5">이 사람</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-white/20 text-[10px] text-center mt-2">
            너는 어떤 유형일까? 궁합은?
          </p>
        </motion.div>

        {/* 참여자 수 (소셜 프루프) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center gap-2"
        >
          <div className="flex -space-x-1.5">
            {["🙂", "😊", "🥰", "😎"].map((e, i) => (
              <span key={i} className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">{e}</span>
            ))}
          </div>
          <p className="text-white/25 text-[10px]">
            <span className="text-white/40 font-medium">12,847</span>명이 참여했어요
          </p>
        </motion.div>

        {/* 하단 CTA 반복 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500/90 to-yellow-500/90 text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(245,197,66,0.3)] transition-shadow"
          >
            무료로 시작하기
          </Link>
        </motion.div>

        {/* 푸터 */}
        <div className="mt-10 pt-5 border-t border-white/[0.06] w-full max-w-sm text-center">
          <nav className="flex items-center justify-center gap-3 text-white/20 text-[10px]">
            <Link href="/privacy" className="hover:text-white/40 transition-colors">개인정보처리방침</Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-white/40 transition-colors">이용약관</Link>
          </nav>
          <p className="text-white/10 text-[9px] mt-2">&copy; 2026 FortuneLens</p>
        </div>
      </div>
    </div>
  );
}
