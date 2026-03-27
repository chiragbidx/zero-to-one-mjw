"use client";

import { Button } from "@/components/ui/button";

export default function Client({ firstName }: { firstName: string }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome to MailPilot</h1>
        <div className="text-muted-foreground mb-3">Your command center for email marketing success.</div>
      </div>
      <div className="border border-dashed rounded-lg py-12 text-center bg-card/60">
        <h2 className="text-2xl font-semibold mb-2">No campaigns yet</h2>
        <p className="mb-5 text-muted-foreground">Create your first campaign to start reaching your audience.</p>
        <Button asChild>
          <a href="/dashboard/campaigns/new">Create Campaign</a>
        </Button>
      </div>
    </div>
  );
}