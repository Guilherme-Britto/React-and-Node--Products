import { z } from "zod";
import {
  productSchema,
  productSchemaRequest,
  productSchemaUpdate,
} from "../schemas/products.schema";

type TProduct = z.infer<typeof productSchema>;
type TProductRequest = z.infer<typeof productSchemaRequest>;
type TProductUpdateRequest = z.infer<typeof productSchemaUpdate>;

export { TProduct, TProductRequest, TProductUpdateRequest };
