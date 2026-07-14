import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", es: "/es/about" },
  },
  description:
    "Crecimiento is a foundation driving Argentina's tech ecosystem to position the country as a global hub for innovation.",
};

export default function AboutPage() {
  return <AboutContent lang="en" />;
}
