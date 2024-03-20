import { z } from "zod";
import { userSchema } from "./users.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  user: userSchema,
  realEstate: realEstateSchema,
});

const scheduleSchemaRequest = scheduleSchema
  .omit({
    id: true,
    user: true,
    realEstate: true,
  })
  .extend({
    realEstateId: z.number(),
  });

export { scheduleSchema, scheduleSchemaRequest };
