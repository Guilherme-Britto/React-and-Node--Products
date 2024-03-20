import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureAddressIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressBody = req.body.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (addressBody) {
    const realEstate: Address | null = await addressRepository.findOne({
      where: {
        city: addressBody.city,
        state: addressBody.state,
      },
    });

    if (realEstate) {
      throw new AppError("Address already exists", 409);
    }
  }

  return next();
};

export default ensureAddressIsUniqueMiddleware;
