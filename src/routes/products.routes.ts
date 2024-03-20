import { Router } from "express";
import {
  createproductsControllerr,
  deleteproductsController,
  listproductsController,
  updateproductsController,
} from "../controllers/products.controller";

const productRoutes: Router = Router();

productRoutes.post("", createproductsControllerr);
productRoutes.get("", listproductsController);
productRoutes.patch("/:id", updateproductsController);
productRoutes.delete("/:id", deleteproductsController);

export default productRoutes;
