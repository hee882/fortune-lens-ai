"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import { questions } from "@/lib/questions";
import GlassCard from "@/components/ui/GlassCard";
import CosmicButton from "@/components/ui/CosmicButton";

const traitLabels: Record<string, string> = {
  energetic: "열정적인",
  intuitive: "직관적인",
  intellectual: "사색적인",
  grounded: "안정적인",
  introspective: "내면 지향적인",
  spontaneous: "즉흥적인",
  creative: "창의적인",
  social: "사교적인",
  ambitious: "야심찬",
  peaceful: "평화로운",
  driven: "추진력 있는",
  explorer: "탐험가적인",
  empathetic: "공감 능력이 뛰어난",
  analytical: "분석적인",
  storyteller: "이야기꾼",
  motivator: "동기부여자",
  visionary: "비전을 가진",
  harmonious: "조화로운",
  catalyst: "변화를 이끄는",
  patient: "인내심 깊은",
};

function getZodiacSign(month: number, day: number): { name: string; emoji: string } {
  const signs = [
    { name: "염소자리", emoji: "♑", endMonth: 1, endDay: 19 },
    { name: "물병자리", emoji: "♒", endMonth: 2, endDay: 18 },
    { name: "물고기자리", emoji: "♓", endMonth: 3, endDay: 20 },
    { name: "양자리", emoji: "♈", endMonth: 4, endDay: 19 },
    { name: "황소자리", emoji: "♉", endMonth: 5, endDay: 20 },
    { name: "쌍둥이자리", emoji: "♊", endMonth: 6, endDay: 21 },
    { name: "게자리", emoji: "♋", endMonth: 7, endDay: 22 },
    { name: "사자자리", emoji: "♌", endMonth: 8, endDay: 22 },
    { name: "처녀자리", emoji: "♍", endMonth: 9, endDay: 22 },
    { name: "천칭자리", emoji: "♎", endMonth: 10, endDay: 23 },
    { name: "전갈자리", emoji: "♏", endMonth: 11, endDay: 22 },
    { name: "궁수자리", emoji: "♐", endMonth: 12, endDay: 21 },
    { name: "염소자리", emoji: "♑", endMonth: 12, endDay: 31 },
  ];
  for (const sign of signs) {
    if (month < sign.endMonth || (month === sign.endMonth && day <= sign.endDay)) {
      return { name: sign.name, emoji: sign.emoji };
    }
  }
  return { name: "염소자리", emoji: "♑" };
}

export default function ResultStep() {
  const { userProfile, reset } = useOnboardingStore();
  const { name, birthday, traits, answers } = userProfile;

  const zodiac = birthday ? getZodiacSign(birthday.month, birthday.day) : null;

  const selectedAnswers = questions.map((q) => {
    const selectedId = answers[q.id];
    const option = q.options.find((o) => o.id === selectedId);
    return { question: q.text, answer: option };
  });

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <p className="text-amber-400/80 text-sm tracking-widest uppercase">
          분석 완료
        </p>
        <h2 className="text-3xl font-light text-white">
          <span className="text-amber-400">{name}</span>님의 프로필
        </h2>
        {zodiac && (
          <p className="text-white/50 text-lg">
            {zodiac.emoji} {zodiac.name} &middot; {birthday?.year}년 {birthday?.month}월 {birthday?.day}일
          </p>
        )}
      </motion.div>

      {/* 성격 태그 */}
      <GlassCard>
        <h3 className="text-amber-400 text-sm tracking-widest uppercase mb-4">
          당신의 성격 키워드
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {traits.map((trait, i) => (
            <motion.span
              key={trait}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-sm"
            >
              {traitLabels[trait] || trait}
            </motion.span>
          ))}
        </div>
      </GlassCard>

      {/* 선택 요약 */}
      <GlassCard>
        <h3 className="text-amber-400 text-sm tracking-widest uppercase mb-4">
          당신의 선택
        </h3>
        <div className="space-y-3">
          {selectedAnswers.map(({ question, answer }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 text-left"
            >
              <span className="text-xl">{answer?.emoji}</span>
              <div>
                <p className="text-white/40 text-xs">{question}</p>
                <p className="text-white/80 text-sm">{answer?.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* 안내 메시지 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center space-y-4"
      >
        <p className="text-white/30 text-sm">
          상세 운세 분석 기능은 곧 업데이트됩니다
        </p>
        <CosmicButton variant="ghost" onClick={reset}>
          처음부터 다시하기
        </CosmicButton>
      </motion.div>
    </div>
  );
}
