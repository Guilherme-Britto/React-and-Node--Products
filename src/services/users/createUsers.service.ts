import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (userData: TUserRequest): Promise<any> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  userData.password = await hash(userData.password, 8);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export default createUsersService;
