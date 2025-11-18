import type { ComponentProps } from "react";

import { ActionButtons } from "@/components/dashboard/ActionButtons";
import { GridTable } from "@/components/dashboard/GridTable";
import { LatestCard } from "@/components/dashboard/LatestCard";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { TabsBar } from "@/components/dashboard/TabsBar";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import dashboardData from "@/constants/ui/dashboard.json";
import styles from "@/styles/ui/Dashboard.module.css";

const activeTabKey =
  dashboardData.tabs.find((tab) => tab.active)?.key ?? dashboardData.tabs[0]?.key;

const normalizedActionButtons: ComponentProps<typeof ActionButtons>["buttons"] =
  dashboardData.actionButtons.map((button) => ({
    ...button,
    variant: button.variant === "primary" ? "primary" : "outline",
  }));

export default function Home() {
  return (
    <PageSkeleton>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.welcomeTitle}>{dashboardData.welcome.title}</p>
            <p className={styles.welcomeSubtitle}>{dashboardData.welcome.subtitle}</p>
          </div>
          <ActionButtons buttons={normalizedActionButtons} />
        </div>

        <div className={styles.cardsRow}>
          <LatestCard data={dashboardData.latestCard} />
          <ProgressCard data={dashboardData.progressCard} />
        </div>

        <TabsBar
          tabs={dashboardData.tabs}
          activeKey={activeTabKey}
          searchPlaceholder={dashboardData.table.searchPlaceholder}
        />

        <GridTable rows={dashboardData.table.rows} />
      </div>
    </PageSkeleton>
  );
}
