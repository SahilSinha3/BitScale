import Image from "next/image";
import { UserRound } from "lucide-react";

import { ThemeSwitch } from "./ThemeSwitch";
import headerData from "@/constants/components/header.json";
import styles from "@/styles/components/layout/Header.module.css";

const { usage, boosterLabel, avatar } = headerData;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.actions}>
        <div className={styles.info}>
          <div className={styles.quotaPill}>
            <span className={styles.quotaValue}>{usage}</span>
            <button className={styles.boosterButton}>{boosterLabel}</button>
          </div>
        </div>
        <ThemeSwitch />
        <div className={styles.userAvatar}>
          {avatar ? (
            <Image
              src={avatar}
              alt="User avatar"
              fill
              sizes="40px"
              className={styles.avatarImage}
            />
          ) : (
            <UserRound className={styles.avatarIcon} />
          )}
        </div>
      </div>
    </header>
  );
}
