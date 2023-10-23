import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    pubDate: z.date().default(() => new Date()),
  }),
});

export const collections = {
  posts: postCollection,
};
