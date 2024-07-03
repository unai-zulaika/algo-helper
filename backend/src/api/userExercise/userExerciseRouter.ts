import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Request, Response, Router } from "express";
import { z } from "zod";

import {
  GetUserExerciseSchema,
  UserExerciseSchema,
} from "@/api/userExercise/userExerciseModel";

import { userExerciseService } from "@/api/userExercise/userExerciseService";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import {
  handleServiceResponse,
  validateRequest,
} from "@/common/utils/httpHandlers";

export const userExerciseRegistry = new OpenAPIRegistry();

// userExerciseRegistry.register("Exercise", ExerciseSchema);

export const userExerciseRouter: Router = (() => {
  const router = express.Router();

  userExerciseRegistry.registerPath({
    method: "get",
    path: "/user-exercises/{id}",
    tags: ["Exercise"],
    request: { params: GetUserExerciseSchema.shape.params },
    responses: createApiResponse(UserExerciseSchema, "Success"),
  });

  router.get(
    "/:id",
    validateRequest(GetUserExerciseSchema),
    async (req: Request, res: Response) => {
      const id = parseInt(req.params.id as string, 10);
      const serviceResponse = await userExerciseService.findByUserId(id);
      handleServiceResponse(serviceResponse, res);
    }
  );

  return router;
})();
