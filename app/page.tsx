import { PageSkeleton } from "@/components/layout/PageSkeleton";
import homeStyles from "@/styles/ui/Home.module.css";

export default function Home() {
  return (
    <PageSkeleton>
      <section className={homeStyles.grid}>
        <div className={homeStyles.card}>
          <p className={homeStyles.label}>Overview</p>
          <h2 className={homeStyles.cardHeading}>Welcome back to your dashboard</h2>
          <p className={homeStyles.cardDescription}>
            This area is ready for widgets, charts, and whatever else you want to ship next.
          </p>
        </div>
        <div className={`${homeStyles.card} ${homeStyles.muted}`}>
          <p className={homeStyles.mutedHeading}>Quick Notes</p>
          <p className={homeStyles.mutedBody}>
            Use this page skeleton to plug in your AI flows, KPIs, or onboarding steps. Everything
            is responsive out of the box.
          </p>
        </div>
      </section>
    </PageSkeleton>
  );
}
