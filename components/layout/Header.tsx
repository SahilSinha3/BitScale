"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import headerData from "@/constants/components/header.json";
import styles from "@/styles/components/layout/Header.module.css";

const { usage, boosterLabel, avatar, plan, profileMenu = [], user } = headerData;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.actions}>
        <div className={styles.info}>
          <div className={styles.quotaWrapper}>
            <div className={styles.quotaPill}>
              <span className={styles.quotaValue}>{usage}</span>
              <button className={styles.boosterButton}>{boosterLabel}</button>
            </div>
            {plan ? (
              <div className={styles.planPopover} role="status">
                <p className={styles.planPopoverTitle}>{plan.name}</p>
                <p className={styles.planPopoverMeta}>{plan.creditCopy}</p>
                <div className={styles.planUsageMeter} aria-hidden="true">
                  <div
                    className={styles.planUsageFill}
                    style={{ width: `${plan.usagePercentage ?? 0}%` }}
                  />
                </div>
                <div className={styles.planPopoverFooter}>
                  <span>{plan.usagePercentage ?? 0}% used</span>
                  <span>{plan.renewal}</span>
                </div>
                {plan.highlights?.length ? (
                  <ul className={styles.planFeatures}>
                    {plan.highlights.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.profileMenuWrapper} ref={menuRef}>
          <button
            type="button"
            className={styles.userAvatar}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            {avatar ? (
              <Image
                src={avatar}
                alt={user?.name ?? "User avatar"}
                fill
                sizes="40px"
                className={styles.avatarImage}
              />
            ) : (
              <UserRound className={styles.avatarIcon} />
            )}
          </button>
          {menuOpen ? (
            <div className={styles.profileMenu} role="menu">
              <div className={styles.profileHeading}>
                <p className={styles.profileName}>{user?.name ?? "Bitscale User"}</p>
                {user?.email ? <p className={styles.profileEmail}>{user.email}</p> : null}
              </div>
              <ul className={styles.profileMenuList}>
                {profileMenu.map((item: string) => (
                  <li key={item}>
                    <button type="button" className={styles.profileMenuButton}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
