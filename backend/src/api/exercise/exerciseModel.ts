import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type Exercise = z.infer<typeof ExerciseSchema>;
export const ExerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  exercisedata: z.object({}), // todo finish
});

// Input Validation for 'GET users/:id' endpoint
export const GetExerciseSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
