import { Request, Response } from "express";
import {
  TCategories,
  TCategory,
  TCategoryRequest,
} from "../interfaces/categories.interfaces";
import createCategoriesService from "../services/categories/createCategries.service";
import { Category } from "../entities";
import listCategoriesServicee from "../services/categories/listCategories.service";
import listCategoryByIdService from "../services/categories/listCategorybyId.service";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCategoryRequest = req.body;

  const category: Category = await createCategoriesService(categoryData);

  return res.status(201).json(category);
};

const listCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: TCategories = await listCategoriesServicee();

  return res.json(categories);
};

const listCategoryByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const category: TCategory = await listCategoryByIdService(userId);

  return res.json(category);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryByIdController,
};
