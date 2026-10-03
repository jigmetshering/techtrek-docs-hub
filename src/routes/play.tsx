import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Gamepad2, Maximize2, Move, Hand, CarTaxiFront, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { getGameEmbedUrl } from "@/lib/itch.functions";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play the Game — The Tapestry of Monyul" },
      { name: "description", content: "Play The Tapestry of Monyul right in your browser, hosted on itch.io. No download needed." },
      { property: "og:title", content: "Play the Game — The Tapestry of Monyul" },
      { property: "og:description", content: "Play The Tapestry of Monyul right in your browser, hosted on itch.io." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlayPage,
});

const controls = [
  { icon: Move, keys: "WASD / Arrow keys", label: "Move" },
  { icon: Hand, keys: "E", label: "Interact" },
  { icon: CarTaxiFront, keys: "T", label: "Call the taxi" },
];

function PlayPage() {
  const resolveEmbed = useServerFn(getGameEmbedUrl);
  const { data: embedUrl, isPending, isError } = useQuery({
    queryKey: ["itch-embed"],
    queryFn: resolveEmbed,
    staleTime: 4 * 60 * 1000,
    retry: 1,
  });

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Play"
        title="Play the Game"
        description="The Tapestry of Monyul runs right here in your browser, hosted on itch.io. No download or installation needed."
      />

      <div className="mt-10">
        <div className="border border-border bg-foreground p-3 md:p-5">
          <div className="flex items-center justify-between pb-3">
            <div className="rule-label flex items-center gap-2 text-primary">
              <Gamepad2 className="h-4 w-4" />
              Now playing — The Tapestry of Monyul
            </div>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Maximize2 className="h-3.5 w-3.5" />
              Use the button in the corner for fullscreen
            </span>
          </div>

          <div className="relative aspect-video w-full bg-foreground">
            {isPending ? (
              <div className="absolute inset-0 flex items-center justify-center border border-border/40">
                <span className="rule-label text-muted-foreground">Loading the game…</span>
              </div>
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                title="The Tapestry of Monyul — playable build"
                className="absolute inset-0 h-full w-full"
                allow="fullscreen; gamepad; autoplay"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-border/40 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  The browser version could not be loaded right now. You can still play it directly on itch.io.
                </p>
                <a
                  href="https://wangyatt.itch.io/the-tapestry-of-monyul"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Open on itch.io
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {controls.map((c) => (
            <div key={c.keys} className="flex items-center gap-4 border border-border bg-card p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-sm font-extrabold tracking-tight">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.keys}</div>
              </div>
            </div>
          ))}
        </div>

        {isError ? null : (
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tip: click the game once before playing so it can receive your keyboard. A desktop build for
            offline play is also available on the itch.io page.
          </p>
        )}

        <div className="mt-6">
          <a
            href="https://wangyatt.itch.io/the-tapestry-of-monyul"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View on itch.io
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
