import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Users, BookOpen, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Trek — Project Documentation" },
      { name: "description", content: "Our journey building a game for the Tech Trek competition — team, process, roadmap and more." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-mint" />
            Tech Trek 2026
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Building a game,<br />
            <span className="text-gradient-mint">one commit at a time.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            This is the living documentation of our Tech Trek project — every
            decision, prototype, sprint and stumble that goes into shipping our game.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-mint-gradient text-primary-foreground shadow-mint hover:opacity-90">
              <Link to="/documentation">
                Read the docs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-mint/40 hover:bg-mint/10">
              <Link to="/journey">Our story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/team", icon: Users, title: "The Team", desc: "Who's behind the build." },
            { to: "/journey", icon: Compass, title: "Our Journey", desc: "Why we started, where we've been." },
            { to: "/documentation", icon: BookOpen, title: "Documentation", desc: "Design, tech, art, audio." },
            { to: "/roadmap", icon: Map, title: "Roadmap", desc: "What's done, what's next." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-mint/50"
            >
              <c.icon className="h-5 w-5 text-mint" />
              <div className="mt-4 font-display text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-mint opacity-0 transition group-hover:opacity-100">
                Explore <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
