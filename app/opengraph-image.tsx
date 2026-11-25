import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tolulope Adegoke: product and software engineer, co-founder of Sabi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/tolulope-profile.jpeg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#fbfbfd",
          color: "#0b0d12",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 28, color: "#1f47d6", letterSpacing: 2 }}>
            PRODUCT &amp; SOFTWARE ENGINEER
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, marginTop: 22, letterSpacing: -3 }}>
            Hi, I&rsquo;m Tolu.
          </div>
          <div style={{ fontSize: 36, color: "#596071", lineHeight: 1.3, marginTop: 28 }}>
            Co-founder of Sabi, AI exam prep used by 500+ students. Computer
            Science at Bowen University.
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 44, fontSize: 26 }}>
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#1f47d6", marginRight: 14 }} />
            tolulope-adegoke.vercel.app
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 340,
            height: 425,
            borderRadius: 28,
            border: "4px solid #0b0d12",
            boxShadow: "14px 14px 0 #1f47d6",
            overflow: "hidden",
            transform: "rotate(3deg)",
          }}
        >
          <img
            src={`data:image/jpeg;base64,${photo}`}
            alt=""
            width={340}
            height={425}
            style={{ objectFit: "cover", objectPosition: "52% center" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
