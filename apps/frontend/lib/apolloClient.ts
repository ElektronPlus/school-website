import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

const client = new ApolloClient({
  uri: 'https://strapi.elektronplus.pl/graphql',
  cache: new InMemoryCache(),
});

export default client;
