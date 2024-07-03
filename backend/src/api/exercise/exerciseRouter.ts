import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Request, Response, Router } from "express";
import { z } from "zod";

import {
  GetExerciseSchema,
  ExerciseSchema,
} from "@/api/exercise/exerciseModel";
import { exerciseService } from "@/api/exercise/exerciseService";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import {
  handleServiceResponse,
  validateRequest,
} from "@/common/utils/httpHandlers";

export const exerciseRegistry = new OpenAPIRegistry();

exerciseRegistry.register("Exercise", ExerciseSchema);

export const exerciseRouter: Router = (() => {
  const router = express.Router();

  exerciseRegistry.registerPath({
    method: "get",
    path: "/exercises/{ids}",
    tags: ["Exercise"],
    request: { params: GetExerciseSchema.shape.params },
    responses: createApiResponse(ExerciseSchema, "Success"),
  });

  router.get(
    "/:ids",
    //validateRequest(GetExerciseSchema),
    async (req: Request, res: Response) => {
      // const ids = parseInt(req.params.id as string, 10);
      console.log("idsParam");
      // Extract the ids parameter from the URL
      const idsParam = req.params.ids;

      // Split the idsParam by commas to get an array of IDs
      //const idsArray = idsParam.split(",").map((id) => id.trim()); // Trim to remove any accidental whitespace

      // Optionally, convert IDs to integers if they are numeric
      const ids = idsParam.split(",").map((id) => parseInt(id.trim(), 10));

      const serviceResponse = await exerciseService.findByIds(ids);
      handleServiceResponse(serviceResponse, res);
    }
  );

  return router;
})();
