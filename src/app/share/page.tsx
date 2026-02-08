import type { Metadata } from "next";
import ShareClient from "./ShareClient";

const TYPE_NAMES: Record<string, { name: string; emoji: string; title: string }> = {
  pioneer: { name: "별의 개척자", emoji: "⚡", title: "Star Pioneer" },
  healer: { name: "달빛 치유사", emoji: "🌙", title: "Moonlight Healer" },
  creator: { name: "불꽃 창조자", emoji: "🔥", title: "Flame Creator" },
  sage: { name: "숲의 현자", emoji: "🌿", title: "Forest Sage" },
  adventurer: { name: "바람의 모험가", emoji: "🌊", title: "Wind Adventurer" },
  oracle: { name: "수정 예언자", emoji: "🔮", title: "Crystal Oracle" },
  commander: { name: "황금 지휘자", emoji: "👑", title: "Golden Commander" },
  dreamer: { name: "별빛 몽상가", emoji: "✨", title: "Starlight Dreamer" },
};

interface SharePageProps {
  searchParams: Promise<{ t?: string; s?: string; z?: string }>;
}

export async function generateMetadata({ searchParams }: SharePageProps): Promise<Metadata> {
  const params = await searchParams;
  const typeId = params.t || "pioneer";
  const score = params.s || "80";
  const typeInfo = TYPE_NAMES[typeId] || TYPE_NAMES.pioneer;

  const title = `나는 ${typeInfo.emoji} ${typeInfo.name} 유형! 너도 해보고 우리 궁합 확인해봐`;
  const description = `종합 ${score}점 · ${typeInfo.name}(${typeInfo.title}) 유형이래! 너의 유형은 뭔지 해보고 나랑 궁합 맞는지 확인해볼래? 🔮`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "FortuneLens AI",
      images: [
        {
          url: `/share/og?t=${typeId}&s=${score}`,
          width: 1200,
          height: 630,
          alt: `FortuneLens - ${typeInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/share/og?t=${typeId}&s=${score}`],
    },
  };
}

export default async function SharePage({ searchParams }: SharePageProps) {
  const params = await searchParams;
  const typeId = params.t || "pioneer";
  const score = params.s || "80";
  const typeInfo = TYPE_NAMES[typeId] || TYPE_NAMES.pioneer;

  return <ShareClient typeId={typeId} typeName={typeInfo.name} typeEmoji={typeInfo.emoji} typeTitle={typeInfo.title} score={score} />;
}
