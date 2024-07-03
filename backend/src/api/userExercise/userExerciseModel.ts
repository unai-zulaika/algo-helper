import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type UserExercise = z.infer<typeof UserExerciseSchema>;
export const UserExerciseSchema = z.object({
  user_id: z.number(),
  exercise_id: z.number(),
});

// Input Validation for 'GET users/:id' endpoint
export const GetUserExerciseSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
