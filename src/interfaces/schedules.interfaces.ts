import { z } from "zod";
import { Schedule } from "../entities";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";

export type TSchedule = Schedule;
export type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>;
