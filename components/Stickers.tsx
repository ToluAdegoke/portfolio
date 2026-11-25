"use client";

import { useRef, useState } from "react";

type Sticker = {
  text: string;
  className: string; // position + colour
  rotate: number;
};

const stickers: Sticker[] = [
  { text: "📍 Ibadan, NG", className: "-left-8 top-6 bg-paper", rotate: -8 },
  { text: "Taking new projects", className: "-right-6 top-[38%] bg-accent text-paper", rotate: 6 },
  { text: "500+ students on Sabi", className: "-left-10 bottom-14 bg-accent-soft", rotate: -4 },
  { text: "🏀 🎧 🚗", className: "-right-3 -bottom-3 bg-paper", rotate: 9 },
];

// Stickers stuck around the portrait. Visitors can drag them about.
export default function Stickers() {
  const [offsets, setOffsets] = useState(() => stickers.map(() => ({ x: 0, y: 0 })));
  const [active, setActive] = useState<number | null>(null);
  const start = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  function onPointerDown(i: number, e: React.PointerEvent<HTMLSpanElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, ox: offsets[i].x, oy: offsets[i].y };
    setActive(i);
  }

  function onPointerMove(i: number, e: React.PointerEvent<HTMLSpanElement>) {
    if (active !== i) return;
    const { x, y, ox, oy } = start.current;
    setOffsets((prev) =>
      prev.map((o, j) => (j === i ? { x: ox + e.clientX - x, y: oy + e.clientY - y } : o)),
    );
  }

  return (
    <>
      {stickers.map((s, i) => (
        <span
          key={s.text}
          className={`sticker ${s.className} ${active === i ? "is-dragging" : ""}`}
          style={{
            translate: `${offsets[i].x}px ${offsets[i].y}px`,
            rotate: `${active === i ? 0 : s.rotate}deg`,
          }}
          onPointerDown={(e) => onPointerDown(i, e)}
          onPointerMove={(e) => onPointerMove(i, e)}
          onPointerUp={() => setActive(null)}
          onPointerCancel={() => setActive(null)}
        >
          {s.text}
        </span>
      ))}
    </>
  );
}
