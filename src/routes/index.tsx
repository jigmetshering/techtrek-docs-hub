import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

const stats = [
  { value: "1", label: "game in the making" },
  { value: "4", label: "people on the team" },
  { value: "20", label: "minute playthrough" },
];

const sections = [
  { to: "/game", n: "01", title: "The Game", desc: "A preface, looping clips and screenshots from the current build." },
  { to: "/team", n: "02", title: "The Team", desc: "The four people behind the code, design, art and audio." },
  { to: "/journey", n: "03", title: "Our Journey", desc: "From the first spark of an idea to the build we play today." },
  { to: "/documentation", n: "04", title: "Documentation", desc: "Design decisions, tech notes, art direction and testing." },
  { to: "/roadmap", n: "05", title: "Roadmap", desc: "What is finished, what is active and what comes next." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <img
          src={heroArt}
          alt="Key art from our game: a traveller overlooking a calm mountain range"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8">
          <div className="rule-label text-background/70">Tech Trek 2026</div>
          <h1 className="display-xl mt-6 max-w-4xl text-5xl text-background sm:text-6xl md:text-8xl">
            A game built in the open,{" "}
            <span className="text-primary">documented every step.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-background/80">
            This is the living record of our competition project — what we are
            making, how we are making it, and where it goes next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/game"
              className="rule-label inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              See the game <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/documentation"
              className="rule-label inline-flex items-center gap-2 border border-background/50 px-7 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Statement + stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.5fr_1fr] md:px-8">
          <div>
            <div className="rule-label text-primary">Welcome</div>
            <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
              A short exploration game about crossing a mountain range with
              limited supplies — and the full story of how it got built.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              No combat, no timers. Just reading the landscape, budgeting what
              you carry, and deciding when to push on and when to make camp.
            </p>
          </div>
          <dl className="grid content-start gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-foreground pt-4">
                <dt className="display-xl text-5xl text-primary">{s.value}</dt>
                <dd className="rule-label mt-2 text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Clips */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl">The game so far</h2>
            <Link to="/game" className="rule-label text-primary hover:underline">
              More clips & screenshots →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ClipCard image={shot1} title="Setting out" caption="The opening trail and first ambient loop." />
            <ClipCard image={shot2} title="Making camp" caption="Rest points where you save and plan ahead." />
            <ClipCard image={shot3} title="Below the ridge" caption="Cave sections that test light management." />
          </div>
        </div>
      </section>

      {/* Index of sections */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-3xl md:text-5xl">Explore the documentation</h2>
        <div className="mt-10 border-t border-border">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group grid gap-2 border-b border-border py-7 transition-colors hover:bg-secondary md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8 md:px-4"
            >
              <span className="rule-label text-primary">{s.n}</span>
              <span>
                <span className="font-display block text-2xl font-extrabold tracking-tight md:text-3xl">
                  {s.title}
                </span>
                <span className="mt-1 block text-muted-foreground">{s.desc}</span>
              </span>
              <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
