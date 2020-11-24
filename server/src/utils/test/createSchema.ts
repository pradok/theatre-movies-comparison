import { buildSchema } from "type-graphql";
import { MovieResolver } from "../../movies/resolvers/Movie.resolver";

export const createSchema = () =>
  buildSchema({
    resolvers: [MovieResolver],
  });
