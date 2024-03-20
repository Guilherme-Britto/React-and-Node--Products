import { Request, Response } from "express";
import {
  TUserRequest,
  TUsersResponse,
  TUsersUpdateRequest,
} from "../interfaces/users.interfaces";
import createUsersService from "../services/users/createUsers.service";
import listUsersService from "../services/users/listUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import { AppError } from "../error";
import deleteUsersService from "../services/users/deleteUsers.service";

const createUsersControllerr = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const newUser = await createUsersService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUsersResponse = await listUsersService();
  return res.json(users);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = Number(req.params.id);
  const { id, admin } = res.locals.token;
  const userData: TUsersUpdateRequest = req.body;

  if (admin) {
    const user = await updateUsersService(idParams, userData);

    return res.status(200).json(user);
  }

  if (idParams == id) {
    const user = await updateUsersService(idParams, userData);

    return res.status(200).json(user);
  }

  throw new AppError("Insufficient permission", 403);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUsersService(userId);

  return res.status(204).send();
};
export {
  createUsersControllerr,
  listUsersController,
  updateUsersController,
  deleteUsersController,
};
