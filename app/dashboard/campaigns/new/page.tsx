export default function CreateCampaignPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Create Campaign</h1>
      <div className="mb-5 text-muted-foreground">
        Set up your next email campaign in a few simple steps.
      </div>
      <a
        href="/dashboard/campaigns"
        className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
      >
        Save Draft
      </a>
    </div>
  );
}