import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.date(),
});

const productSchemaRequest = productSchema.omit({
  id: true,
  createdAt: true,
});

const productSchemaUpdate = productSchemaRequest.partial();
export { productSchema, productSchemaRequest, productSchemaUpdate };
