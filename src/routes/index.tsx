import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Users, BookOpen, Map, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClipCard } from "@/components/ClipCard";
import heroArt from "@/assets/game-hero.jpg";
import shot1 from "@/assets/game-1.jpg";
import shot2 from "@/assets/game-2.jpg";
import shot3 from "@/assets/game-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Trek — Project Documentation" },
      {
        name: "description",
        content:
          "Our journey building a game for the Tech Trek competition — the game itself, the team, our process and roadmap.",
      },
      { property: "og:title", content: "Tech Trek — Project Documentation" },
      {
        property: "og:description",
        content: "The game, the team and the process behind our Tech Trek project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-mint">Tech Trek 2026</div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Building a game, documented step by step.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            This site is the living record of our Tech Trek project — what the
            game is, how we made it, and where it goes next. Start with the
            game, or jump straight into the documentation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/game">
                See the game <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/documentation">Read the docs</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <img
            src={heroArt}
            alt="Key art from our game: a traveller overlooking a calm mountain range"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold">The game so far</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A short exploration game about crossing a mountain range with limited supplies.
            </p>
          </div>
          <Link to="/game" className="text-sm text-mint hover:underline">
            More clips & screenshots →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <ClipCard image={shot1} title="Setting out" caption="The opening trail and first ambient loop." />
          <ClipCard image={shot2} title="Making camp" caption="Rest points where you save and plan ahead." />
          <ClipCard image={shot3} title="Below the ridge" caption="Cave sections that test light management." />
        </div>
      </section>

      <section>
        <h2 className="mb-5 font-display text-2xl font-semibold">Explore the documentation</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/game", icon: Gamepad2, title: "The Game", desc: "Preface, clips and screenshots." },
            { to: "/team", icon: Users, title: "The Team", desc: "Who's behind the build." },
            { to: "/journey", icon: Compass, title: "Our Journey", desc: "Where we started, where we've been." },
            { to: "/documentation", icon: BookOpen, title: "Documentation", desc: "Design, tech, art, audio." },
            { to: "/roadmap", icon: Map, title: "Roadmap", desc: "What's done, what's next." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="rounded-lg border border-border bg-card p-5 transition hover:border-mint/50"
            >
              <c.icon className="h-5 w-5 text-mint" />
              <div className="mt-3 font-display text-base font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
