import { Router } from "express";
import ensureEmailIsUniqueMiddleware from "../middlewares/ensureEmailIsUnique.middleware";
import {
  createUsersControllerr,
  deleteUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controller";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import ensureIdIsValidMiddleware from "../middlewares/ensureIdIsValid.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailIsUniqueMiddleware,
  createUsersControllerr
);
userRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listUsersController
);
userRoutes.patch(
  "/:id",
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdateRequest),
  updateUsersController
);
userRoutes.delete(
  "/:id",
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  deleteUsersController
);

export default userRoutes;
