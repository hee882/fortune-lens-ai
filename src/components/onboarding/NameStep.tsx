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
    <GlassCard className="max-w-md mx-auto">
      <div className="space-y-6 text-center" onKeyDown={handleKeyDown}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-400/80 text-sm tracking-widest uppercase"
        >
          Step 1
        </motion.p>
        <h2 className="text-2xl md:text-3xl font-light text-white">
          별이 당신을 어떤 이름으로<br />알고 있나요?
        </h2>
        <GlowInput
          value={userProfile.name}
          onChange={setName}
          placeholder="이름을 입력하세요"
        />
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
