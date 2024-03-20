import { Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";
import { createScheduleService } from "../services/schedule/createSchedules.service";
import { RealEstate } from "../entities";
import listAllSchedulesOfRealEstateService from "../services/schedule/listScheduleByRealEstate.service";

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scheduleData: TScheduleRequest = req.body;
  const realEstateId: number = scheduleData.realEstateId;
  const userId: number = res.locals.token.id;

  await createScheduleService(scheduleData, realEstateId, userId);

  return res.status(201).json({ message: "Schedule created" });
};

const listAllSchedulesOfRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const realEstate: RealEstate = await listAllSchedulesOfRealEstateService(id);
  return res.json(realEstate);
};

export { createScheduleController, listAllSchedulesOfRealEstateController };
