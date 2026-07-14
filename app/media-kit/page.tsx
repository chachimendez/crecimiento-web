import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Media Kit",
  alternates: { canonical: "/media-kit" },
  description:
    "Official logos, brand colors, boilerplate and key facts about Crecimiento for press and partners.",
};

const facts = [
  { value: "+15,000", label: "People through our programs" },
  { value: "+1,000", label: "Startups in the ecosystem" },
  { value: "+200", label: "Startups accelerated" },
  { value: "+220", label: "Programs" },
  { value: "+100", label: "Partners" },
];

const logos = [
  { name: "Logo (black)", file: "/assets/lockup-black.png", dark: false },
  { name: "Logo (white)", file: "/assets/lockup-white.png", dark: true },
  { name: "Wordmark (black)", file: "/assets/logo-black.png", dark: false },
  { name: "Wordmark (white)", file: "/assets/logo-white.png", dark: true },
  { name: "Sun (black)", file: "/assets/sun-black.png", dark: false },
  { name: "Sun (white)", file: "/assets/sun-mark-white.png", dark: true },
];

const colors = [
  { name: "Foundation Black", hex: "#1F1F1F" },
  { name: "Visionary White", hex: "#FAFAFA" },
  { name: "Innovation Gold", hex: "#FFE908" },
  { name: "Ambition Blue", hex: "#13239A" },
  { name: "Development Blue", hex: "#2C509B" },
  { name: "Expansion Blue", hex: "#6D8EBB" },
  { name: "Potential Yellow", hex: "#FDF07E" },
  { name: "Seedling White", hex: "#FFFDE7" },
];

const rules = [
  "Never translate \"Crecimiento\".",
  "The logo is always used as provided: never recreate the wordmark with type.",
  "Keep a clear space equal to one grid unit around the entire logo (safe zone).",
  "On light backgrounds use the black version; on dark backgrounds, the white one.",
];

const donts = [
  {
    title: "Vertical Stacking",
    img: "/images/Dont/dont-stacking.png",
    text: "Avoid positioning the sun symbol above the wordmark. The horizontal relationship is essential to our brand narrative and visual identity.",
  },
  {
    title: "Word Breaking",
    img: "/images/Dont/dont-breaking.png",
    text: "Never hyphenate or break the wordmark \"Crecimiento\" (particularly avoid separating it as \"Creci-miento\", as \"miento\" carries negative connotations in Spanish).",
  },
  {
    title: "Disproportionate Scaling",
    img: "/images/Dont/dont-scaling.png",
    text: "Never alter the proportional relationship between the sun symbol and wordmark. The sun symbol's size should always maintain its relationship to the height of the capital \"C\".",
  },
  {
    title: "Distortion",
    img: "/images/Dont/dont-distortion.png",
    text: "Never stretch, compress, or otherwise distort the logo or its elements.",
  },
];

