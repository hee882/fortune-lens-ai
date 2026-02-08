import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | FortuneLens AI",
  description: "FortuneLens AI의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
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
        <h1 className="text-2xl font-medium text-white mb-2">개인정보처리방침</h1>
        <p className="text-white/30 text-sm mb-8">최종 수정일: 2026년 2월 8일</p>

        <div className="space-y-8 text-sm leading-relaxed text-white/60">
          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">1. 수집하는 개인정보</h2>
            <p>FortuneLens AI(이하 &quot;서비스&quot;)는 운세 분석을 위해 다음 정보를 수집합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/50">
              <li>이름 (닉네임)</li>
              <li>생년월일 (연, 월, 일)</li>
              <li>성격 질문 응답 (5개 선택지)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">2. 개인정보의 처리 목적</h2>
            <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/50">
              <li>맞춤형 운세 분석 결과 생성</li>
              <li>운세 유형 분류 및 궁합 분석</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">3. 개인정보의 보관 및 처리</h2>
            <p>
              본 서비스는 입력된 정보를 사용자의 브라우저(클라이언트 측)에서만 처리하며,
              별도의 서버에 저장하지 않습니다. 브라우저를 닫거나 새로고침하면 입력된 정보는 자동으로 삭제됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">4. 쿠키 및 추적 기술</h2>
            <p>
              서비스 개선 및 광고 제공을 위해 Google Analytics, Google AdSense 등의 제3자 서비스를 사용할 수 있으며,
              이러한 서비스는 쿠키를 사용할 수 있습니다. 사용자는 브라우저 설정에서 쿠키를 관리할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">5. 제3자 제공</h2>
            <p>
              수집된 개인정보는 제3자에게 제공되지 않습니다. 다만, 법률에 의해 요구되는 경우는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">6. 이용자의 권리</h2>
            <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/50">
              <li>개인정보 열람, 수정, 삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>서비스 이용 중단 (브라우저 종료)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">7. 아동의 개인정보 보호</h2>
            <p>
              본 서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
              만 14세 미만 아동의 개인정보가 수집된 것이 확인될 경우 즉시 삭제합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">8. 개인정보처리방침의 변경</h2>
            <p>
              본 방침은 관련 법령 및 서비스 변경에 따라 수정될 수 있으며,
              변경 시 본 페이지를 통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">9. 문의처</h2>
            <p>
              개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요.
            </p>
            <p className="mt-2 text-white/40">
              이메일: contact@fortunelens.ai
            </p>
          </section>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-white/[0.06] px-4 py-6 text-center">
        <nav className="flex items-center justify-center gap-4 text-white/25 text-[11px] mb-3">
          <span className="text-white/40">개인정보처리방침</span>
          <span className="text-white/10">|</span>
          <Link href="/terms" className="hover:text-white/50 transition-colors">이용약관</Link>
          <span className="text-white/10">|</span>
          <Link href="/about" className="hover:text-white/50 transition-colors">서비스 소개</Link>
        </nav>
        <p className="text-white/15 text-[10px]">© {new Date().getFullYear()} FortuneLens. All rights reserved.</p>
      </footer>
    </div>
  );
}
