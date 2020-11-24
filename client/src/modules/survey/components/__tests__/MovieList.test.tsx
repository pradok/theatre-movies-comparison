import { InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { surveys } from "gql/queries/survey";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { SurveyList } from "../SurveyList";

const mocks = [
  {
    request: {
      query: surveys,
    },
    result: {
      data: {
        surveys: [
          { id: "1", name: "Survey 1" },
          { id: "2", name: "Survey 2" },
        ],
      },
    },
  },
];

it("SurveyList renders without error and correct data", async () => {
  const cache = new InMemoryCache({ addTypename: false });
  const component = render(
    <MockedProvider mocks={mocks} cache={cache}>
      <MemoryRouter>
        <Route path="/">
          <SurveyList />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );
  await component.findByText("Survey 1");
  await component.findByText("Survey 2");
});
