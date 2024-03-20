import { Router } from "express";
import ensureCategoryIsUniqueMiddleware from "../middlewares/ensureCategoryIsUnique.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  realEstateSchemaRequest,
  realEstateSchemaRequested,
} from "../schemas/realEstate.schemas";
import {
  createRealEstateControllerr,
  listAllRealEstateController,
} from "../controllers/realEstate.controllers";
import ensureAddressIsUniqueMiddleware from "../middlewares/ensureAddressIsUnique.middleware";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureCategoryIsUniqueMiddleware,
  ensureDataIsValidMiddleware(realEstateSchemaRequest),
  ensureDataIsValidMiddleware(realEstateSchemaRequested),
  ensureAddressIsUniqueMiddleware,
  createRealEstateControllerr
);

realEstateRoutes.get("", listAllRealEstateController);
export default realEstateRoutes;
