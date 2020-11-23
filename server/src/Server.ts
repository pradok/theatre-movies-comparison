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
  // imports: [MovieDataSource],
  // componentsScan: [
  //   "${rootDir}/movies/**/*.ts", // add this pattern to scan resolvers or datasources
  // ],
  graphql: {
    default: {
      path: "/graphql",
      resolvers: [MovieResolver],
      dataSources: () => {
        return {
          moviesApi: new MovieDataSource(),
        };
      },
      // buildSchemaOptions: {},
    },
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {
  // @Inject()
  // app: PlatformApplication;
  // @Configuration()
  // settings: Configuration;
  // $beforeRoutesInit(): void {
  //   this.app
  //     .use(helmet())
  //     .use(cors())
  //     .use(cookieParser())
  //     .use(compress({}))
  //     .use(methodOverride())
  //     .use(bodyParser.json())
  //     .use(
  //       bodyParser.urlencoded({
  //         extended: true,
  //       })
  //     );
  // }
}
