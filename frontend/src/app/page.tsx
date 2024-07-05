"use client";

import styles from "./page.module.css";
import MainLayout from "@/layout/MainLayout";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "../app/theme";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
        <CssBaseline />
        <main
          // className={styles.main}
          style={{ height: "100%" }}
        >
          <MainLayout />
        </main>
      </CssVarsProvider>
    </ApolloProvider>
  );
}
