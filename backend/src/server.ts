import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import pgPromise from "pg-promise";
import { pino } from "pino";

import { healthCheckRouter } from "@/api/healthCheck/healthCheckRouter";
import { userRouter } from "@/api/user/userRouter";
import { openAPIRouter } from "@/api-docs/openAPIRouter";
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import { env } from "@/common/utils/envConfig";

const logger = pino({ name: "server start" });
const app: Express = express();

const pgp = pgPromise({
  /* Initialization Options */
});
const db = pgp("postgres://myuser:mypassword@localhost:5432/mydatabase");

async function getExercisesForUser(username: string): Promise<Exercise[]> {
  const query = `
      SELECT 
        e.id AS exercise_id,
        e.name AS exercise_name,
        e.description,
        e.exercisedata
      FROM 
        "USER" u
      JOIN 
        "USER_EXERCISE" ue ON u.id = ue.user_id
      JOIN 
        "EXERCISE" e ON ue.exercise_id = e.id
      WHERE 
        u.username = $1;
    `;

  try {
    const exercises = await db.any(query, [username]);
    return exercises;
  } catch (error) {
    console.error("Error querying exercises for user:", error);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    const username = "john_doe"; // Replace with the actual username
    const exercises = await getExercisesForUser(username);
    console.log("Exercises for user:", exercises);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    pgp.end(); // Close the database connection
  }
})();

db.one("SELECT $1 AS value", 123)
  .then(function (data) {
    console.log("DATA:", data.value);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Routes
app.use("/health-check", healthCheckRouter);
app.use("/users", userRouter);

// Swagger UI
app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

export { app, logger };
