import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a2e",
};

// CF_PAGES_URL: Cloudflare Pages 빌드 시 자동 제공 (https://... 형태)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  || process.env.CF_PAGES_URL
  || "https://fortune-lens-ai.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FortuneLens AI - AI 운세 분석",
  description: "AI 렌즈로 들여다보는 당신의 운명. 이름과 생년월일로 개인화된 운세를 확인하세요.",
  keywords: ["운세", "AI 운세", "별자리", "수비학", "fortune", "horoscope", "FortuneLens"],
  openGraph: {
    title: "FortuneLens AI - 당신의 운명을 들여다보세요",
    description: "생년월일과 5가지 선택으로 AI가 분석하는 맞춤 운세. 오늘의 운세부터 인생 운세까지!",
    type: "website",
    siteName: "FortuneLens AI",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "FortuneLens AI - 당신의 운명을 들여다보세요",
    description: "생년월일과 5가지 선택으로 AI가 분석하는 맞춤 운세. 나의 운세 유형은?",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
