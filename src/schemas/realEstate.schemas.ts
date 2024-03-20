import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
});

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchemaRequest = addressSchema.omit({
  id: true,
});

const realEstateSchemaRequest = realEstateSchema
  .omit({
    updatedAt: true,
    createdAt: true,
    sold: true,
    id: true,
  })
  .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
  });

const realEstateSchemaRequested = realEstateSchema
  .omit({
    updatedAt: true,
    createdAt: true,
    id: true,
  })
  .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
  });

export {
  realEstateSchema,
  addressSchema,
  addressSchemaRequest,
  realEstateSchemaRequest,
  realEstateSchemaRequested,
};
