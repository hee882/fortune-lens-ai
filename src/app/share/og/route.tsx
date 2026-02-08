import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

const TYPE_DATA: Record<string, { name: string; emoji: string; title: string; gradient: string }> = {
  pioneer: { name: "별의 개척자", emoji: "⚡", title: "Star Pioneer", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)" },
  healer: { name: "달빛 치유사", emoji: "🌙", title: "Moonlight Healer", gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)" },
  creator: { name: "불꽃 창조자", emoji: "🔥", title: "Flame Creator", gradient: "linear-gradient(135deg, #ef4444, #f97316)" },
  sage: { name: "숲의 현자", emoji: "🌿", title: "Forest Sage", gradient: "linear-gradient(135deg, #22c55e, #14b8a6)" },
  adventurer: { name: "바람의 모험가", emoji: "🌊", title: "Wind Adventurer", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)" },
  oracle: { name: "수정 예언자", emoji: "🔮", title: "Crystal Oracle", gradient: "linear-gradient(135deg, #a78bfa, #c084fc)" },
  commander: { name: "황금 지휘자", emoji: "👑", title: "Golden Commander", gradient: "linear-gradient(135deg, #f59e0b, #eab308)" },
  dreamer: { name: "별빛 몽상가", emoji: "✨", title: "Starlight Dreamer", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const typeId = searchParams.get("t") || "pioneer";
  const score = searchParams.get("s") || "80";
  const typeInfo = TYPE_DATA[typeId] || TYPE_DATA.pioneer;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #0a0a2e 0%, #120e3a 50%, #06061a 100%)",
          position: "relative",
        }}
      >
        {/* 글로우 효과 */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
          }}
        />

        {/* 로고 */}
        <div style={{ display: "flex", color: "rgba(255,255,255,0.3)", fontSize: "18px", letterSpacing: "6px", marginBottom: "20px" }}>
          FORTUNELENS AI
        </div>

        {/* 이모지 */}
        <div style={{ fontSize: "80px", marginBottom: "16px", display: "flex" }}>
          {typeInfo.emoji}
        </div>

        {/* 유형 이름 */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "8px",
            display: "flex",
          }}
        >
          {typeInfo.name}
        </div>

        {/* 영문명 */}
        <div style={{ display: "flex", color: "rgba(255,255,255,0.4)", fontSize: "18px", letterSpacing: "4px", marginBottom: "30px" }}>
          {typeInfo.title.toUpperCase()}
        </div>

        {/* 점수 */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "20px" }}>종합 운세</span>
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              backgroundImage: typeInfo.gradient,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {score}
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "20px" }}>/ 100</span>
        </div>

        {/* 하단 CTA */}
        <div style={{
          display: "flex",
          color: "rgba(245,197,66,0.8)",
          fontSize: "18px",
          marginTop: "32px",
          letterSpacing: "1px",
        }}>
          너도 해보고 나랑 궁합 맞는지 확인해봐! 🔮
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
