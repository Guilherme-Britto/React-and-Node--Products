import { Router } from "express";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import {
  createScheduleController,
  listAllSchedulesOfRealEstateController,
} from "../controllers/schedules.controller";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(scheduleSchemaRequest),
  createScheduleController
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listAllSchedulesOfRealEstateController
);

export default schedulesRoutes;
