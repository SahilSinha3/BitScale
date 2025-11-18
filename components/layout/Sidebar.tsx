import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";

import { NAV_SECTIONS } from "@/constants/navigation";
import styles from "@/styles/components/layout/Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.brandWrapper}>
        <div className={styles.brandMark}>B</div>
        <div className={styles.brandInfo}>
          <p className={styles.brandName}>Bitscale</p>
        </div>
      </div>

      <div className={styles.workspaceCard}>
        <div className={styles.workspaceInfo}>
          <div className={styles.workspaceAvatar}>
            <Image
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=80&q=80"
              alt="Workspace avatar"
              width={36}
              height={36}
            />
          </div>
          <div>
            <p className={styles.workspaceName}>GTM Spaces</p>
          </div>
        </div>
        <ChevronsUpDown className={styles.navIcon} />
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
        <div>
          <p>BitScale</p>
          <p className={styles.supportDescription}>Get Support at Bitscale </p>
        </div>
      </div>
    </aside>
  );
}
