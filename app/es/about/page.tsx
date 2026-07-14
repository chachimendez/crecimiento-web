import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Crecimiento es una fundación que impulsa al ecosistema tech argentino para posicionar al país como hub global de innovación.",
  alternates: {
    canonical: "/es/about",
    languages: { en: "/about", es: "/es/about" },
  },
  openGraph: { locale: "es_AR" },
};

export default function AboutPageEs() {
  return <AboutContent lang="es" />;
}
