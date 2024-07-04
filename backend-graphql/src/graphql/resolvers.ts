import { Pool } from "pg";
import dotenv from "dotenv";
import { AlgoUser, Exercise, UserSettings, ExerciseData } from "../types";

dotenv.config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

export const root = {
  users: async (): Promise<AlgoUser[]> => {
    const res = await pool.query("SELECT * FROM ALGOUSER");
    return res.rows.map((row: any) => ({
      ...row,
      settings: JSON.parse(row.settings),
    }));
  },
  user: async ({ id }: { id: number }): Promise<AlgoUser> => {
    const res = await pool.query("SELECT * FROM ALGOUSER WHERE id = $1", [id]);
    return {
      ...res.rows[0],
      settings: JSON.parse(res.rows[0].settings),
    };
  },
  exercises: async (): Promise<Exercise[]> => {
    const res = await pool.query("SELECT * FROM EXERCISE");
    return res.rows.map((row: any) => ({
      ...row,
      exercisedata: JSON.parse(row.exercisedata),
    }));
  },
  exercise: async ({ id }: { id: number }): Promise<Exercise> => {
    const res = await pool.query("SELECT * FROM EXERCISE WHERE id = $1", [id]);
    return {
      ...res.rows[0],
      exercisedata: JSON.parse(res.rows[0].exercisedata),
    };
  },
  userExercises: async ({
    userId,
  }: {
    userId: number;
  }): Promise<Exercise[]> => {
    const res = await pool.query(
      "SELECT EXERCISE.* FROM USER_EXERCISE JOIN EXERCISE ON USER_EXERCISE.exercise_id = EXERCISE.id WHERE USER_EXERCISE.user_id = $1",
      [userId]
    );
    console.log(res.rows[0].exercisedata);
    console.log(JSON.parse(res.rows[0].exercisedata));
    console.log("EEEEEEEEEEEEEEEEE");
    return res.rows.map((row: any) => ({
      ...row,
      exercisedata: row.exercisedata,
    }));
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
    const res = await pool.query(
      "INSERT INTO ALGOUSER (username, email, settings) VALUES ($1, $2, $3) RETURNING *",
      [username, email, JSON.stringify(settings)]
    );
    return {
      ...res.rows[0],
      settings: JSON.parse(res.rows[0].settings),
    };
  },
  createExercise: async ({
    name,
    exercisedata,
  }: {
    name: string;
    exercisedata: ExerciseData;
  }): Promise<Exercise> => {
    const res = await pool.query(
      "INSERT INTO EXERCISE (name, exercisedata) VALUES ($1, $2) RETURNING *",
      [name, JSON.stringify(exercisedata)]
    );
    return {
      ...res.rows[0],
      exercisedata: JSON.parse(res.rows[0].exercisedata),
    };
  },
};
