"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/store";
import GlassCard from "@/components/ui/GlassCard";
import GlowInput from "@/components/ui/GlowInput";
import CosmicButton from "@/components/ui/CosmicButton";

export default function NameStep() {
  const { userProfile, setName, nextStep, prevStep } = useOnboardingStore();
  const isValid = userProfile.name.trim().length > 0;

  const handleSubmit = () => {
    if (isValid) nextStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <GlassCard className="max-w-sm mx-auto w-full" glow>
      <div className="space-y-7 text-center" onKeyDown={handleKeyDown}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-amber-400/70 text-xs tracking-[0.25em] uppercase font-medium">
            Step 1 of 7
          </p>
          <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
            별이 당신을 어떤 이름으로<br />알고 있나요?
          </h2>
        </motion.div>
        <GlowInput
          value={userProfile.name}
          onChange={setName}
          placeholder="이름을 입력하세요"
        />
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
