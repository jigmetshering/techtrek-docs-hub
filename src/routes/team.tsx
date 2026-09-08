import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team — Tech Trek Docs" },
      { name: "description", content: "Meet the team building our Tech Trek project." },
    ],
  }),
  component: TeamPage,
});

const members = [
  { name: "Tandin Wangyel", role: "Lead Developer", bio: "Drives the codebase, architecture and gameplay systems.", initial: "TW" },
  { name: "Jigme Tshering", role: "Documentation and Website", bio: "Owns project documentation, site content and the public-facing experience.", initial: "JT" },
  { name: "Sangay Tharchen", role: "Design", bio: "Shapes the visual style, characters, UI and in-game assets.", initial: "ST" },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <PageHeader
        eyebrow="Who we are"
        title="The team"
        description="A small crew working together to build something we're proud of."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {members.map((m) => (
          <div key={m.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-gradient font-display text-xl font-bold text-primary-foreground shadow-mint">
                {m.initial}
              </div>
              <div>
                <div className="font-display text-lg font-semibold">{m.name}</div>
                <div className="text-xs uppercase tracking-widest text-mint">{m.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
