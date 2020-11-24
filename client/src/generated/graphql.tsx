import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  moviePrices: Array<Movie>;
  /** Get all the movies from providers */
  movies: Array<Movie>;
};


export type QueryMoviePricesArgs = {
  id: Scalars['String'];
};

/** Object representing cooking recipe */
export type Movie = {
  __typename?: 'Movie';
  ID: Scalars['ID'];
  Title: Scalars['String'];
  Type: Scalars['String'];
  Poster: Scalars['String'];
  Price?: Maybe<Scalars['Float']>;
  Provider?: Maybe<Scalars['String']>;
};

export type MoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesQuery = (
  { __typename?: 'Query' }
  & { movies: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'ID' | 'Title' | 'Type' | 'Poster'>
  )> }
);

export type MoviePricesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MoviePricesQuery = (
  { __typename?: 'Query' }
  & { moviePrices: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'ID' | 'Title' | 'Type' | 'Poster' | 'Price' | 'Provider'>
  )> }
);


export const MoviesDocument = gql`
    query movies {
  movies {
    ID
    Title
    Type
    Poster
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, baseOptions);
      }
export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, baseOptions);
        }
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;
export const MoviePricesDocument = gql`
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

/**
 * __useMoviePricesQuery__
 *
 * To run a query within a React component, call `useMoviePricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviePricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviePricesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMoviePricesQuery(baseOptions: Apollo.QueryHookOptions<MoviePricesQuery, MoviePricesQueryVariables>) {
        return Apollo.useQuery<MoviePricesQuery, MoviePricesQueryVariables>(MoviePricesDocument, baseOptions);
      }
export function useMoviePricesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviePricesQuery, MoviePricesQueryVariables>) {
          return Apollo.useLazyQuery<MoviePricesQuery, MoviePricesQueryVariables>(MoviePricesDocument, baseOptions);
        }
export type MoviePricesQueryHookResult = ReturnType<typeof useMoviePricesQuery>;
export type MoviePricesLazyQueryHookResult = ReturnType<typeof useMoviePricesLazyQuery>;
export type MoviePricesQueryResult = Apollo.QueryResult<MoviePricesQuery, MoviePricesQueryVariables>;