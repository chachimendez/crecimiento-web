import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts("es").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.lang !== "es") return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/es/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_AR",
      ...(post.cover ? { images: [post.cover] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.cover ? { images: [post.cover] } : {}),
    },
  };
}

export default async function BlogPostEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.lang !== "es") notFound();

  return <BlogPostContent post={post} lang="es" />;
}
