import { Router } from "express";
import ensureCategoryIsUniqueMiddleware from "../middlewares/ensureCategoryIsUnique.middleware";
import { categorySchemaRequest } from "../schemas/categories.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  createCategoryController,
  listCategoriesController,
  listCategoryByIdController,
} from "../controllers/categories.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureCategoryIsUniqueMiddleware,
  ensureDataIsValidMiddleware(categorySchemaRequest),
  createCategoryController
);

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/realEstate", listCategoryByIdController);

export default categoriesRoutes;
