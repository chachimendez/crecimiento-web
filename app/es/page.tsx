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
  title: "Crecimiento",
  description:
    "Crecimiento es una fundación que impulsa al ecosistema tech argentino para posicionar al país como hub global de innovación.",
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
  openGraph: { locale: "es_AR" },
};

export default function HomeEs() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main lang="es">
        <Hero lang="es" />
        <ArgentinaOpportunity lang="es" />
        <WhatWeDo lang="es" />
        <Programs lang="es" />
        <Partners lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
