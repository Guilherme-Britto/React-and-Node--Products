import { Router } from "express";
import {
  createProductsController,
  deleteProductsController,
  listProductsController,
  updateProductsController,
} from "../controllers/products.controller";

const productRoutes: Router = Router();

productRoutes.post("", createProductsController);
productRoutes.get("", listProductsController);
productRoutes.patch("/:id", updateProductsController);
productRoutes.delete("/:id", deleteProductsController);

export default productRoutes;
