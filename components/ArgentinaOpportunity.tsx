import ArgentinaDotMap from "./ArgentinaDotMap";
import { getDict, type Lang } from "@/lib/i18n";

export default function ArgentinaOpportunity({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).opportunity;

  return (
    <section id="why-argentina" className="relative px-6 pt-20 md:pt-24 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-[0.25em]"
          style={{ fontWeight: 500, color: "var(--transition-gray)" }}
        >
          {t.eyebrow}
        </p>

        <h2
          className="mt-4 text-5xl md:text-7xl leading-[1.05] tracking-tight"
          style={{ color: "var(--foundation-black)" }}
        >
          <span style={{ fontWeight: 400 }}>{t.titleLight}</span>
          <span style={{ fontWeight: 700 }}>{t.titleBold}</span>
          <br />
          <em
            style={{
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--ambition-blue)",
            }}
          >
            {t.titleItalicBlue}
          </em>
        </h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 md:gap-16 items-stretch">
          <ArgentinaDotMap />

          <div className="flex flex-col justify-between gap-10 md:py-14">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontWeight: 300, color: "var(--foundation-black)" }}
            >
              {t.introPre}
              <strong style={{ fontWeight: 600 }}>{t.introBold}</strong>
            </p>

            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[color:var(--adaptable-gray)]">
              {t.pillars.map(({ tag, text }) => (
                <div
                  key={tag}
                  className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6"
                >
                  <p
                    className="text-sm leading-snug tracking-[0.15em] mb-3 md:min-h-[2.75em]"
                    style={{ color: "var(--ambition-blue)", fontWeight: 700 }}
                  >
                    {tag}
                  </p>
                  <p
                    className="text-sm md:text-[15px] leading-relaxed"
                    style={{ fontWeight: 300, color: "var(--foundation-black)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-lg md:text-xl leading-snug"
              style={{ color: "var(--foundation-black)" }}
            >
              <span style={{ fontWeight: 300 }}>{t.closingLight}</span>
              <strong style={{ fontWeight: 600 }}>{t.closingBold}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
