import type { ReactNode } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "@/styles/components/layout/PageSkeleton.module.css";

type PageSkeletonProps = {
  children: ReactNode;
};

export function PageSkeleton({ children }: PageSkeletonProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Header />
        <main className={styles.main}>
          <div className={styles.inner}>{children}</div>
        </main>
      </div>
    </div>
  );
}
