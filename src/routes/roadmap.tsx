import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check, Circle, Loader2 } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — Tech Trek Docs" },
      { name: "description", content: "Progress tracker for building the game." },
    ],
  }),
  component: RoadmapPage,
});

type Status = "done" | "active" | "todo";
const milestones: { phase: string; title: string; items: { label: string; status: Status }[] }[] = [
  {
    phase: "Phase 1",
    title: "Foundations",
    items: [
      { label: "Team formed & roles assigned", status: "done" },
      { label: "Core idea & pitch locked in", status: "done" },
      { label: "Tech stack chosen", status: "done" },
    ],
  },
  {
    phase: "Phase 2",
    title: "Prototype",
    items: [
      { label: "Core gameplay loop playable", status: "active" },
      { label: "Placeholder art & UI", status: "active" },
      { label: "First internal playtest", status: "todo" },
    ],
  },
  {
    phase: "Phase 3",
    title: "Vertical slice",
    items: [
      { label: "One polished level end-to-end", status: "todo" },
      { label: "Final art direction applied", status: "todo" },
      { label: "Sound & music pass", status: "todo" },
    ],
  },
  {
    phase: "Phase 4",
    title: "Submission",
    items: [
      { label: "QA & bugfixing", status: "todo" },
      { label: "Trailer & screenshots", status: "todo" },
      { label: "Submit to Tech Trek", status: "todo" },
    ],
  },
];

const styles: Record<Status, { icon: typeof Check; cls: string; label: string }> = {
  done: { icon: Check, cls: "bg-mint-gradient text-primary-foreground", label: "Done" },
  active: { icon: Loader2, cls: "bg-mint/15 text-mint border border-mint/40", label: "In progress" },
  todo: { icon: Circle, cls: "bg-muted text-muted-foreground", label: "Planned" },
};

function RoadmapPage() {
  const total = milestones.flatMap((m) => m.items).length;
  const done = milestones.flatMap((m) => m.items).filter((i) => i.status === "done").length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <PageHeader
        eyebrow="Progress tracker"
        title="Roadmap"
        description="Where we are in building the game. Update statuses as the project moves forward."
      />

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-mint">Overall progress</div>
            <div className="mt-1 font-display text-3xl font-bold">{pct}%</div>
          </div>
          <div className="text-sm text-muted-foreground">{done} / {total} tasks complete</div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-mint-gradient shadow-mint transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {milestones.map((m) => (
          <div key={m.phase} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="text-xs uppercase tracking-widest text-mint">{m.phase}</div>
            <h3 className="mt-1 font-display text-xl font-semibold">{m.title}</h3>
            <ul className="mt-4 space-y-2">
              {m.items.map((it) => {
                const s = styles[it.status];
                const Icon = s.icon;
                return (
                  <li key={it.label} className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full ${s.cls}`}>
                      <Icon className={`h-3.5 w-3.5 ${it.status === "active" ? "animate-spin" : ""}`} />
                    </span>
                    <span className="flex-1 text-sm">{it.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
