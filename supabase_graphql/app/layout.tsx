import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import React from "react";
import "./globals.css";
import Header from "./_components/header";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  defaultDataIdFromObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

export const metadata = {
  title: "SampleApp on Firebase",
  description: "APIサーバを使わずFirebaseのみで実行されるサンプルアプリ",
};

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ApolloProvider client={apolloClient}>
            <Header />
            {children}
          </ApolloProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
