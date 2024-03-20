import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  deletedAt: true,
  updatedAt: true,
  createdAt: true,
  id: true,
});

const userSchemaUpdateRequest = userSchemaRequest
  .omit({ admin: true })
  .partial();

const userSchemaResponse = userSchema.omit({ password: true });

const usersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdateRequest,
};
