import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Lightbulb, Rocket, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey — Tech Trek Docs" },
      { name: "description", content: "Why we made the project and what the journey has looked like." },
    ],
  }),
  component: JourneyPage,
});

const beats = [
  { icon: Lightbulb, title: "The spark", body: "How the idea was born — the problem we noticed, the player experience we wanted to create, and why a game felt like the right form." },
  { icon: Target, title: "Setting the goal", body: "What 'done' looks like for Tech Trek: scope, audience, and the experience we'll be judged on." },
  { icon: Rocket, title: "First prototype", body: "The earliest playable build, the things that worked, and the things we threw away immediately." },
  { icon: Sparkles, title: "Where we are now", body: "Current state of the project — what's solid, what's wobbly, and what we're learning along the way." },
];

function JourneyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <PageHeader
        eyebrow="The story so far"
        title="Our journey"
        description="From a vague idea to something we can actually play. Edit each beat below with your real notes."
      />
      <div className="relative mt-12">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-mint via-mint/30 to-transparent" />
        <div className="space-y-8">
          {beats.map((b, i) => (
            <div key={b.title} className="relative pl-16">
              <div className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border border-mint/40 bg-card shadow-mint">
                <b.icon className="h-5 w-5 text-mint" />
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="text-xs uppercase tracking-widest text-mint">Chapter {i + 1}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
