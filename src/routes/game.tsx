import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ClipCard } from "@/components/ClipCard";
import heroArt from "@/assets/game-hero.jpg";
import shot1 from "@/assets/game-1.jpg";
import shot2 from "@/assets/game-2.jpg";
import shot3 from "@/assets/game-3.jpg";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "The Game — Tech Trek Project" },
      {
        name: "description",
        content:
          "A preface to our Tech Trek game: what it is, how it plays, plus clips and screenshots from the current build.",
      },
      { property: "og:title", content: "The Game — Tech Trek Project" },
      {
        property: "og:description",
        content: "Clips, screenshots and a preface to the game we're building for Tech Trek.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamePage,
});

const clips = [
  {
    image: shot1,
    title: "Setting out",
    caption: "The opening trail — pacing, camera framing and the first ambient loop.",
  },
  {
    image: shot2,
    title: "Making camp",
    caption: "Rest points where the player saves progress and plans the next leg.",
  },
  {
    image: shot3,
    title: "Below the ridge",
    caption: "Cave sections that test light management and careful movement.",
  },
];

const facts = [
  { label: "Genre", value: "Exploration / light puzzle" },
  { label: "Session length", value: "15–20 minutes" },
  { label: "Engine", value: "Unity" },
  { label: "Platform", value: "PC (keyboard & gamepad)" },
];

function GamePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-14 px-6 py-12">
      <PageHeader
        eyebrow="The Game"
        title="A quiet trek, one ridge at a time"
        description="A short exploration game about crossing a mountain range with limited supplies, built for the Tech Trek competition."
      />

      <section className="overflow-hidden rounded-lg border border-border">
        <img
          src={heroArt}
          alt="Key art: a lone traveller looking out over a calm mountain range"
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Preface</h2>
          <p className="text-muted-foreground">
            You play a traveller with a map that is only half right. There is no
            combat and no timer — the challenge is reading the landscape,
            budgeting what you carry, and deciding when to push on and when to
            make camp.
          </p>
          <p className="text-muted-foreground">
            Every route across the range is walkable, but not every route is
            kind. Weather shifts, light fades, and the paths you skip stay on
            the map as a quiet reminder. We wanted a game you can finish in one
            sitting and still think about afterwards.
          </p>
          <h3 className="pt-2 font-display text-lg font-semibold">How it plays</h3>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Explore hand-built routes with no invisible walls.</li>
            <li>Manage light, warmth and stamina between camps.</li>
            <li>Solve small environmental puzzles to open shortcuts.</li>
            <li>Finish the crossing — your path is recorded as a trail map.</li>
          </ul>
        </div>
        <aside className="h-fit rounded-lg border border-border bg-card p-5 shadow-card">
          <div className="font-display text-sm font-semibold">At a glance</div>
          <dl className="mt-4 space-y-3">
            {facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 text-sm">
                <dt className="text-muted-foreground">{f.label}</dt>
                <dd className="text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="font-display text-2xl font-semibold">Clips from the build</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Short looping moments captured from the current prototype.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clips.map((c) => (
            <ClipCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-display text-2xl font-semibold">Screenshots</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[shot1, shot2, shot3, heroArt].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gameplay screenshot ${i + 1}`}
              loading="lazy"
              width={1280}
              height={720}
              className="w-full rounded-lg border border-border object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
