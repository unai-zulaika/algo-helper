"use client";

import styles from "./page.module.css";
import MainLayout from "@/layout/MainLayout";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "../app/theme";

export default function Home() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <main
        // className={styles.main}
        style={{ height: "100%" }}
      >
        <MainLayout />
      </main>
    </CssVarsProvider>
  );
}
