import { StatusCodes } from "http-status-codes";

import { Exercise } from "@/api/exercise/exerciseModel";
import { exerciseRepository } from "@/api/exercise/exerciseRepository";
import {
  ResponseStatus,
  ServiceResponse,
} from "@/common/models/serviceResponse";
import { logger } from "@/server";

export const exerciseService = {
  // Retrieves a single exercise by their ID
  findByIds: async (
    ids: number[]
  ): Promise<ServiceResponse<Exercise | null>> => {
    try {
      const exercise = await exerciseRepository.findByIdsAsync(ids);
      if (!exercise) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "Exercise not found",
          null,
          StatusCodes.NOT_FOUND
        );
      }
      return new ServiceResponse<Exercise>(
        ResponseStatus.Success,
        "Exercise found",
        exercise,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = `Error finding exercise with ids ${ids}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
};
