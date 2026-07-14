import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import ArgentinaOpportunity from "@/components/ArgentinaOpportunity";
import WhatWeDo from "@/components/WhatWeDo";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
};

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <ArgentinaOpportunity />
        <WhatWeDo />
        <Programs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
