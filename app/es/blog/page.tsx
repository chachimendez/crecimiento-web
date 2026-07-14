import type { Metadata } from "next";
import BlogIndexContent from "@/components/BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: "/es/blog",
    languages: { en: "/blog", es: "/es/blog" },
  },
  description:
    "Historias, programas e hitos del ecosistema tech argentino.",
  openGraph: { locale: "es_AR" },
};

export default function BlogIndexEs() {
  return <BlogIndexContent lang="es" />;
}
