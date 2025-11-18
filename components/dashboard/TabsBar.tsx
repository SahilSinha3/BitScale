import { LayoutGrid, Search as SearchIcon } from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type Tab = {
  label: string;
  key: string;
  active?: boolean;
};

type TabsBarProps = {
  tabs: Tab[];
  activeKey?: string;
  searchPlaceholder: string;
};

export function TabsBar({ tabs, activeKey, searchPlaceholder }: TabsBarProps) {
  const currentKey = activeKey ?? tabs.find((tab) => tab.active)?.key ?? tabs[0]?.key ?? "";

  return (
    <div className={styles.tabsRow}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`${styles.tabButton} ${
              tab.key === currentKey ? styles.tabButtonActive : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.searchBar}>
        <SearchIcon size={16} />
        <input
          className={styles.searchInput}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
        <LayoutGrid size={16} />
      </div>
    </div>
  );
}
