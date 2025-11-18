import styles from "@/styles/ui/Dashboard.module.css";

type LatestCardData = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  media: {
    thumbnail: string;
    duration: string;
    embedUrl?: string;
  };
};

type LatestCardProps = {
  data: LatestCardData;
};

export function LatestCard({ data }: LatestCardProps) {
  const videoUrl = data.media.embedUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <article className={styles.latestCard}>
      <div className={styles.latestMedia}>
        <iframe
          className={styles.videoEmbed}
          width={143}
          height={97}
          src={videoUrl}
          title={`Latest tutorial video - ${data.title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
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
