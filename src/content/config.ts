import { defineCollection, z } from 'astro:content';

const devlogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    status: z.enum(['completed', 'in-progress', 'planned']),
    description: z.string(),
    progress: z.array(z.object({
      task: z.string(),
      status: z.enum(['completed', 'in-progress', 'planned'])
    }))
  })
});

export const collections = {
  'devlogs': devlogsCollection,
}; 