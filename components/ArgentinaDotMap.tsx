"use client";

import { useEffect, useRef, useState } from "react";
import data from "./argentina-dots.json";

const CASCADE_MS = 2000;
const TWINKLE_EVERY_MS = 1500;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ArgentinaDotMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(false);
  const [lit, setLit] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setSettled(true);
      return;
    }

    let order = shuffle(data.cities);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      setSettled(true);
      if (data.cities.length === 0) return;
      setLit(order[0]);
      i = 1;
      interval = setInterval(() => {
        if (i >= order.length) {
          order = shuffle(data.cities);
          i = 0;
        }
        setLit(order[i]);
        i++;
      }, TWINKLE_EVERY_MS);
    }, CASCADE_MS);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [inView]);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${data.W} ${data.H}`}
      className={`dot-map w-full h-auto max-w-[360px] mx-auto ${inView ? "in-view" : ""} ${settled ? "settled" : ""}`}
      role="img"
      aria-label="Dot map of Argentina"
    >
      {data.dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          className={lit === i ? "lit" : undefined}
          style={{
            animationDelay: `${((d.y / data.H) * 1.1 + (((i * 7919) % 100) / 100) * 0.3).toFixed(2)}s`,
          }}
        />
      ))}
    </svg>
  );
}
