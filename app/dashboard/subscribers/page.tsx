export default function SubscribersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Subscribers</h1>
      <div className="border border-dashed rounded-lg py-12 text-center bg-card/60">
        <h2 className="text-2xl font-semibold mb-2">Your subscriber list is empty.</h2>
        <p className="mb-5 text-muted-foreground">Start growing your audience — add your first subscribers.</p>
        <a
          href="#"
          className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          Add Subscribers
        </a>
      </div>
    </div>
  );
}