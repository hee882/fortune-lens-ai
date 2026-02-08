import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 소개 | FortuneLens AI",
  description: "FortuneLens AI는 생년월일과 성격 분석을 통해 AI가 운명을 들여다보는 서비스입니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-[#06061a] text-white/80">
      {/* 헤더 */}
      <header className="border-b border-white/[0.06] px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-amber-400 font-bold text-lg tracking-tight hover:text-amber-300 transition-colors">
            FortuneLens
          </Link>
          <Link href="/" className="text-white/40 text-sm hover:text-white/60 transition-colors">
            ← 홈으로
          </Link>
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-medium text-white mb-2">FortuneLens AI</h1>
        <p className="text-amber-400/60 text-sm mb-8">AI-Powered Fortune Analysis</p>

        <div className="space-y-8 text-sm leading-relaxed text-white/60">
          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">서비스 소개</h2>
            <p>
              FortuneLens AI는 당신의 생년월일과 성격 선택을 분석하여
              별자리, 수비학, 사주를 결합한 AI 기반 맞춤 운세를 제공하는 서비스입니다.
            </p>
            <p className="mt-3">
              간단한 5가지 직관적 질문에 답하면, AI가 당신만의 운명 리포트를 생성합니다.
              오늘의 운세부터 2026년 연간 운세, 인생 전체를 관통하는 사주 분석까지 —
              당신의 운명을 다각도로 들여다봅니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제공 기능</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { emoji: "🔮", title: "AI 운세 분석", desc: "이름 + 생년월일 + 성격 맞춤 분석" },
                { emoji: "📅", title: "오늘의 운세", desc: "매일 새로운 8개 카테고리 분석" },
                { emoji: "🗓️", title: "2026 연간 운세", desc: "올해의 흐름과 핵심 키워드" },
                { emoji: "🌌", title: "인생 운세", desc: "별자리·수비학·사주 통합 분석" },
                { emoji: "💫", title: "운세 유형", desc: "8가지 아키타입 중 나는 어떤 유형?" },
                { emoji: "💕", title: "궁합 분석", desc: "8개 유형 간 궁합 확인" },
                { emoji: "🃏", title: "데일리 카드", desc: "매일 바뀌는 미니 타로 카드" },
                { emoji: "📲", title: "SNS 공유", desc: "친구와 공유하고 궁합 비교" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
                >
                  <span className="text-xl">{f.emoji}</span>
                  <p className="text-white/80 text-sm font-medium mt-2">{f.title}</p>
                  <p className="text-white/35 text-xs mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">8가지 운세 유형</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { emoji: "⚡", name: "별의 개척자" },
                { emoji: "🌙", name: "달빛 치유사" },
                { emoji: "🔥", name: "불꽃 창조자" },
                { emoji: "🌿", name: "숲의 현자" },
                { emoji: "🌊", name: "바람의 모험가" },
                { emoji: "🔮", name: "수정 예언자" },
                { emoji: "👑", name: "황금 지휘자" },
                { emoji: "✨", name: "별빛 몽상가" },
              ].map((t) => (
                <div key={t.name} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 text-center">
                  <span className="text-2xl">{t.emoji}</span>
                  <p className="text-white/60 text-xs mt-1">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">기술 스택</h2>
            <p>
              Next.js, React, Tailwind CSS, Framer Motion, Zustand 등
              최신 웹 기술로 구축되었습니다. 서버 의존 없이 클라이언트에서 빠르게 동작하며,
              개인정보를 서버에 저장하지 않아 안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">이용 안내</h2>
            <ul className="list-disc list-inside space-y-1 text-white/50">
              <li>소요 시간: 약 1분</li>
              <li>비용: 무료</li>
              <li>회원가입: 불필요</li>
              <li>지원 기기: 모바일 및 데스크톱 브라우저</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">문의</h2>
            <p>서비스 관련 문의 및 피드백:</p>
            <p className="mt-2 text-white/40">이메일: contact@fortunelens.ai</p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium text-sm hover:shadow-[0_0_30px_rgba(245,197,66,0.3)] transition-shadow"
          >
            운세 보러 가기
          </Link>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-white/[0.06] px-4 py-6 text-center mt-8">
        <nav className="flex items-center justify-center gap-4 text-white/25 text-[11px] mb-3">
          <Link href="/privacy" className="hover:text-white/50 transition-colors">개인정보처리방침</Link>
          <span className="text-white/10">|</span>
          <Link href="/terms" className="hover:text-white/50 transition-colors">이용약관</Link>
          <span className="text-white/10">|</span>
          <span className="text-white/40">서비스 소개</span>
        </nav>
        <p className="text-white/15 text-[10px]">© {new Date().getFullYear()} FortuneLens. All rights reserved.</p>
      </footer>
    </div>
  );
}
