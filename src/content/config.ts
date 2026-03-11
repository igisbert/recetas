import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from '../constants/recipes';

const categoryIds = CATEGORIES.map(c => c.id) as [string, ...string[]];

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(categoryIds),
    servings: z.number().default(1),
    showStepper: z.boolean().default(true),
    difficulty: z.enum(['easy', 'medium', 'hard']).default('easy'),
    advice: z.string().optional(),
    macros: z.object({
      kcal: z.number(),
      carbs: z.number(),
      protein: z.number(),
      fat: z.number(),
    }).optional(),
    ingredients: z.array(z.object({
      name: z.string(),
      value: z.union([z.number(), z.string()]),
      unit: z.string().optional(),
      scale: z.number().default(1),
    })),
  })
});

export const collections = { recipes };
