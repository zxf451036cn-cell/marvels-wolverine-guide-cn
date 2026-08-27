import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#facc16", color: "#090a0c", fontSize: 48, fontWeight: 900, fontFamily: "Arial Black, sans-serif", border: "5px solid #d9362b" }}>X</div>,
    size,
  );
}
