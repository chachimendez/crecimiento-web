import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import { formatDate, type Post } from "@/lib/blog";
import { getDict, type Lang } from "@/lib/i18n";

export default function BlogPostContent({
  post,
  lang = "en",
}: {
  post: Post;
  lang?: Lang;
}) {
  const t = getDict(lang).blog;

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="px-6 pt-36 pb-24 md:pt-44 md:pb-32" lang={lang}>
        <article className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ fontWeight: 500, color: "var(--transition-gray)" }}
          >
            {post.tag ? `${post.tag} · ` : ""}
            {formatDate(post.date, lang)}
          </p>
          <h1
            className="mt-4 text-4xl md:text-5xl leading-[1.1] tracking-tight"
            style={{ fontWeight: 700, color: "var(--foundation-black)" }}
          >
            {post.title}
          </h1>

          {post.cover && (
            <div className="relative aspect-[2/1] w-full mt-10 overflow-hidden rounded-[4px]">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </div>
          )}

          <div
            className="post-content mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <Link
            href={t.basePath}
            className="inline-block mt-16 text-sm transition-opacity hover:opacity-70"
            style={{ fontWeight: 500, color: "var(--ambition-blue)" }}
          >
            {t.back}
          </Link>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  );
}
