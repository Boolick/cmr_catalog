import { z } from 'zod';

export const itemSchema = z.object({
  id: z.string(),
  avatar: z.string().url(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  score: z.number(),
}).strict();

export type Item = z.infer<typeof itemSchema>;
