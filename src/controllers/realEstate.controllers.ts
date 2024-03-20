import { Request, Response } from "express";
import { TRealEstateRequested } from "../interfaces/realEstate.interfaces";
import createRealEstateServicee from "../services/realEstate/createRealEstate.service";
import listAllRealEstateService from "../services/realEstate/listRealEstate.service";
import { RealEstate } from "../entities";

const createRealEstateControllerr = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData: TRealEstateRequested = req.body;

  const realEstate = await createRealEstateServicee(realEstateData);

  return res.status(201).json(realEstate);
};

const listAllRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate[] = await listAllRealEstateService();
  return res.json(realEstate);
};

export { createRealEstateControllerr, listAllRealEstateController };
