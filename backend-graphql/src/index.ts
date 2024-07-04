import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { root } from "./graphql/resolvers";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
