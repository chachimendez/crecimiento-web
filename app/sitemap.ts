import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/es`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/es/about`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/es/blog`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/media-kit`, lastModified: now, priority: 0.5 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}${post.lang === "es" ? "/es" : ""}/blog/${post.slug}`,
    lastModified: post.date ? new Date(`${post.date}T12:00:00`) : now,
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
