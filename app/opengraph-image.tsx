import { ImageResponse } from "next/og";

export const alt = "Wolverine 中文情报与攻略档案";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px", color: "#f2efe7", background: "linear-gradient(145deg,#090a0c 55%,#621b17)", fontFamily: "Arial Black, sans-serif", position: "relative" }}>
      <div style={{ display: "flex", color: "#facc16", fontSize: 24, letterSpacing: 8 }}>PS5 / 2026 · 中文情报档案</div>
      <div style={{ display: "flex", marginTop: 20, fontSize: 104, lineHeight: 1, letterSpacing: -5, textShadow: "9px 9px 0 #d9362b" }}>WOLVERINE</div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 36 }}>猎杀之前，先读懂野兽</div>
      <div style={{ display: "flex", marginTop: 22, fontSize: 22, color: "#bab9b4" }}>发售情报 · 新手攻略 · 战斗系统 · 角色能力</div>
      <div style={{ position: "absolute", right: 70, top: 55, display: "flex", flexDirection: "column", color: "#facc16", fontSize: 80, transform: "rotate(-12deg)" }}><span>╱</span><span>╱</span><span>╱</span></div>
    </div>,
    size,
  );
}
