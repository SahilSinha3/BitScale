import { ChevronDown, HeadphonesIcon } from "lucide-react";

import { NAV_SECTIONS } from "@/constants/navigation";
import styles from "@/styles/components/layout/Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.brandMark}>B</div>
        <div className={styles.brandInfo}>
          <p className={styles.brandName}>Bitscale</p>
          <p className={styles.brandTagline}>GTM Super App</p>
        </div>
      </div>

      <div className={styles.workspaceCard}>
        <div className={styles.workspaceInfo}>
          <div className={styles.workspaceAvatar}>GT</div>
          <div>
            <p className={styles.workspaceName}>GTM Spaces</p>
            <p className={styles.workspaceMeta}>Workspace</p>
          </div>
        </div>
        <ChevronDown className={`${styles.navIcon} ${styles.chevron}`} />
      </div>

      <div className={styles.sections}>
        {NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <div className={styles.navList}>
              {section.items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`${styles.navButton} ${item.isHighlighted ? styles.active : ""}`}
                >
                  <span className={styles.navButtonContent}>
                    <item.icon className={styles.navIcon} />
                    {item.label}
                  </span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.supportCard}>
        <HeadphonesIcon className={styles.navIcon} />
        <div>
          <p>Get Support</p>
          <p className={styles.supportDescription}>Reach out to the Bitscale team</p>
        </div>
      </div>
    </aside>
  );
}
