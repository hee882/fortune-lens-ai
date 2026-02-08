import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FortuneLens AI - AI 운세 분석",
  description: "AI 렌즈로 들여다보는 당신의 운명. 이름과 생년월일로 개인화된 운세를 확인하세요.",
  keywords: ["운세", "AI 운세", "별자리", "수비학", "fortune", "horoscope", "FortuneLens"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
