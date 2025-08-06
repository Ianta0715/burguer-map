import { defineCollection, z } from "astro:content";

const hamburgueserias = defineCollection({
  schema: z.object({
    title: z.string(),
    price: z.enum(["bajo", "medio", "alto"]),
    size: z.enum(["pequeño", "mediano", "grande", "extra grande"]),
    img: z.string(),
    description: z.string(),
    ranking: z.number().min(1).max(5),
  }),
});

export { hamburgueserias };