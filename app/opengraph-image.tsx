import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ByteMoz — Conectamos tecnologia.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(join(process.cwd(), "public/images/bytemoz-mark.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#050a19",
          backgroundImage:
            "linear-gradient(rgba(150,168,210,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(150,168,210,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#e9eef8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={84} height={84} alt="" />
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: -2 }}>
            <span>Byte</span>
            <span style={{ color: "#2ccb6e" }}>moz</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 900 }}>
            Transformamos ideias em soluções digitais.
          </div>
          <div style={{ marginTop: 28, fontSize: 24, letterSpacing: 6, color: "#7aa0ff" }}>
            CONECTAMOS TECNOLOGIA. · MOÇAMBIQUE
          </div>
        </div>
      </div>
    ),
    size,
  );
}
