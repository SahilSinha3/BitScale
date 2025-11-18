import Image from "next/image";
import { Play } from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type LatestCardData = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  media: {
    thumbnail: string;
    duration: string;
  };
};

type LatestCardProps = {
  data: LatestCardData;
};

export function LatestCard({ data }: LatestCardProps) {
  return (
    <article className={styles.latestCard}>
      <div className={styles.latestMedia}>
        <Image
          src={data.media.thumbnail}
          alt={data.title}
          width={160}
          height={120}
          className={styles.latestImage}
        />
        <button type="button" className={styles.playButton} aria-label="Play tutorial">
          <Play size={16} />
        </button>
        <span className={styles.mediaDuration}>{data.media.duration}</span>
      </div>
      <div className={styles.latestBody}>
        <p className={styles.eyebrow}>{data.eyebrow}</p>
        <h3 className={styles.latestTitle}>{data.title}</h3>
        <p className={styles.latestDescription}>{data.description}</p>
        <p className={styles.latestMeta}>{data.meta}</p>
      </div>
    </article>
  );
}
