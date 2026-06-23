import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Tech Trek Docs" },
      { name: "description", content: "Detailed documentation of the project's design, tech, art and process." },
    ],
  }),
  component: DocsPage,
});

const sections = [
  {
    value: "overview",
    label: "Overview",
    title: "Project overview",
    body: "High-level summary of the game: genre, platform, target audience, and the one-sentence pitch. This is the elevator-pitch tab — keep it short and sharp.",
  },
  {
    value: "design",
    label: "Game Design",
    title: "Game design",
    body: "Core gameplay loop, mechanics, level structure, player progression and difficulty curve. Document the design pillars that every feature is measured against.",
  },
  {
    value: "tech",
    label: "Tech Stack",
    title: "Tech stack & architecture",
    body: "Engine, languages, libraries and tools. Major systems (input, state, save/load, rendering) and how they fit together.",
  },
  {
    value: "art",
    label: "Art & UI",
    title: "Art direction & UI",
    body: "Visual style guide: palette, typography, character design, environment mood and UI patterns. Include reference images as they come.",
  },
  {
    value: "audio",
    label: "Audio",
    title: "Audio & music",
    body: "Sound design philosophy, music direction, tooling and any external assets/licensing.",
  },
  {
    value: "testing",
    label: "Testing",
    title: "Testing & playtesting",
    body: "QA process, playtest notes, common bugs, and how feedback is folded back into design.",
  },
];

function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <PageHeader
        eyebrow="Build notes"
        title="Documentation"
        description="The detailed build log. Switch between aspects of the project below."
      />
      <Tabs defaultValue="overview" className="mt-10">
        <TabsList className="flex h-auto flex-wrap gap-1 bg-card p-1">
          {sections.map((s) => (
            <TabsTrigger
              key={s.value}
              value={s.value}
              className="data-[state=active]:bg-mint-gradient data-[state=active]:text-primary-foreground data-[state=active]:shadow-mint"
            >
              {s.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((s) => (
          <TabsContent key={s.value} value={s.value} className="mt-6">
            <article className="rounded-xl border border-border bg-card p-8 shadow-card">
              <div className="text-xs uppercase tracking-widest text-mint">{s.label}</div>
              <h2 className="mt-2 font-display text-3xl font-bold">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 rounded-lg border border-dashed border-border bg-background/40 p-4 text-sm text-muted-foreground">
                Add your detailed notes, diagrams and screenshots here.
              </div>
            </article>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
