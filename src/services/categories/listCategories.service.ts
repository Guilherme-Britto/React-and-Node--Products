import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TCategories } from "../../interfaces/categories.interfaces";

const listCategoriesServicee = async (): Promise<TCategories> => {
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  let categories: Category[] | undefined = await userRepository.find();

  return categories;
};

export default listCategoriesServicee;
