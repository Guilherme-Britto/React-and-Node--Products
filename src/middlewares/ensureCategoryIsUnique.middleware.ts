import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureCategoryIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name: string = req.body.name;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (name) {
    const category: Category | null = await categoryRepository.findOne({
      where: {
        name: name,
      },
    });

    if (category) {
      throw new AppError("Category already exists", 409);
    }
  }

  return next();
};

export default ensureCategoryIsUniqueMiddleware;
