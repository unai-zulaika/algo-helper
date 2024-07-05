import knex from "../db";
import { AlgoUser, Exercise, UserSettings, ExerciseData } from "../types";

export const root = {
  users: async (): Promise<AlgoUser[]> => {
    const users = await knex("algo_user").select("*");
    return users;
  },
  user: async ({ id }: { id: number }): Promise<AlgoUser> => {
    const user = await knex("algo_user").where({ id }).first();
    return user;
  },
  exercises: async (): Promise<Exercise[]> => {
    const exercises = await knex("exercise").select("*");
    return exercises;
  },
  exercise: async ({ id }: { id: number }): Promise<Exercise> => {
    const exercise = await knex("exercise").where({ id }).first();
    return exercise;
  },
  userExercises: async ({
    userId,
  }: {
    userId: number;
  }): Promise<Exercise[]> => {
    const exercises = await knex("user_exercise")
      .join("exercise", "user_exercise.exercise_id", "exercise.id")
      .where("user_exercise.user_id", userId)
      .select("exercise.*");
    return exercises;
  },
  createUser: async ({
    username,
    email,
    settings,
  }: {
    username: string;
    email: string;
    settings: UserSettings;
  }): Promise<AlgoUser> => {
    const [user] = await knex("algo_user")
      .insert({
        username,
        email,
        settings: JSON.stringify(settings),
      })
      .returning("*");

    return user;
  },
  createExercise: async ({
    name,
    exercisedata,
  }: {
    name: string;
    exercisedata: ExerciseData;
  }): Promise<Exercise> => {
    const [exercise] = await knex("exercise")
      .insert({
        name,
        exercisedata: JSON.stringify(exercisedata),
      })
      .returning("*");

    return exercise;
  },
};
