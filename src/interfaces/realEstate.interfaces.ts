import { z } from "zod";
import { realEstateSchemaRequested } from "../schemas/realEstate.schemas";

type TRealEstateRequested = z.infer<typeof realEstateSchemaRequested>;

export { TRealEstateRequested };
