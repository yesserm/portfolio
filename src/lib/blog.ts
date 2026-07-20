import type { CollectionEntry } from "astro:content";

export const blogLocales = ["es", "en"] as const;
export type BlogLang = (typeof blogLocales)[number];

export function isBlogLang(lang: string | undefined): lang is BlogLang {
  return lang === "es" || lang === "en";
}

export function getBlogUrl(lang: BlogLang, slug: string) {
  return `/${lang}/blog/${slug}`;
}

export function formatBlogDate(date: Date, lang: BlogLang) {
  return date.toLocaleDateString(lang, { timeZone: "UTC" });
}

export function sortPosts(posts: CollectionEntry<"blog">[]) {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function groupPostsBySlug(posts: CollectionEntry<"blog">[]) {
  return posts.reduce<Record<string, CollectionEntry<"blog">[]>>((acc, post) => {
    acc[post.data.slug] = acc[post.data.slug] || [];
    acc[post.data.slug].push(post);
    return acc;
  }, {});
}
