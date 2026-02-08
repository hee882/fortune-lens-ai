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

  return (
    <GlassCard className="max-w-sm mx-auto w-full" glow>
      <div className="space-y-7 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-amber-400/70 text-xs tracking-[0.25em] uppercase font-medium">
            Step 2 of 7
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
            당신의 여정은<br />언제 시작되었나요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-2.5">
          {[
            { value: year, setter: setYear, placeholder: "연도", options: YEARS.map(y => ({ v: y, l: String(y) })) },
            { value: month, setter: setMonth, placeholder: "월", options: MONTHS.map((m, i) => ({ v: i + 1, l: m })) },
            { value: day, setter: setDay, placeholder: "일", options: days.map(d => ({ v: d, l: `${d}일` })) },
          ].map(({ value, setter, placeholder, options }) => (
            <select
              key={placeholder}
              value={value || ""}
              onChange={(e) => setter(Number(e.target.value))}
              className="
                w-full px-3 py-3.5 rounded-xl appearance-none
                bg-white/[0.04] border border-white/[0.08]
                text-white text-center text-sm cursor-pointer
                outline-none transition-all duration-300
                hover:border-white/[0.15]
                focus:border-amber-400/50 focus:shadow-[0_0_20px_rgba(245,197,66,0.1)]
                pr-8
              "
            >
              <option value="" className="bg-[#1a1150] text-white/40">{placeholder}</option>
              {options.map(({ v, l }) => (
                <option key={v} value={v} className="bg-[#1a1150]">{l}</option>
              ))}
            </select>
          ))}
        </div>

        <div className="flex gap-3 justify-center pt-1">
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
