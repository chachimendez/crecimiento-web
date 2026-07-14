import Image from "next/image";
import Reveal from "./Reveal";
import { getDict, type Lang } from "@/lib/i18n";

export default function WhatWeDo({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).whatWeDo;

  return (
    <section id="what-we-do" className="relative px-6 pt-8 md:pt-10 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Reveal className="w-full">
          <h2
            className="text-center text-3xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight w-full"
            style={{
              color: "var(--foundation-black)",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            {t.statementPre}
            <span style={{ color: "var(--ambition-blue)" }}>
              {t.statementBlue}
            </span>
          </h2>
        </Reveal>

        <p
          className="mt-10 text-center text-base md:text-lg leading-relaxed max-w-3xl"
          style={{ fontWeight: 300, color: "var(--foundation-black)" }}
        >
          {t.bodyPre}
          <strong style={{ fontWeight: 600 }}>{t.bodyBold}</strong>
        </p>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[color:var(--adaptable-gray)]">
          {t.fronts.map(({ tag, img, alt, text }) => (
            <div key={tag} className="py-8 first:pt-0 last:pb-0 md:py-0 md:px-8">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] mb-5">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p
                className="text-sm md:text-base tracking-[0.15em] mb-3"
                style={{ color: "var(--ambition-blue)", fontWeight: 700 }}
              >
                {tag}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontWeight: 300, color: "var(--foundation-black)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
