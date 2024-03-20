import { z } from "zod";
import {
  categoriesSchema,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/categories.schemas";

export type TCategory = z.infer<typeof categorySchema>;
export type TCategoryRequest = z.infer<typeof categorySchemaRequest>;
export type TCategories = z.infer<typeof categoriesSchema>;
