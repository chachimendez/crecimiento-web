import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.lang !== "en") return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.lang !== "en") notFound();

  return <BlogPostContent post={post} lang="en" />;
}
