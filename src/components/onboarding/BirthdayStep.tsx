"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import GlassCard from "@/components/ui/GlassCard";
import CosmicButton from "@/components/ui/CosmicButton";

const MONTHS = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월",
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => currentYear - i);

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export default function BirthdayStep() {
  const { userProfile, setBirthday, nextStep, prevStep } = useOnboardingStore();

  const [year, setYear] = useState<number>(userProfile.birthday?.year ?? 0);
  const [month, setMonth] = useState<number>(userProfile.birthday?.month ?? 0);
  const [day, setDay] = useState<number>(userProfile.birthday?.day ?? 0);

  const maxDays = year && month ? getDaysInMonth(year, month) : 31;
  const days = Array.from({ length: maxDays }, (_, i) => i + 1);
  const isValid = year > 0 && month > 0 && day > 0;

  useEffect(() => {
    if (day > maxDays) setDay(0);
  }, [year, month, day, maxDays]);

  const handleSubmit = () => {
    if (isValid) {
      setBirthday({ year, month, day });
      nextStep();
    }
  };

  const selectStyle = `
    w-full px-4 py-3 rounded-xl appearance-none
    bg-white/5 backdrop-blur-md border border-white/10
    text-white text-center cursor-pointer
    outline-none transition-all duration-300
    hover:border-white/20 focus:border-amber-400/60
    focus:shadow-[0_0_20px_rgba(245,197,66,0.15)]
  `;

  return (
    <GlassCard className="max-w-md mx-auto">
      <div className="space-y-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-400/80 text-sm tracking-widest uppercase"
        >
          Step 2
        </motion.p>
        <h2 className="text-2xl md:text-3xl font-light text-white">
          당신의 여정은<br />언제 시작되었나요?
        </h2>

        <div className="grid grid-cols-3 gap-3">
          <select
            value={year || ""}
            onChange={(e) => setYear(Number(e.target.value))}
            className={selectStyle}
          >
            <option value="" className="bg-[#1a1150] text-white/50">연도</option>
            {YEARS.map((y) => (
              <option key={y} value={y} className="bg-[#1a1150]">
                {y}
              </option>
            ))}
          </select>

          <select
            value={month || ""}
            onChange={(e) => setMonth(Number(e.target.value))}
            className={selectStyle}
          >
            <option value="" className="bg-[#1a1150] text-white/50">월</option>
            {MONTHS.map((m, i) => (
              <option key={i + 1} value={i + 1} className="bg-[#1a1150]">
                {m}
              </option>
            ))}
          </select>

          <select
            value={day || ""}
            onChange={(e) => setDay(Number(e.target.value))}
            className={selectStyle}
          >
            <option value="" className="bg-[#1a1150] text-white/50">일</option>
            {days.map((d) => (
              <option key={d} value={d} className="bg-[#1a1150]">
                {d}일
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 justify-center">
          <CosmicButton variant="ghost" onClick={prevStep}>
            뒤로
          </CosmicButton>
          <CosmicButton onClick={handleSubmit} disabled={!isValid}>
            계속
          </CosmicButton>
        </div>
      </div>
    </GlassCard>
  );
}
