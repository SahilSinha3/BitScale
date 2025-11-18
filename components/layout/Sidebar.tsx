import Image from "next/image";
import {
  BookOpenCheck,
  Boxes,
  ChevronsUpDown,
  LayoutDashboard,
  Rocket,
  Settings,
} from "lucide-react";

import sidebarData from "@/constants/components/sidebar.json";
import styles from "@/styles/components/layout/Sidebar.module.css";

const iconComponents = {
  LayoutDashboard,
  Rocket,
  Boxes,
  BookOpenCheck,
  Settings,
} as const;

type IconName = keyof typeof iconComponents;

function getIcon(name: string) {
  const key = name as IconName;
  return iconComponents[key] ?? LayoutDashboard;
}

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.brandWrapper}>
        <div className={styles.brandMark}>{sidebarData.brand.mark}</div>
        <div className={styles.brandInfo}>
          <p className={styles.brandName}>{sidebarData.brand.name}</p>
        </div>
      </div>

      <div className={styles.workspaceCard}>
        <div className={styles.workspaceInfo}>
          <div className={styles.workspaceAvatar}>
            <Image
              src={sidebarData.workspace.avatar}
              alt="Workspace avatar"
              width={36}
              height={36}
            />
          </div>
          <div>
            <p className={styles.workspaceName}>{sidebarData.workspace.name}</p>
          </div>
        </div>
        <ChevronsUpDown className={styles.navIcon} />
      </div>

      <div className={styles.sections}>
        {sidebarData.sections.map((section) => (
          <div key={section.title}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <div className={styles.navList}>
              {section.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={`${styles.navButton} ${item.isHighlighted ? styles.active : ""}`}
                  >
                    <span className={styles.navButtonContent}>
                      <Icon className={styles.navIcon} />
                      {item.label}
                    </span>
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.supportCard}>
        <div>
          <p>{sidebarData.support.title}</p>
          <p className={styles.supportDescription}>{sidebarData.support.subtitle}</p>
        </div>
      </div>
    </aside>
  );
}
