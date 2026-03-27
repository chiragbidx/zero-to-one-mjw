export default function AnalyticsOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Analytics Overview</h1>
      <div className="border border-dashed rounded-lg py-12 text-center bg-card/60">
        <h2 className="text-2xl font-semibold mb-2">No campaign data available yet.</h2>
        <p className="mb-5 text-muted-foreground">Once you send campaigns, analytics will appear here.</p>
      </div>
    </div>
  );
}