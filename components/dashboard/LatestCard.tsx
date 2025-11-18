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
  carousel?: {
    total: number;
    activeIndex: number;
  };
};

type LatestCardProps = {
  data: LatestCardData;
};

export function LatestCard({ data }: LatestCardProps) {
  const videoUrl = data.media.embedUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const totalSlides = data.carousel?.total ?? 3;
  const activeIndex = data.carousel?.activeIndex ?? 0;

  return (
    <article className={styles.latestCard}>
      <div className={styles.latestCardHeader}>
        <p className={styles.eyebrow}>{data.eyebrow}</p>
        <div className={styles.carouselIndicators} aria-label="Latest tutorials pagination">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={`indicator-${index}`}
              className={`${styles.carouselDot} ${
                index === activeIndex ? styles.carouselDotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className={styles.latestContent}>
        <div className={styles.latestMedia}>
          <iframe
            className={styles.videoEmbed}
            width={143}
            height={97}
            src={videoUrl}
            title={`Latest tutorial video - ${data.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <span className={styles.mediaDuration}>{data.media.duration}</span>
        </div>
        <div className={styles.latestBody}>
          <h3 className={styles.latestTitle}>{data.title}</h3>
          <p className={styles.latestDescription}>{data.description}</p>
          <p className={styles.latestMeta}>{data.meta}</p>
        </div>
      </div>
    </article>
  );
}
