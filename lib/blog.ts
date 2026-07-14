import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// YAML parses unquoted dates as Date objects; normalize to "YYYY-MM-DD".
function normalizeDate(d: unknown): string {
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return d ? String(d).slice(0, 10) : "";
}

export type PostLang = "en" | "es";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tag?: string;
  draft?: boolean;
  lang: PostLang;
};

export type Post = PostMeta & { html: string };

export function getAllPosts(lang?: PostLang): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: normalizeDate(data.date),
      excerpt: data.excerpt ?? "",
      cover: data.cover,
      tag: data.tag,
      draft: data.draft ?? false,
      lang: data.lang === "es" ? "es" : "en",
    } as PostMeta;
  });

  return posts
    .filter((p) => !p.draft || process.env.NODE_ENV === "development")
    .filter((p) => !lang || p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/
  );
  return m ? m[1] : null;
}

/**
 * Custom directives on top of Markdown:
 *   [button:Label](https://url)  -> styled button link
 *   [video](https://youtube...)  -> responsive embedded video
 */
function preprocess(md: string): string {
  let out = md.replace(
    /\[button:(.+?)\]\((.+?)\)/g,
    '<a class="post-button" href="$2" target="_blank" rel="noopener">$1</a>'
  );
  out = out.replace(/\[video\]\((.+?)\)/g, (_, url) => {
    const id = youtubeId(url);
    const list = url.match(/[?&]list=([\w-]+)/);
    if (id) {
      const src = `https://www.youtube-nocookie.com/embed/${id}${list ? `?list=${list[1]}` : ""}`;
      return `<div class="post-video"><iframe src="${src}" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    }
    return `<div class="post-video"><iframe src="${url}" title="Video" allowfullscreen loading="lazy"></iframe></div>`;
  });
  return out;
}

export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(preprocess(content), { async: false }) as string;
  return {
    slug,
    title: data.title ?? slug,
    date: normalizeDate(data.date),
    excerpt: data.excerpt ?? "",
    cover: data.cover,
    tag: data.tag,
    draft: data.draft ?? false,
    lang: data.lang === "es" ? "es" : "en",
    html,
  };
}

export function formatDate(iso: string, lang: PostLang = "en"): string {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString(lang === "es" ? "es-AR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
