import { Repository } from "typeorm";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let users: User[] | undefined = await userRepository.find({
    withDeleted: true,
  });

  const returnUsers: TUsersResponse = usersSchemaResponse.parse(users);

  return returnUsers;
};

export default listUsersService;
