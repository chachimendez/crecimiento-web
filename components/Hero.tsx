"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getDict, type Lang } from "@/lib/i18n";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

function Stat({
  target,
  label,
  locale,
}: {
  target: number;
  label: string;
  locale: string;
}) {
  const value = useCountUp(target);
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span
        className="text-4xl md:text-5xl tabular-nums"
        style={{ fontWeight: 700, color: "var(--foundation-black)" }}
      >
        +{value.toLocaleString(locale)}
      </span>
      <span
        className="text-xs leading-snug"
        style={{ color: "var(--transition-gray)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).hero;
  const locale = lang === "es" ? "es-AR" : "en-US";
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-9 text-center pt-24 pb-4 w-full max-w-5xl mx-auto rise-in">
        {/* Logo lockup: sun (animated) + wordmark, proportions from the official lockup */}
        {/* Mobile: the lockup scales with the viewport (sun keeps the official
            ~2.15:1 height ratio against the wordmark) so it never overflows. */}
        <div className="flex items-center gap-3 md:gap-8 max-w-full">
          <Image
            src="/assets/sun-black.png"
            alt=""
            aria-hidden="true"
            width={621}
            height={622}
            priority
            className="sun-spin w-[16vw] h-[16vw] max-w-[62px] max-h-[62px] md:w-36 md:h-36 md:max-w-none md:max-h-none shrink-0"
          />
          <Image
            src="/assets/logo-black.png"
            alt="Crecimiento"
            width={2087}
            height={251}
            priority
            className="w-[62vw] max-w-[240px] h-auto md:w-auto md:max-w-none md:h-[67px]"
          />
        </div>

        {/* Definition (display version: subject is the wordmark above) */}
        <p
          className="max-w-[46ch] text-lg md:text-xl leading-relaxed"
          style={{
            fontWeight: 300,
            color: "var(--foundation-black)",
            textWrap: "balance",
          }}
        >
          {t.defPre}
          <strong style={{ fontWeight: 600 }}>{t.defBold}</strong>
          {t.defMid}
          <em style={{ fontWeight: 600 }}>{t.defBoldItalic}</em>
          {t.defPost}
        </p>
      </div>

      {/* Numbers strip: label + 4 stats, one line on desktop, no divider */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-14 pb-10 rise-in">
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[auto_1fr_1fr_1fr_1fr] md:items-baseline md:gap-6">
          <p
            className="text-2xl md:text-[26px] whitespace-nowrap leading-none md:pr-10"
            style={{ color: "var(--foundation-black)" }}
          >
            <strong style={{ fontWeight: 700 }}>{t.impactBold}</strong>{" "}
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>
              {t.impactItalic}
            </em>
          </p>
          <div className="contents max-md:grid max-md:grid-cols-2 max-md:gap-8">
            {t.stats.map((s) => (
              <Stat key={s.label} {...s} locale={locale} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue (internal anchor, not a CTA) */}
      <button
        type="button"
        onClick={scrollToNext}
        aria-label={t.scrollAria}
        className="relative z-10 flex flex-col items-center gap-2 pb-10 cursor-pointer bg-transparent border-0 cta-float"
        style={{ color: "var(--foundation-black)" }}
      >
        <span className="text-xs tracking-[0.25em]" style={{ fontWeight: 500 }}>
          {t.discover}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
