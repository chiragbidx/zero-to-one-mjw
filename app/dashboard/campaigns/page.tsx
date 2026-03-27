export default function CampaignsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Campaigns</h1>
      <div className="border border-dashed rounded-lg py-12 text-center bg-card/60">
        <h2 className="text-2xl font-semibold mb-2">You haven’t created any campaigns yet.</h2>
        <p className="mb-5 text-muted-foreground">Start by creating a campaign to reach your audience.</p>
        <a
          href="/dashboard/campaigns/new"
          className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          Create Campaign
        </a>
      </div>
    </div>
  );
}