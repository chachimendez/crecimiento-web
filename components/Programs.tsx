import Image from "next/image";
import { getDict, type Lang } from "@/lib/i18n";

export default function Programs({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).programs;

  return (
    <section
      id="programs"
      className="px-6 md:px-16 pt-8 md:pt-10 pb-24 md:pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* LDAC — upcoming highlight (full art banner, links to the LDAC site) */}
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--transition-gray)" }}
        >
          {t.nextEvent}
        </p>
        <div
          className="relative mb-16 overflow-hidden rounded-[4px] border"
          style={{ borderColor: "var(--adaptable-gray)" }}
        >
          <Image
            src={t.ldacImg}
            alt={t.ldacAlt}
            width={2400}
            height={849}
            className="w-full h-auto"
          />
          {/* Real button covering the DISCOVER MORE baked into the art */}
          <a
            href="https://digitalassetsconf.crecimiento.build/"
            target="_blank"
            rel="noopener"
            className="absolute flex items-center justify-center rounded-lg transition-transform duration-200 hover:scale-110"
            style={{
              ...t.ldacBtn,
              backgroundColor: "#161616",
              color: "#FFFFFF",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(6px, 1.45vw, 17px)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {t.discoverMore}
          </a>
        </div>

        {/* Section heading */}
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--transition-gray)" }}
        >
          {t.eyebrow}
        </p>
        <h2
          className="text-4xl md:text-6xl uppercase leading-tight mb-14"
          style={{ color: "var(--foundation-black)" }}
        >
          <span style={{ fontWeight: 300 }}>{t.titleLight}</span>
          <span style={{ fontWeight: 700 }}>{t.titleBold}</span>{" "}
          <em style={{ fontWeight: 300, fontStyle: "italic" }}>
            {t.titleItalic}
          </em>
        </h2>

        {/* Programs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.items.map(({ title, tag, description, img }) => (
            <div
              key={title}
              className="flex flex-col border rounded-sm overflow-hidden"
              style={{
                borderColor: "var(--adaptable-gray)",
                backgroundColor: "var(--visionary-white)",
              }}
            >
              {img && (
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-4 p-6 flex-1">
              <div>
                <p
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: "var(--transition-gray)" }}
                >
                  {tag}
                </p>
                <h3
                  className="text-sm uppercase leading-snug"
                  style={{ fontWeight: 700, color: "var(--foundation-black)" }}
                >
                  {title}
                </h3>
              </div>
              <p
                className="text-xs leading-relaxed flex-1"
                style={{ color: "var(--foundation-black)" }}
              >
                {description}
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spin-offs */}
        <p
          className="text-xs uppercase tracking-widest mt-16 mb-8"
          style={{ color: "var(--transition-gray)" }}
        >
          {t.spinoffsLabel}
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {t.spinoffs.map(({ title, description, img, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener"
              className="flex flex-col border rounded-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--adaptable-gray)",
                backgroundColor: "var(--visionary-white)",
              }}
            >
              {img && (
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3 p-6 flex-1">
              <h3
                className="text-sm uppercase leading-snug"
                style={{ fontWeight: 700, color: "var(--foundation-black)" }}
              >
                {title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--foundation-black)" }}
              >
                {description}
              </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
