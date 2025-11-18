import { CheckCircle2 } from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type ProgressCardData = {
  title: string;
  subtitle: string;
  progressLabel: string;
  progressValue: number;
  steps: string[];
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
        {data.steps.map((step) => (
          <li key={step} className={styles.progressItem}>
            <CheckCircle2 size={18} color="#22c55e" />
            {step}
          </li>
        ))}
      </ul>
    </article>
  );
}
