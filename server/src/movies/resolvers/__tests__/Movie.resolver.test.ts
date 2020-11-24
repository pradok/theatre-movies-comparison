import { gql } from "apollo-server";
import { testServer } from "../../../utils/test/graphQLTest.util";
import { MovieDataSource } from "../../dataSources/datasource.movies";
import { Movie } from "../../models/Movie.model";

const moviesQuery = gql`
  query movies {
    movies {
      ID
      Title
      Type
      Poster
    }
  }
`;

const movies = {
  Movies: [
    {
      ID: "2488496",
      Title: "Star Wars: Episode VII - The Force Awakens",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
      ID: "2527336",
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
  ],
};

const moviesPricesQuery = gql`
  query moviePrices {
    moviePrices(id: "2488496") {
      ID
      Title
      Type
      Poster
    }
  }
`;

const movieProviderResponse = {
  ID: "cw2488496",
  Title: "Star Wars: Episode IX - The Rise of Skywalker",
  Year: "2019",
  Rated: "PG-13",
  Released: "18 Dec 2019",
  Runtime: "138 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "J.J. Abrams",
  Writer:
    "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
  Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
  Plot:
    "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
  Language: "English",
  Country: "USA",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
  Type: "movie",
  Production: "Walt Disney Pictures",
  Price: 24.7,
};

const moviePrices = [
  {
    ID: "2488496",
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    // Price: 24.7,
    // Provider: "Filmworld",
  },
  {
    ID: "2488496",
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    // Price: 24.7,
    // Provider: "CinemaWorld",
  },
];

it("fetches all movies", async () => {
  const moviesApi: any = new MovieDataSource();
  const getStub = (): Promise<{ Movies: Movie[] }> => Promise.resolve(movies);
  moviesApi.get = jest.fn(getStub);
  const { query } = await testServer(() => ({ moviesApi }));
  const response = await query<{ movies: Movie[] }>({ query: moviesQuery });
  expect(response.data?.movies).toEqual(movies.Movies);
});

it("fetches movie prices", async () => {
  const moviesApi: any = new MovieDataSource();
  const getStub = (): Promise<any> => Promise.resolve(movieProviderResponse);
  moviesApi.get = jest.fn(getStub);
  const { query } = await testServer(() => ({ moviesApi }));
  const response = await query<{ moviePrices: Movie[] }>({
    query: moviesPricesQuery,
  });
  console.log(response.data);
  expect(response.data?.moviePrices).toEqual(moviePrices);
});
