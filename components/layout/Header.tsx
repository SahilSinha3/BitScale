import { UserRound } from "lucide-react";

import { ThemeSwitch } from "./ThemeSwitch";
import styles from "@/styles/components/layout/Header.module.css";

const usageCopy = "450,000 / 550,000";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.actions}>
          <div className={styles.info}>
        <div className={styles.quotaPill}>
          <span className={styles.quotaValue}>{usageCopy}</span>
          <button className={styles.boosterButton}>Booster Plan</button>
        </div>
      </div>
        <ThemeSwitch />
        <div className={styles.userAvatar}>``
          <UserRound className={styles.avatarIcon} />
        </div>
      </div>
    </header>
  );
}
