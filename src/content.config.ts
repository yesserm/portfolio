import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
    generateId: ({ data, entry }) => {
      const lang = typeof data.lang === "string" ? data.lang : "unknown";
      const slug = typeof data.slug === "string" ? data.slug : entry;
      return `${lang}/${slug}`;
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(["es", "en"]),
    tags: z.array(z.string()).default([]),
    slug: z.string(),
  }),
});

export const collections = { blog };
