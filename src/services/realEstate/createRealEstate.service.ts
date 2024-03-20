import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TRealEstateRequested } from "../../interfaces/realEstate.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";

const createRealEstateServicee = async (
  realEstateData: TRealEstateRequested
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const address: Address = addressRepository.create(realEstateData.address!);
  await addressRepository.save(address);

  const category: Category | null = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  });

  if (!category) {
    throw new AppError("Email already exists.", 409);
  }

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: address,
    category: category,
  });
  await realEstateRepository.save(realEstate);

  return realEstate;
};

export default createRealEstateServicee;
