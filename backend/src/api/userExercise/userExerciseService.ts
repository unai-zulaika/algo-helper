import { StatusCodes } from "http-status-codes";

import { userExerciseRepository } from "@/api/userExercise/userExerciseRepository";
import {
  ResponseStatus,
  ServiceResponse,
} from "@/common/models/serviceResponse";
import { logger } from "@/server";

export const userExerciseService = {
  // Retrieves a single user by their ID
  findByUserId: async (id: number): Promise<ServiceResponse<any | null>> => {
    try {
      const user = await userExerciseRepository.findByUserIdAsync(id);
      if (!user) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "User not found",
          null,
          StatusCodes.NOT_FOUND
        );
      }
      return new ServiceResponse<any>(
        ResponseStatus.Success,
        "User found",
        user,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = `Error finding user exercises with id ${id}:, ${(ex as Error).message}`;
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
