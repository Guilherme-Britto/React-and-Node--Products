import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TCategoryRequest } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";

const createCategoriesService = async (
  userData: TCategoryRequest
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(userData);
  await categoryRepository.save(category);

  return category;
};

export default createCategoriesService;
