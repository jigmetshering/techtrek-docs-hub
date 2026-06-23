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
  { name: "Member One", role: "Lead Developer", bio: "Drives the codebase, architecture and gameplay systems.", initial: "1" },
  { name: "Member Two", role: "Game Designer", bio: "Owns mechanics, level design and the player experience.", initial: "2" },
  { name: "Member Three", role: "Artist", bio: "Visual style, characters, UI and in-game assets.", initial: "3" },
  { name: "Member Four", role: "Audio & QA", bio: "Sound design, music and quality assurance.", initial: "4" },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <PageHeader
        eyebrow="Who we are"
        title="The team"
        description="A small crew working together to build something we're proud of. Replace these placeholders with real names, photos and bios."
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
