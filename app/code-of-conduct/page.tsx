import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Code of Conduct",
  alternates: {
    canonical: "/code-of-conduct",
    languages: { en: "/code-of-conduct", es: "/conducta" },
  },
  description:
    "Crecimiento's Code of Conduct. It applies to every community activity, at any venue, in person or online.",
};

const h2 = "text-sm tracking-[0.15em] mb-4";
const h2Style = { fontWeight: 700, color: "var(--ambition-blue)" } as const;
const p = "text-base leading-relaxed max-w-3xl";
const pStyle = { fontWeight: 300, color: "var(--foundation-black)" } as const;
const li = "text-base leading-relaxed max-w-3xl pl-5 relative before:content-['→'] before:absolute before:left-0";
const mail = (
  <a href="mailto:comms@crecimiento.build" style={{ color: "var(--ambition-blue)" }}>
    comms@crecimiento.build
  </a>
);

export default function CodeOfConductPage() {
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
            COMMUNITY
          </p>
          <h1
            className="mt-4 text-5xl md:text-6xl leading-[1.05] tracking-tight"
            style={{ color: "var(--foundation-black)" }}
          >
            <span style={{ fontWeight: 400 }}>CODE OF </span>
            <span style={{ fontWeight: 700 }}>CONDUCT</span>
          </h1>
          <p className={`mt-6 ${p}`} style={pStyle}>
            To enjoy the benefits of the community, everyone who takes part is
            expected to follow this code of conduct. It exists to create an
            environment of collaboration and mutual respect, free from any form
            of discrimination, harassment or intimidation. We all benefit when
            we build together.
          </p>

          <section className="mt-14">
            <h2 className={h2} style={h2Style}>/SCOPE</h2>
            <p className={p} style={pStyle}>
              Crecimiento brings together people who build, learn and meet in
              very different activities: coworking, meetups, hackathons,
              conferences and programs. This code applies to all of them, at
              any venue, and to our online spaces: Telegram groups, program
              communities and social media. It covers everyone who takes part,
              whether as an attendee, speaker, mentor, sponsor, volunteer or
              member of the team.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/MUTUAL RESPECT</h2>
            <p className={p} style={pStyle}>
              Everyone has the right to take part with comfort, safety and
              dignity. Building that is everyone&apos;s responsibility.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Any form of harassment, discrimination or degrading treatment is
              strictly prohibited, whether explicit or through
              microaggressions. This includes, without limitation, deliberate
              intimidation, offensive comments, unwanted physical contact,
              unsolicited sexual attention, sexual imagery in shared spaces or
              on screen, and any conduct based on, or directed at, skin color,
              nationality, gender, gender identity, sexual orientation,
              political views, age, appearance, body size, physical or mental
              ability, religion, pregnancy or any other trait used to make
              someone feel less than others.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Every conversation is held in a tone that respects the other
              person and lets those nearby keep working. Let&apos;s make
              courtesy a habit. And if someone asks you to stop, stop.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/GENDER, DIVERSITY AND DISCRIMINATION</h2>
            <p className={p} style={pStyle}>
              Crecimiento has zero tolerance for gender-based violence,
              harassment and discrimination. Together with the community and
              with specialized advice, we are building a Gender and
              Discrimination Protocol that will set out how a report is
              received, who accompanies it and which steps follow. We will
              publish it on this page as soon as it is agreed. In the
              meantime, any situation is reported through the channels in the
              next section.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/HOW TO REPORT</h2>
            <p className={p} style={pStyle}>
              If you experience or witness harassment, discrimination or any
              conduct that goes against this code, you can report it in two
              ways:
            </p>
            <ul className="mt-4 space-y-2">
              <li className={li} style={pStyle}>
                In person, to any member of the Crecimiento team present at
                the activity.
              </li>
              <li className={li} style={pStyle}>By email, to {mail}.</li>
            </ul>
            <p className={`mt-4 ${p}`} style={pStyle}>
              If reporting directly is hard for you, you can ask someone you
              trust to report on your behalf.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              When you report, we get back to you, listen to the person
              affected and take immediate measures if the situation requires
              it. Every report is handled confidentially, and nobody
              faces consequences for reporting in good faith. This channel
              complements the legal avenues available under current law; it
              does not replace them.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/AT OUR ACTIVITIES</h2>
            <ul className="space-y-3">
              <li className={li} style={pStyle}>
                Follow the instructions of the Crecimiento team. They are there
                so the activity works well for everyone.
              </li>
              <li className={li} style={pStyle}>
                Respect the rules of each venue. Many of the places where we
                meet are lent to us by partners.
              </li>
              <li className={li} style={pStyle}>
                Respect whoever is speaking. This code also applies to the
                content of talks and to what is shown on screen.
              </li>
              <li className={li} style={pStyle}>
                Photograph or film other people only with their consent.
                Respect anyone who asks not to be recorded.
              </li>
              <li className={li} style={pStyle}>
                Alcohol is limited to the moments and spaces the organization
                enables. Illegal substances and weapons of any kind are not
                allowed.
              </li>
              <li className={li} style={pStyle}>
                Crecimiento&apos;s activities are for building community. They
                may not be used to sell financial products, promote fraudulent
                schemes or aggressively shill projects.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/ACCESSIBILITY</h2>
            <p className={p} style={pStyle}>
              If you need anything in order to take part in an activity, write
              to {mail} beforehand and we will find a way.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/IMAGE</h2>
            <p className={p} style={pStyle}>
              Photos and videos are taken during Crecimiento&apos;s activities
              and may include you. By taking part, you authorize Crecimiento to
              use them for institutional and communication purposes, on social
              media, the website, newsletters and communication materials. You
              can revoke this authorization at any time by writing to {mail};
              revocation does not affect material already published.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/NON-COMPLIANCE</h2>
            <p className={p} style={pStyle}>
              Anyone who breaches this code may be asked to leave the activity
              on the spot, and Crecimiento may deny them access to future
              activities. Situations related to gender and discrimination will
              also follow the protocol&apos;s procedure once it is published.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/ACCEPTANCE</h2>
            <p className={p} style={pStyle}>
              By registering for a Crecimiento activity you accept this code.
              The current version is always published on this page and any
              update applies from the moment it is published. Last updated:
              October 1, 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
