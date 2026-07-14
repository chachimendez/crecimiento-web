import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts, formatDate } from "@/lib/blog";
import { getDict, type Lang } from "@/lib/i18n";

export default function BlogIndexContent({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).blog;
  const posts = getAllPosts(lang).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    cover: p.cover,
    tag: p.tag,
    draft: p.draft ?? false,
    dateFormatted: formatDate(p.date, lang),
  }));

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="px-6 pt-36 pb-24 md:pt-44 md:pb-32" lang={lang}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs tracking-[0.25em]"
            style={{ fontWeight: 500, color: "var(--transition-gray)" }}
          >
            BLOG
          </p>
          <BlogList posts={posts} t={t} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
