import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: z.object({
    num: z.string(),
    title: z.string(),
    date: z.string().optional(),
    dateShort: z.string(),
    duration: z.string(),
    status: z.enum(['upcoming', 'past']),
    order: z.number(),
    abstract: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    num: z.string(),
    tag: z.enum(['Essay', 'Playbook', 'Note']),
    title: z.string(),
    date: z.string(),
    read: z.string(),
    excerpt: z.string(),
    order: z.number(),
  }),
});

export const collections = { classes, posts };
