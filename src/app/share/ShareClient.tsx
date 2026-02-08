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

export default function ShareClient({ typeName, typeEmoji, typeTitle, score }: ShareClientProps) {
  return (
    <div className="relative min-h-svh bg-[#06061a] overflow-hidden">
      {/* 배경 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#120e3a] to-[#06061a]" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh px-4 py-12">
        {/* 유형 카드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center max-w-sm w-full"
        >
          <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">FortuneLens AI</p>

          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-7xl block mb-4"
          >
            {typeEmoji}
          </motion.span>

          <h1 className="text-3xl font-medium text-white mb-1">{typeName}</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-6">{typeTitle}</p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white/40 text-sm">종합 운세</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              {score}
            </span>
            <span className="text-white/30 text-sm">/ 100</span>
          </div>

          <p className="text-white/50 text-sm mb-2">
            이 사람은 <span className="text-amber-300">{typeName}</span> 유형이래!
          </p>
          <p className="text-white/35 text-xs mb-8 leading-relaxed">
            너도 해보고 나랑 궁합 맞는지 확인해볼래?<br />
            8가지 유형 중 너는 어떤 유형인지 알아보자!
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium text-sm hover:shadow-[0_0_30px_rgba(245,197,66,0.3)] transition-shadow"
          >
            나도 해보고 궁합 확인하기
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/20 text-xs mt-8"
        >
          약 1분 소요 · 무료
        </motion.p>

        {/* 푸터 */}
        <div className="mt-12 pt-5 border-t border-white/[0.06] w-full max-w-sm text-center">
          <nav className="flex items-center justify-center gap-3 text-white/20 text-[10px]">
            <Link href="/privacy" className="hover:text-white/40 transition-colors">개인정보처리방침</Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-white/40 transition-colors">이용약관</Link>
          </nav>
          <p className="text-white/10 text-[9px] mt-2">© 2026 FortuneLens</p>
        </div>
      </div>
    </div>
  );
}
