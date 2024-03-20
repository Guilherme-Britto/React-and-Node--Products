import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import "dotenv/config";
import jwt from "jsonwebtoken";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  if (loginData.password != user.password) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default createTokenService;