export default function MediaKitPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="px-6 pt-32 md:pt-40 pb-24">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-[0.25em]"
            style={{ fontWeight: 500, color: "var(--transition-gray)" }}
          >
            FOR PRESS AND PARTNERS
          </p>
          <h1
            className="mt-4 text-5xl md:text-6xl leading-[1.05] tracking-tight"
            style={{ color: "var(--foundation-black)" }}
          >
            <span style={{ fontWeight: 400 }}>MEDIA </span>
            <span style={{ fontWeight: 700 }}>KIT</span>
          </h1>
          <p
            className="mt-6 text-base leading-relaxed max-w-2xl"
            style={{ fontWeight: 300, color: "var(--foundation-black)" }}
          >
            This page gathers the essential elements of Crecimiento&apos;s
            brand identity, ready to download, and everything you need to use
            them in consistent and compelling communications.
          </p>

          {/* Boilerplate */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-4"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /ABOUT CRECIMIENTO
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontWeight: 300, color: "var(--foundation-black)" }}
            >
              Crecimiento is a foundation driving Argentina&apos;s tech
              ecosystem to position the country as a global hub for innovation.
              It works from three pillars: Aleph Hub, a permanent space in
              Buenos Aires that hosts the ecosystem&apos;s daily activity; a
              system of programs that supports startups and founders from
              hackathon to acceleration, connecting them with investors and
              international partners; and the bridge between public and private
              sectors for a regulatory framework that matches the
              ecosystem&apos;s pace.
            </p>
            <p
              className="mt-4 text-sm max-w-3xl"
              style={{ color: "var(--transition-gray)" }}
            >
              This paragraph may be used as official boilerplate in press
              coverage.
            </p>
          </section>

          {/* Key facts */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-6"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /KEY FACTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {facts.map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="text-2xl md:text-3xl tabular-nums"
                    style={{ fontWeight: 700, color: "var(--foundation-black)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs mt-1 leading-snug"
                    style={{ color: "var(--transition-gray)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Logos */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-6"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /LOGOS
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {logos.map(({ name, file, dark }) => (
                <div
                  key={name}
                  className="border rounded-sm overflow-hidden flex flex-col"
                  style={{ borderColor: "var(--adaptable-gray)" }}
                >
                  <div
                    className="flex items-center justify-center h-36 p-8"
                    style={{
                      backgroundColor: dark ? "#161616" : "var(--visionary-white)",
                    }}
                  >
                    <Image
                      src={file}
                      alt={name}
                      width={400}
                      height={120}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <p
                      className="text-xs"
                      style={{ fontWeight: 500, color: "var(--foundation-black)" }}
                    >
                      {name}
                    </p>
                    <a
                      href={file}
                      download
                      className="text-xs transition-opacity hover:opacity-70"
                      style={{ fontWeight: 600, color: "var(--ambition-blue)" }}
                    >
                      Download PNG
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Colors */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-6"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /BRAND COLORS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {colors.map(({ name, hex }) => (
                <div
                  key={hex}
                  className="border rounded-sm overflow-hidden"
                  style={{ borderColor: "var(--adaptable-gray)" }}
                >
                  <div className="h-20" style={{ backgroundColor: hex }} />
                  <div className="px-3 py-2">
                    <p
                      className="text-xs leading-snug"
                      style={{ fontWeight: 500, color: "var(--foundation-black)" }}
                    >
                      {name}
                    </p>
                    <p
                      className="text-xs tabular-nums"
                      style={{ color: "var(--transition-gray)" }}
                    >
                      {hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-6"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /TYPOGRAPHY
            </h2>
            <p
              className="text-4xl md:text-5xl"
              style={{ fontWeight: 700, color: "var(--foundation-black)" }}
            >
              Geist
            </p>
            <p
              className="mt-2 text-lg"
              style={{ fontWeight: 300, color: "var(--foundation-black)" }}
            >
              Light, Regular, <span style={{ fontWeight: 500 }}>Medium</span>{" "}
              and <span style={{ fontWeight: 700 }}>Bold</span>.
            </p>
          </section>

          {/* Usage */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-6"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /USAGE GUIDELINES
            </h2>
            <div className="flex flex-col gap-3 max-w-3xl">
              {rules.map((rule) => (
                <p
                  key={rule}
                  className="text-sm leading-relaxed"
                  style={{ fontWeight: 300, color: "var(--foundation-black)" }}
                >
                  <span style={{ color: "var(--ambition-blue)", fontWeight: 700 }}>
                    /{" "}
                  </span>
                  {rule}
                </p>
              ))}
            </div>

            <p
              className="mt-12 mb-8 text-base max-w-2xl"
              style={{ fontWeight: 700, color: "var(--foundation-black)" }}
            >
              To protect our brand integrity, avoid these incorrect uses of the
              Crecimiento logo:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {donts.map(({ title, img, text }) => (
                <div key={title}>
                  <div className="flex items-center justify-start h-28">
                    <Image
                      src={img}
                      alt={title}
                      width={280}
                      height={120}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                  <p
                    className="mt-4 text-sm flex items-center gap-2"
                    style={{ fontWeight: 700, color: "var(--foundation-black)" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E11900"
                      strokeWidth="5"
                      strokeLinecap="butt"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path d="M4 4l16 16M20 4L4 20" />
                    </svg>
                    {title}:
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ fontWeight: 300, color: "var(--foundation-black)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mt-14">
            <h2
              className="text-sm tracking-[0.15em] mb-4"
              style={{ fontWeight: 700, color: "var(--ambition-blue)" }}
            >
              /CONTACT
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontWeight: 300, color: "var(--foundation-black)" }}
            >
              For press inquiries, interviews or additional material:{" "}
              <a
                href="mailto:comms@crecimiento.build"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ fontWeight: 600, color: "var(--ambition-blue)" }}
              >
                comms@crecimiento.build
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
