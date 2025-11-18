import { Check } from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type ProgressCardData = {
  title: string;
  subtitle: string;
  progressLabel: string;
  progressValue: number;
  steps: {
    label: string;
    completed: boolean;
  }[];
};

type ProgressCardProps = {
  data: ProgressCardData;
};

export function ProgressCard({ data }: ProgressCardProps) {
  return (
    <article className={styles.progressCard}>
      <div className={styles.progressHeader}>
        <div>
          <span className={styles.progressTitle}>{data.title}</span>
          <p className={styles.progressSubtitle}>{data.subtitle}</p>
        </div>
        <div className={styles.progressValue}>
          {data.progressValue}%<span className={styles.progressLabel}>{data.progressLabel}</span>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${data.progressValue}%` }} />
      </div>
      <ul className={styles.progressList}>
        {data.steps.map((step) => {
          const iconState = step.completed
            ? styles.progressIconComplete
            : styles.progressIconPending;
          return (
            <li key={step.label} className={styles.progressItem}>
              <span className={`${styles.progressIcon} ${iconState}`}>
                {step.completed ? <Check size={16} strokeWidth={3} /> : null}
              </span>
              <span>{step.label}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
