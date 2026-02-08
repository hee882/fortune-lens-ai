import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | FortuneLens AI",
  description: "FortuneLens AI 서비스 이용약관입니다.",
};

export default function TermsPage() {
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
        <h1 className="text-2xl font-medium text-white mb-2">이용약관</h1>
        <p className="text-white/30 text-sm mb-8">최종 수정일: 2026년 2월 8일</p>

        <div className="space-y-8 text-sm leading-relaxed text-white/60">
          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제1조 (목적)</h2>
            <p>
              본 약관은 FortuneLens AI(이하 &quot;서비스&quot;)가 제공하는 AI 기반 운세 분석 서비스의 이용 조건 및
              절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제2조 (서비스의 내용)</h2>
            <p>서비스는 다음과 같은 기능을 제공합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/50">
              <li>생년월일 및 성격 분석 기반 맞춤 운세 제공</li>
              <li>운세 유형 분류 및 궁합 분석</li>
              <li>오늘의 운세, 연간 운세, 인생 운세 분석</li>
              <li>데일리 카드 및 오늘의 한마디 제공</li>
              <li>SNS 공유 기능</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제3조 (면책 조항)</h2>
            <p>
              본 서비스에서 제공하는 운세 분석 결과는 <strong className="text-white/70">오락 및 참고 목적</strong>으로만 제공됩니다.
              서비스의 결과를 근거로 한 의사결정에 대해 FortuneLens는 어떠한 법적 책임도 지지 않습니다.
              중요한 결정은 반드시 전문가와 상담하시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제4조 (이용자의 의무)</h2>
            <ul className="list-disc list-inside space-y-1 text-white/50">
              <li>타인의 정보를 도용하여 서비스를 이용해서는 안 됩니다.</li>
              <li>서비스를 악용하거나 비정상적인 방법으로 이용해서는 안 됩니다.</li>
              <li>서비스의 운영을 방해하는 행위를 해서는 안 됩니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제5조 (지적재산권)</h2>
            <p>
              서비스에서 사용하는 디자인, 텍스트, 이미지, 알고리즘 등 모든 콘텐츠에 대한 지적재산권은
              FortuneLens에 귀속됩니다. 무단 복제, 배포, 수정은 금지됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제6조 (서비스의 변경 및 중단)</h2>
            <p>
              FortuneLens는 운영상 또는 기술적 필요에 따라 서비스의 전부 또는 일부를
              변경하거나 중단할 수 있습니다. 이 경우 사전에 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제7조 (광고)</h2>
            <p>
              서비스는 운영을 위해 Google AdSense 등의 광고를 게재할 수 있습니다.
              광고에 대한 책임은 해당 광고주에게 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제8조 (약관의 변경)</h2>
            <p>
              본 약관은 관련 법령에 따라 수정될 수 있으며,
              변경 시 본 페이지를 통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-white/90 font-medium text-base mb-3">제9조 (문의)</h2>
            <p>서비스 이용 관련 문의:</p>
            <p className="mt-2 text-white/40">이메일: contact@fortunelens.ai</p>
          </section>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-white/[0.06] px-4 py-6 text-center">
        <nav className="flex items-center justify-center gap-4 text-white/25 text-[11px] mb-3">
          <Link href="/privacy" className="hover:text-white/50 transition-colors">개인정보처리방침</Link>
          <span className="text-white/10">|</span>
          <span className="text-white/40">이용약관</span>
          <span className="text-white/10">|</span>
          <Link href="/about" className="hover:text-white/50 transition-colors">서비스 소개</Link>
        </nav>
        <p className="text-white/15 text-[10px]">© {new Date().getFullYear()} FortuneLens. All rights reserved.</p>
      </footer>
    </div>
  );
}
