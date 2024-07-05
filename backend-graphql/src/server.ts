import cors from "cors";
import { pino } from "pino";
import express, { Express } from "express";
import helmet from "helmet";

import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import requestLogger from "./common/middleware/requestLogger";
import { env } from "./common/utils/envConfig";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { root } from "./graphql/resolvers";

const logger = pino({ name: "server start" });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
// app.use(helmet()); // Disabled for now
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Error handlers
// app.use(errorHandler()); // Disabled for now

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

export { app, logger };
