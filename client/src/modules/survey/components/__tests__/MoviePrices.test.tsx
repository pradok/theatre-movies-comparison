import { InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { moviePrices } from "gql/queries/movie";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { MoviePrices } from "../MoviePrices";

const mocks = [
  {
    request: {
      query: moviePrices,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        moviePrices: [
          {
            ID: "2488496",
            Title: "Star Wars: Episode VII - The Force Awakens",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            Price: 25,
            Provider: "Filmworld",
          },
          {
            ID: "2488496",
            Title: "Star Wars: Episode VII - The Force Awakens",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            Price: 24.7,
            Provider: "CinemaWorld",
          },
        ],
      },
    },
  },
];

it("Movie prices render without error and correct prices", async () => {
  const cache = new InMemoryCache({ addTypename: true });
  const component = render(
    <MockedProvider mocks={mocks} cache={cache}>
      <MemoryRouter initialEntries={["movie/2488496"]}>
        <Route path="movie/:id">
          <MoviePrices />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );
  await component.findByText("Cinemaworld");
  await component.findByText("Filmworld");
  await component.findByText("25");
  await component.findByText("24.7");
});
