"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Item = {
  slug: string;
  title: string;
  excerpt: string;
  cover?: string;
  tag?: string;
  draft: boolean;
  dateFormatted: string;
};

type Strings = {
  titleLight: string;
  titleBold: string;
  empty: string;
  readMore: string;
  basePath: string;
  searchPlaceholder: string;
  noResults: string;
};

export default function BlogList({ posts, t }: { posts: Item[]; t: Strings }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = q
    ? posts.filter((p) =>
        [p.title, p.excerpt, p.tag ?? ""].join(" ").toLowerCase().includes(q)
      )
    : posts;

  return (
    <>
      <div className="flex items-end justify-between gap-6">
        <h1
          className="mt-4 text-5xl md:text-6xl leading-[1.05] tracking-tight"
          style={{ color: "var(--foundation-black)" }}
        >
          <span style={{ fontWeight: 400 }}>{t.titleLight}</span>
          <span style={{ fontWeight: 700 }}>{t.titleBold}</span>
        </h1>

        {/* Lupa */}
        <button
          type="button"
          aria-label={t.searchPlaceholder}
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
            if (open) setQuery("");
          }}
          className="shrink-0 mb-1 p-2 rounded-full transition-colors hover:bg-[color:var(--adaptable-gray)]"
          style={{ color: "var(--foundation-black)" }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="mt-6 w-full max-w-md px-4 py-2.5 text-sm rounded-full border outline-none focus:border-[color:var(--ambition-blue)]"
          style={{
            borderColor: "var(--adaptable-gray)",
            backgroundColor: "var(--visionary-white)",
            color: "var(--foundation-black)",
          }}
        />
      )}

      {posts.length === 0 ? (
        <p
          className="mt-16 text-base"
          style={{ fontWeight: 300, color: "var(--foundation-black)" }}
        >
          {t.empty}
        </p>
      ) : filtered.length === 0 ? (
        <p
          className="mt-16 text-base"
          style={{ fontWeight: 300, color: "var(--foundation-black)" }}
        >
          {t.noResults}
        </p>
      ) : (
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`${t.basePath}/${post.slug}`}
              className="group flex flex-col border rounded-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--adaptable-gray)",
                backgroundColor: "var(--visionary-white)",
              }}
            >
              {post.cover && (
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "var(--transition-gray)" }}
                >
                  {post.tag ? `${post.tag} · ` : ""}
                  {post.dateFormatted}
                  {post.draft ? " · DRAFT" : ""}
                </p>
                <h2
                  className="text-lg leading-snug"
                  style={{ fontWeight: 700, color: "var(--foundation-black)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontWeight: 300, color: "var(--foundation-black)" }}
                >
                  {post.excerpt}
                </p>
                <p
                  className="text-sm"
                  style={{ fontWeight: 500, color: "var(--ambition-blue)" }}
                >
                  {t.readMore}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
