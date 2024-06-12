import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
});

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  };
});

export const createApolloClient = (): ApolloClient<unknown> => {
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return apolloClient;
};
