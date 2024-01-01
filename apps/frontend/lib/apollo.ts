import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  ssrMode: typeof window === 'undefined',
});