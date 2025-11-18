import { ArrowUpRight, UserRound } from "lucide-react";

const usageCopy = "450,000 / 550,000";

import styles from "@/styles/components/layout/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.usage}>
        <span className={styles.usageLabel}>Current Usage</span>
        <span className={styles.usageValue}>{usageCopy}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.boosterButton}>
          Booster Plan
          <ArrowUpRight className={styles.icon} />
        </button>
        <div className={styles.userAvatar}>
          <UserRound className={styles.icon} />
        </div>
      </div>
    </header>
  );
}
