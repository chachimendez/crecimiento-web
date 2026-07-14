"use client";

import { useEffect, useRef, useState } from "react";

export default function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.8 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
      style={{ backgroundColor: "rgba(250,250,250,0.15)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: `${progress * 100}%`,
          backgroundColor: "var(--potential-yellow)",
          boxShadow: "0 0 10px rgba(255, 233, 8, 0.5)",
          transition: "height 0.2s linear",
        }}
      />
    </div>
  );
}
