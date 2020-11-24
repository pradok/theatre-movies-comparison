import "@tsed/ajv";
import { Configuration } from "@tsed/di";
import "@tsed/platform-express"; // /!\ keep this import
import { MovieDataSource } from "./movies/dataSources/datasource.movies";
import { MovieResolver } from "./movies/resolvers/Movie.resolver";

export const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  mount: {},
  graphql: {
    default: {
      path: "/graphql",
      resolvers: [MovieResolver],
      dataSources: () => {
        return {
          moviesApi: new MovieDataSource(),
        };
      },
    },
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {}
