import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const listAllRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  let realEstate: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
};

export default listAllRealEstateService;
