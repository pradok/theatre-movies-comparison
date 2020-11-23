import { ResolverService } from "@tsed/graphql";
import { Arg, Ctx, Query } from "type-graphql";
import { ServerError } from "../../exceptions/exceptions";
import { MovieDataSource } from "../dataSources/datasource.movies";
import { Movie } from "../models/Movie.model";

@ResolverService(Movie)
export class MovieResolver {
  @Query(() => [Movie])
  async moviePrices(
    @Arg("id") id: string,
    @Ctx("dataSources") dataSources: { moviesApi: MovieDataSource }
  ) {
    const { moviesApi } = dataSources;
    try {
      const filmWorld = ((await moviesApi.getMovieById(
        id,
        "fw",
        "filmworld"
      )) as unknown) as Movie;
      filmWorld.Provider = "Filmworld";
      filmWorld.ID = id;
      const cinemaWorld = ((await moviesApi.getMovieById(
        id,
        "cw",
        "cinemaworld"
      )) as unknown) as Movie;
      cinemaWorld.Provider = "CinemaWorld";
      cinemaWorld.ID = id;
      return [filmWorld, cinemaWorld];
    } catch (error) {
      throw new ServerError("Movie price comparison");
    }
  }

  @Query(() => [Movie], {
    description: "Get all the movies from providers",
  })
  async movies(
    @Ctx("dataSources") dataSources: { moviesApi: MovieDataSource }
  ): Promise<Movie[]> {
    const movieDataSource: MovieDataSource = dataSources.moviesApi;
    try {
      const movies = await movieDataSource.getMovies();
      const moviesWithId = movies.Movies.map((movie) => ({
        ...movie,
        ID: movie.ID.replace(/[^0-9]/g, ""),
      }));
      return moviesWithId;
    } catch (error) {
      throw new ServerError("Movies");
    }
  }
}
