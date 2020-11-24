import { InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { movies } from "gql/queries/movie";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { MovieList } from "../MovieList";

const mocks = [
  {
    request: {
      query: movies,
    },
    result: {
      data: {
        movies: [
          {
            ID: "1",
            Title: "Movie 1",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
          },
          {
            ID: "2",
            Title: "Movie 2",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
          },
        ],
      },
    },
  },
];

it("Movie List renders without error and correct data", async () => {
  const cache = new InMemoryCache({ addTypename: false });
  const component = render(
    <MockedProvider mocks={mocks} cache={cache}>
      <MemoryRouter>
        <Route path="/">
          <MovieList />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );
  await component.findByText("Movie 1");
  await component.findByText("Movie 2");
});
