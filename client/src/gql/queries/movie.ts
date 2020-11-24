import gql from "graphql-tag";

export const movies = gql`
  query movies {
    movies {
      ID
      Title
      Type
      Poster
    }
  }
`;

export const moviePrices = gql`
  query moviePrices($id: String!) {
    moviePrices(id: $id) {
      ID
      Title
      Type
      Poster
      Price
      Provider
    }
  }
`;
