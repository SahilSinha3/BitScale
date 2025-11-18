import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileSpreadsheet,
  Figma,
  LayoutGrid,
  Linkedin,
  ListChecks,
  MapPin,
  MoreHorizontal,
  Notebook,
  Play,
  Plus,
  Search as SearchIcon,
  Star,
  Users,
} from "lucide-react";

import { PageSkeleton } from "@/components/layout/PageSkeleton";
import dashboardData from "@/constants/ui/dashboard.json";
import styles from "@/styles/ui/Dashboard.module.css";

const iconMap = {
  Notebook,
  Linkedin,
  Compass,
  Building2,
  FileSpreadsheet,
  Users,
  MapPin,
  Search: SearchIcon,
  Figma,
  ListChecks,
};

const actionIconMap = {
  Plus,
};

const activeTabKey = dashboardData.tabs[0]?.key;

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Home() {
  const contentCard = dashboardData.cards[0];
  const progressCard = dashboardData.cards[1];

  if (!contentCard || !progressCard) {
    return (
      <PageSkeleton>
        <div className={styles.container}>Dashboard data is unavailable.</div>
      </PageSkeleton>
    );
  }

  return (
    <PageSkeleton>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.welcomeTitle}>{dashboardData.welcome.title}</p>
            <p className={styles.welcomeSubtitle}>{dashboardData.welcome.subtitle}</p>
          </div>
          <div className={styles.actions}>
            {dashboardData.actionButtons.map((button) => {
              const Icon = button.icon
                ? actionIconMap[button.icon as keyof typeof actionIconMap]
                : null;
              return (
                <button
                  key={button.label}
                  type="button"
                  className={`${styles.actionButton} ${styles[button.variant]}`}
                >
                  {Icon && <Icon size={16} />}
                  {button.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.cardsRow}>
          <article className={styles.contentCard}>
            <div className={styles.contentHeader}>
              <span>{contentCard.title}</span>
              <div>•••</div>
            </div>
            <div className={styles.mediaPreview}>
              <Play />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{contentCard.heading}</h3>
              <p className={styles.cardDescription}>{contentCard.description}</p>
              <p className={styles.progressValue}>{contentCard.meta}</p>
            </div>
          </article>

          <article className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <div>
                <span>{progressCard.title ?? ""}</span>
                <p className={styles.cardDescription}>{progressCard.subtitle ?? ""}</p>
              </div>
              <span className={styles.progressValue}>{progressCard.progress ?? 0}%</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressCard.progress ?? 0}%` }}
              />
            </div>
            <ul className={styles.progressList}>
              {progressCard.items?.map((item: string) => (
                <li key={item} className={styles.progressItem}>
                  <CheckCircle2 size={18} color="#22c55e" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className={styles.tabsRow}>
          <div className={styles.tabs}>
            {dashboardData.tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`${styles.tabButton} ${
                  tab.key === activeTabKey ? styles.tabButtonActive : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={styles.searchBar}>
            <SearchIcon size={18} />
            <input
              className={styles.searchInput}
              placeholder={dashboardData.table.searchPlaceholder}
              aria-label="Search grids"
            />
            <LayoutGrid size={18} />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Edited by</th>
                <th>Last edited</th>
                <th className={styles.actionsCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.table.rows.map((row) => {
                const Icon = iconMap[row.icon as keyof typeof iconMap] ?? iconMap.Notebook;
                return (
                  <tr key={row.name}>
                    <td>
                      <div className={styles.nameCell}>
                        {row.expandable && <ChevronDown className={styles.expandIcon} size={16} />}
                        <div className={styles.iconPill}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div>
                            {row.starred && <Star size={14} color="#facc15" fill="#facc15" />}{" "}
                            {row.name}
                          </div>
                          {row.badges && (
                            <div className={styles.badgeGroup}>
                              {row.badges.map((badge) => (
                                <span key={badge} className={styles.badge}>
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.editorCell}>
                        <div className={styles.avatarBubble}>{getInitials(row.editedBy)}</div>
                        {row.editedBy}
                      </div>
                    </td>
                    <td>{row.lastEdited}</td>
                    <td className={styles.actionsCell}>
                      <button type="button">
                        <MoreHorizontal />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PageSkeleton>
  );
}
