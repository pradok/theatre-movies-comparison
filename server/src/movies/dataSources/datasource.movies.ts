import { DataSourceService } from "@tsed/graphql";
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

interface IMovieDetail {
  ID: string;
  Price: number;
  Poster: string;
  Title: string;
}

interface IMovie {
  ID: string;
  Title: string;
  Type: string;
  Poster: string;
}

@DataSourceService()
export class MovieDataSource extends RESTDataSource {
  constructor() {
    super();
    // TODO use baseURL via env
    this.baseURL = "https://challenge.lexicondigital.com.au/api";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set(
      "x-api-key",
      // TODO use key via env
      "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
    );
  }

  async getMovies(): Promise<{ Provider: string; Movies: IMovie[] }> {
    return await this.get(`/cinemaworld/movies`, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getMovieById(
    id: string,
    providerCode: "cw" | "fw",
    providerName: "filmworld" | "cinemaworld"
  ): Promise<IMovieDetail> {
    const movie = await this.get<IMovieDetail>(
      `/${providerName}/movie/${providerCode}${id}`,
      undefined,
      {
        cacheOptions: { ttl: 60 },
      }
    );
    return movie;
  }
}
