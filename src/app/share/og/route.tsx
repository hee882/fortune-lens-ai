import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

const TYPE_DATA: Record<string, { name: string; emoji: string; title: string; gradient: string; color: string }> = {
  pioneer: { name: "별의 개척자", emoji: "⚡", title: "Star Pioneer", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", color: "#f59e0b" },
  healer: { name: "달빛 치유사", emoji: "🌙", title: "Moonlight Healer", gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)", color: "#8b5cf6" },
  creator: { name: "불꽃 창조자", emoji: "🔥", title: "Flame Creator", gradient: "linear-gradient(135deg, #ef4444, #f97316)", color: "#ef4444" },
  sage: { name: "숲의 현자", emoji: "🌿", title: "Forest Sage", gradient: "linear-gradient(135deg, #22c55e, #14b8a6)", color: "#22c55e" },
  adventurer: { name: "바람의 모험가", emoji: "🌊", title: "Wind Adventurer", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", color: "#06b6d4" },
  oracle: { name: "수정 예언자", emoji: "🔮", title: "Crystal Oracle", gradient: "linear-gradient(135deg, #a78bfa, #c084fc)", color: "#a78bfa" },
  commander: { name: "황금 지휘자", emoji: "👑", title: "Golden Commander", gradient: "linear-gradient(135deg, #f59e0b, #eab308)", color: "#f59e0b" },
  dreamer: { name: "별빛 몽상가", emoji: "✨", title: "Starlight Dreamer", gradient: "linear-gradient(135deg, #ec4899, #f472b6)", color: "#ec4899" },
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
          flexDirection: "row",
          background: "linear-gradient(135deg, #0a0a2e 0%, #120e3a 40%, #1a103d 70%, #06061a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 배경 장식 - 글로우 */}
        <div style={{
          position: "absolute", top: "-150px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${typeInfo.color}22, transparent 70%)`,
          display: "flex",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", left: "-50px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)",
          display: "flex",
        }} />

        {/* 별 장식 */}
        {[
          { top: "40px", left: "60px", size: "4px", opacity: "0.6" },
          { top: "80px", right: "120px", size: "3px", opacity: "0.4" },
          { top: "200px", left: "150px", size: "5px", opacity: "0.5" },
          { bottom: "120px", right: "80px", size: "4px", opacity: "0.3" },
          { top: "100px", left: "400px", size: "3px", opacity: "0.5" },
          { bottom: "180px", left: "80px", size: "3px", opacity: "0.4" },
          { top: "50px", right: "300px", size: "4px", opacity: "0.3" },
        ].map((star, i) => (
          <div key={i} style={{
            position: "absolute", ...star,
            width: star.size, height: star.size,
            borderRadius: "50%", background: "white",
            display: "flex",
          }} />
        ))}

        {/* 왼쪽 - 유형 정보 */}
        <div style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "50px 20px 50px 60px",
        }}>
          {/* 로고 + 뱃지 */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{
              display: "flex", color: "rgba(255,255,255,0.4)", fontSize: "14px",
              letterSpacing: "4px", textTransform: "uppercase" as const,
            }}>
              FortuneLens AI
            </div>
            <div style={{
              display: "flex", padding: "4px 12px", borderRadius: "20px",
              background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)",
              color: "#f5c542", fontSize: "12px",
            }}>
              1분 무료 테스트
            </div>
          </div>

          {/* 이모지 + 유형 이름 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
            <span style={{ fontSize: "64px", display: "flex" }}>{typeInfo.emoji}</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "44px", fontWeight: "bold", color: "white", display: "flex" }}>
                {typeInfo.name}
              </span>
              <span style={{ display: "flex", color: "rgba(255,255,255,0.35)", fontSize: "16px", letterSpacing: "3px" }}>
                {typeInfo.title.toUpperCase()}
              </span>
            </div>
          </div>

          {/* 점수 바 */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            marginTop: "20px", marginBottom: "24px",
          }}>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", display: "flex" }}>종합</span>
            <div style={{
              display: "flex", width: "200px", height: "8px", borderRadius: "10px",
              background: "rgba(255,255,255,0.08)", overflow: "hidden",
            }}>
              <div style={{
                display: "flex", width: `${Math.min(Number(score), 100) * 2}px`, height: "8px",
                borderRadius: "10px", backgroundImage: typeInfo.gradient,
              }} />
            </div>
            <span style={{
              fontSize: "32px", fontWeight: "bold", display: "flex",
              backgroundImage: typeInfo.gradient, backgroundClip: "text", color: "transparent",
            }}>
              {score}
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px", display: "flex" }}>/ 100</span>
          </div>

          {/* 참여자 수 */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            color: "rgba(255,255,255,0.35)", fontSize: "14px",
          }}>
            <span style={{ display: "flex" }}>👥</span>
            <span style={{ display: "flex" }}>지금까지 12,847명이 참여했어요</span>
          </div>
        </div>

        {/* 오른쪽 - CTA 영역 */}
        <div style={{
          width: "420px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 60px 50px 20px",
        }}>
          {/* 궁합 카드 */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            background: "rgba(255,255,255,0.04)", borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "32px 40px", width: "100%",
          }}>
            <div style={{
              display: "flex", padding: "6px 16px", borderRadius: "20px",
              background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)",
              color: "#f5c542", fontSize: "13px", marginBottom: "20px",
            }}>
              궁합 테스트
            </div>

            <div style={{ display: "flex", fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "12px", textAlign: "center" }}>
              이 사람의 유형은
            </div>

            <div style={{
              display: "flex", fontSize: "28px", fontWeight: "bold", color: "white",
              marginBottom: "16px",
            }}>
              {typeInfo.emoji} {typeInfo.name}
            </div>

            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: "4px", marginBottom: "24px",
            }}>
              <span style={{ display: "flex", fontSize: "18px", color: "rgba(255,255,255,0.7)" }}>
                나랑 궁합이 맞을까?
              </span>
              <span style={{ display: "flex", fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
                8가지 유형 중 나는 뭘까?
              </span>
            </div>

            {/* CTA 버튼 */}
            <div style={{
              display: "flex", padding: "14px 32px", borderRadius: "16px",
              backgroundImage: "linear-gradient(135deg, #f59e0b, #eab308)",
              color: "#000", fontSize: "16px", fontWeight: "bold",
            }}>
              나도 무료로 해보기 →
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
