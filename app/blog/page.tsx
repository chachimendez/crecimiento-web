import type { Metadata } from "next";
import BlogIndexContent from "@/components/BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", es: "/es/blog" },
  },
  description:
    "Stories, programs and milestones from Argentina's tech ecosystem.",
};

export default function BlogIndex() {
  return <BlogIndexContent lang="en" />;
}
