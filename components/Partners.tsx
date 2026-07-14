import Image from "next/image";
import { getDict, type Lang } from "@/lib/i18n";

// Una sola lista. Fichas de ancho variable (logo recortado + padding fijo):
// el aire entre logos queda parejo. La fila de arriba corre en orden;
// la de abajo arranca en la mitad para no duplicar en pantalla.
const allies = [
  { slug: "protocol-labs", w: 251 },
  { slug: "uniswap-foundation", w: 242 },
  { slug: "zksync", w: 274 },
  { slug: "ethereum-foundation", w: 176 },
  { slug: "base", w: 228 },
  { slug: "polygon", w: 290 },
  { slug: "avalanche", w: 248 },
  { slug: "arbitrum", w: 226 },
  { slug: "solana", w: 292 },
  { slug: "mantle", w: 218 },
  { slug: "lisk", w: 155 },
  { slug: "optimism", w: 314 },
  { slug: "polkadot", w: 265 },
  { slug: "bnb", w: 256 },
  { slug: "world", w: 223 },
  { slug: "metamask", w: 125 },
  { slug: "aztec", w: 226 },
  { slug: "zama", w: 290 },
  { slug: "wormhole", w: 314 },
  { slug: "lifi", w: 164 },
  { slug: "genlayer", w: 242 },
  { slug: "merge", w: 86 },
  { slug: "rain", w: 199 },
  { slug: "belo", w: 131 },
  { slug: "ripio", w: 134 },
  { slug: "fiserv", w: 126 },
  { slug: "arcap", w: 300 },
  { slug: "camara-fintech", w: 186 },
  { slug: "workplace", w: 234 },
  { slug: "bombo", w: 236 },
  { slug: "parque-innovacion", w: 95 },
  { slug: "edge-city", w: 111 },
  { slug: "geode", w: 290 },
].map(({ slug, w }) => ({
  name: slug,
  file: `/images/allies/tiles-black/${slug}.png`,
  w,
}));

const half = Math.ceil(allies.length / 2);
const alliesRow1 = allies;
const alliesRow2 = [...allies.slice(half), ...allies.slice(0, half)];

type Ally = { name: string; file: string; w: number };

function MarqueeRow({
  items,
  direction,
}: {
  items: Ally[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden py-6">
      <div
        className={`flex w-max items-center whitespace-nowrap will-change-transform ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {[...items, ...items].map(({ name, file, w }, i) => (
          <Image
            key={i}
            src={file}
            alt={name}
            width={w}
            height={96}
            unoptimized
            loading="eager"
            className="h-10 md:h-12 w-auto shrink-0 mr-8"
          />
        ))}
      </div>
    </div>
  );
}

export default function Partners({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).partners;
  return (
    <section id="partners">
      {/* Allies strip */}
      <div className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-6xl leading-tight"
            style={{ color: "var(--foundation-black)" }}
          >
            <span style={{ fontWeight: 700 }}>{t.titleBold}</span>{" "}
            <span style={{ fontWeight: 700, color: "var(--development-blue)" }}>
              {t.titleBlue}
            </span>
          </h2>
          <p
            className="mt-4 mb-10 text-base leading-relaxed max-w-md"
            style={{ fontWeight: 300, color: "var(--foundation-black)" }}
          >
            {t.subtitle}
          </p>

          {/* Two marquee rows, three divider lines */}
          <div
            className="border-y"
            style={{ borderColor: "var(--adaptable-gray)" }}
          >
            <MarqueeRow items={alliesRow1} direction="left" />
            <div
              className="border-t"
              style={{ borderColor: "var(--adaptable-gray)" }}
            >
              <MarqueeRow items={alliesRow2} direction="right" />
            </div>
          </div>

          <a
            href="https://calendly.com/funding-crecimiento"
            target="_blank"
            rel="noopener"
            className="inline-block mt-10 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--ambition-blue)", fontWeight: 500 }}
          >
            {t.cta}
          </a>
        </div>
      </div>

      {/* Community photo */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/images/community-1.jpg"
          alt={t.communityAlt}
          fill
          className="object-cover grayscale"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
