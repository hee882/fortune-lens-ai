"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-20 w-full py-6 px-4">
      <div className="max-w-lg mx-auto">
        <div className="border-t border-white/[0.06] pt-5">
          {/* 로고 */}
          <p className="text-center text-white/20 text-[10px] tracking-[0.2em] uppercase mb-3">
            FortuneLens AI
          </p>

          {/* 링크 */}
          <nav className="flex items-center justify-center gap-4 text-white/25 text-[11px]">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              개인정보처리방침
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              이용약관
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/about" className="hover:text-white/50 transition-colors">
              서비스 소개
            </Link>
          </nav>

          {/* 카피라이트 */}
          <p className="text-center text-white/15 text-[10px] mt-3">
            © {new Date().getFullYear()} FortuneLens. All rights reserved.
          </p>

          {/* 면책 */}
          <p className="text-center text-white/10 text-[9px] mt-2 leading-relaxed max-w-sm mx-auto">
            본 서비스의 운세 결과는 오락 목적으로 제공되며, 전문적인 조언을 대체하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
