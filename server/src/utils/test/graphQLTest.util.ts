import { ApolloServer } from "apollo-server";
import {
  ApolloServerTestClient,
  createTestClient,
} from "apollo-server-testing";
import { graphql, GraphQLSchema } from "graphql";
import { createSchema } from "./createSchema";

interface Options {
  source: string;
}

let schema: GraphQLSchema;

export const graphQLTest = async ({ source }: Options) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
  });
};

export async function testServer(
  dataSources: any
): Promise<ApolloServerTestClient> {
  if (!schema) {
    schema = await createSchema();
  }
  return createTestClient(new ApolloServer({ schema, dataSources }));
}
