import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TimelineProgress from "@/components/TimelineProgress";
import { getDict, type Lang } from "@/lib/i18n";

type Season = ReturnType<typeof getDict>["about"]["seasons"][number];

const accents = ["var(--potential-yellow)", "var(--expansion-blue)"];

function SeasonCard({ s, accent }: { s: Season; accent: string }) {
  return (
    <div
      className="rounded-3xl border p-7"
      style={{ borderColor: "rgba(250,250,250,0.35)" }}
    >
      <p
        className="text-lg md:text-xl mb-1"
        style={{ color: "var(--visionary-white)" }}
      >
        <strong style={{ fontWeight: 700, color: accent }}>{s.season}</strong>{" "}
        <em style={{ fontStyle: "italic", fontWeight: 500 }}>{s.name}</em>
      </p>
      <p className="text-sm" style={{ color: "var(--visionary-white)" }}>
        <span style={{ fontWeight: 600, color: accent }}>{s.event}</span>{" "}
        <span style={{ opacity: 0.8 }}>{s.eventDetail}</span>
      </p>
      {s.attendance ? (
        <p
          className="text-sm italic mt-1"
          style={{ color: "var(--visionary-white)", opacity: 0.8 }}
        >
          {s.attendance}
        </p>
      ) : null}

      <p
        className="mt-4 text-sm leading-relaxed"
        style={{ color: "var(--visionary-white)", fontWeight: 300, opacity: 0.95 }}
      >
        {s.paragraph}
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        {s.rows.map(({ label, text }) => (
          <p
            key={text}
            className="text-sm leading-relaxed"
            style={{ color: "var(--visionary-white)" }}
          >
            {label ? (
              <>
                <em style={{ fontWeight: 600 }}>{label}</em>
                <span style={{ opacity: 0.6 }}> → </span>
              </>
            ) : null}
            <span style={{ opacity: 0.9 }}>{text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AboutContent({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).about;

  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ backgroundColor: "#161616" }} lang={lang}>
        {/* Intro — sized to fit a single desktop viewport */}
        <section className="relative px-6 pt-24 md:pt-28 pb-10 md:pb-12 overflow-hidden">
          {/* Side orb (from the reference) */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              width: 620,
              height: 620,
              right: -200,
              top: "10%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(165,180,190,0.5) 0%, rgba(109,142,187,0.22) 45%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative max-w-4xl mx-auto">
            <h1
              className="text-[36px] md:text-[54px] leading-[1.02] tracking-tight"
              style={{ color: "var(--visionary-white)" }}
            >
              <span style={{ fontWeight: 400 }}>{t.titleLight}</span>
              <br />
              <em style={{ fontWeight: 700, fontStyle: "italic" }}>
                {t.titleItalic}
              </em>
            </h1>

            <div
              className="mt-8 flex flex-col gap-4 text-[14px] md:text-[15px] leading-relaxed max-w-2xl"
              style={{ color: "var(--visionary-white)", fontWeight: 300 }}
            >
              {t.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p
              className="mt-10 text-center text-[21px] md:text-[32px] uppercase tracking-wide"
              style={{ color: "var(--visionary-white)" }}
            >
              <span
                aria-hidden="true"
                className="inline-block h-[3px] w-12 md:w-16 align-baseline mr-4"
                style={{ backgroundColor: "var(--visionary-white)" }}
              />
              {t.journeyBeganPre}
              <em style={{ fontStyle: "italic", fontWeight: 600 }}>
                {t.journeyBeganItalic}
              </em>
            </p>
          </div>
        </section>

        {/* Numbers divider */}
        <section
          className="px-6 py-10 border-y"
          style={{ borderColor: "rgba(250,250,250,0.2)" }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
            {t.numbers.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl md:text-3xl tabular-nums"
                  style={{ fontWeight: 700, color: "var(--potential-yellow)" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs mt-1 leading-snug"
                  style={{ color: "var(--visionary-white)", opacity: 0.8 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-16 md:py-20 relative">
          <div className="max-w-6xl mx-auto relative">
            {/* Central line (desktop): draws itself as you scroll */}
            <TimelineProgress />

            <div className="flex flex-col gap-14 md:gap-20">
              {t.seasons.map((s, i) => (
                <div
                  key={s.season}
                  className="md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10"
                >
                  {i % 2 === 0 ? (
                    <>
                      <Reveal className="from-left">
                        <SeasonCard s={s} accent={accents[i % 2]} />
                      </Reveal>
                      <p
                        className="hidden md:block text-sm tracking-widest whitespace-nowrap px-4"
                        style={{
                          fontWeight: 700,
                          color: "var(--visionary-white)",
                          backgroundColor: "#161616",
                        }}
                      >
                        {s.date}
                      </p>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <p
                        className="hidden md:block text-sm tracking-widest whitespace-nowrap px-4"
                        style={{
                          fontWeight: 700,
                          color: "var(--visionary-white)",
                          backgroundColor: "#161616",
                        }}
                      >
                        {s.date}
                      </p>
                      <Reveal className="from-right">
                        <SeasonCard s={s} accent={accents[i % 2]} />
                      </Reveal>
                    </>
                  )}
                  {/* Mobile date */}
                  <p
                    className="md:hidden text-sm tracking-widest mt-4 text-center"
                    style={{ fontWeight: 700, color: "var(--visionary-white)" }}
                  >
                    {s.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Season 5 — breaks the timeline: this is now */}
        <section className="px-6 pb-20 md:pb-28">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm tracking-widest mb-5"
              style={{ fontWeight: 700, color: "var(--visionary-white)", opacity: 0.7 }}
            >
              {t.s5Date}
            </p>
            <h2
              className="text-[40px] md:text-[60px] leading-[1.05] tracking-tight"
              style={{ color: "var(--visionary-white)" }}
            >
              <span style={{ fontWeight: 700 }}>{t.s5Title}</span>
              <br />
              <em
                style={{
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "var(--potential-yellow)",
                }}
              >
                {t.s5Name}
              </em>
            </h2>

            <div
              className="mt-8 flex flex-col gap-4 text-[14px] md:text-[15px] leading-relaxed text-left md:text-center"
              style={{ color: "var(--visionary-white)", fontWeight: 300 }}
            >
              {t.s5Paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
