// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a schema for each collection you'd like to validate.
const collection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    pubDate: z.string().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z
      .object({
        url: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    heroImage: z.string().optional(),
  }),
});
const tilCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    pubDate: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    source: z.string().url().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: collection,
  notes: collection,
  til: tilCollection,
};
