import {
  buildActivityFeed,
  loadDashboardSnapshot,
  getDashboardTargetPatientId,
} from "@/lib/dashboard-data";
import { HealthAnalyticsChart } from "@/components/dashboard/health-analytics-chart";
import { LiveAiRefresh } from "@/components/dashboard/live-ai-refresh";
import { DashboardClient } from "@/components/dashboard/dashboard-client";

export default async function Home() {
  const snapshot = await loadDashboardSnapshot(getDashboardTargetPatientId());
  const activityFeed = buildActivityFeed(snapshot);

  return (
    <DashboardClient
      snapshot={snapshot}
      activityFeed={activityFeed}
      HealthAnalyticsChart={HealthAnalyticsChart}
      LiveAiRefresh={LiveAiRefresh}
    />
  );
}
