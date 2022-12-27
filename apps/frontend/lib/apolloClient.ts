import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});