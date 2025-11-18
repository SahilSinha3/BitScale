import Image from "next/image";
import {
  Building2,
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
  Search,
  Star,
  Users,
} from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type TableRow = {
  name: string;
  icon: string;
  editedBy: string;
  editorAvatar?: string;
  lastEdited: string;
  badges?: string[];
  expandable?: boolean;
  starred?: boolean;
};

const iconMap = {
  Notebook,
  Linkedin,
  Compass,
  Building2,
  FileSpreadsheet,
  Users,
  MapPin,
  Search,
  Figma,
  ListChecks,
};

type GridTableProps = {
  rows: TableRow[];
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function GridTable({ rows }: GridTableProps) {
  return (
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
          {rows.map((row) => {
            const Icon = iconMap[row.icon as keyof typeof iconMap] ?? LayoutGrid;
            return (
              <tr key={row.name}>
                <td>
                  <div className={styles.nameCell}>
                    {row.expandable && <ChevronDown className={styles.expandIcon} size={16} />}
                    {row.starred ? (
                      <Star className={styles.rowStar} size={14} color="#facc15" fill="#facc15" />
                    ) : (
                      <Star className={`${styles.rowStar} ${styles.rowStarInactive}`} size={14} />
                    )}
                    <div className={styles.iconPill}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className={styles.rowTitle}>{row.name}</div>
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
                    {row.editorAvatar ? (
                      <Image
                        src={row.editorAvatar}
                        alt={row.editedBy}
                        width={32}
                        height={32}
                        className={styles.avatarImageThumb}
                      />
                    ) : (
                      <div className={styles.avatarBubble}>{getInitials(row.editedBy)}</div>
                    )}
                    {row.editedBy}
                  </div>
                </td>
                <td>{row.lastEdited}</td>
                <td className={styles.actionsCell}>
                  <button type="button" aria-label="Row actions">
                    <MoreHorizontal />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
