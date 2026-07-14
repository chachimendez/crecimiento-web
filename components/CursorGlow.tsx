"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -999, y: -999 });
  const target = useRef({ x: -999, y: -999 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;

    if (reduced) {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${window.innerWidth - 200}px, -150px)`;
      }
      return;
    }

    if (touch) return;

    const half = 350;
    pos.current = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.2 };
    target.current = { ...pos.current };

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${pos.current.x - half}px, ${pos.current.y - half}px)`;
    }

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.06;
      pos.current.y += (target.current.y - pos.current.y) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - half}px, ${pos.current.y - half}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Desktop: follows the cursor across the whole page */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed hidden md:block"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(253,240,126,0.65) 0%, rgba(255,233,8,0.25) 45%, transparent 70%)",
          filter: "blur(80px)",
          top: 0,
          left: 0,
          zIndex: -1,
          willChange: "transform",
        }}
      />
      {/* Mobile: slow drift */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed md:hidden glow-drift"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(253,240,126,0.55) 0%, rgba(255,233,8,0.18) 45%, transparent 70%)",
          filter: "blur(60px)",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </>
  );
}
