"use client";

import styles from "./page.module.css";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <main className={styles.main} style={{ height: "100%" }}>
      <MainLayout />
    </main>
  );
}
