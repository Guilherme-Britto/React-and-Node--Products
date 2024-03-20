import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureEmailIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email: string = req.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (email) {
    const user: User | null = await userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default ensureEmailIsUniqueMiddleware;
