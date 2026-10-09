import { createFileRoute } from "@tanstack/react-router";
import { Mail, User } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team Samsara — The Tapestry of Monyul" },
      { name: "description", content: "Meet team Samsara, the three people building The Tapestry of Monyul for TechTrek 2026 — roles, contact details and personal interests." },
      { property: "og:title", content: "Team Samsara — The Tapestry of Monyul" },
      { property: "og:description", content: "Documentation, storyline, sprites and code — the three people behind the project, with how to reach them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

interface Member {
  name: string;
  role: string;
  bio: string;
  initial: string;
  /** Portrait photo pointer URL; empty until the photo is supplied. */
  photo: string;
  /** Contact address; empty until supplied. */
  email: string;
  /** Personal interests shown as small tags; empty until supplied. */
  interests: string[];
}

const members: Member[] = [
  {
    name: "Tandin Wangyel",
    role: "Lead Developer",
    bio: "Builds the game in Godot — player physics, autoloads, quest scripts and the automated GDScript test suite.",
    initial: "TW",
    photo: "",
    email: "tandin.wangyel2023@academy.bt",
    interests: ["Space and tech", "Volleyball", "Gaming", "Music"],
  },
  {
    name: "Jigme Tshering",
    role: "Documentation and Website",
    bio: "Shapes the storyline and writes the project documentation, and owns this site and the public-facing material.",
    initial: "JT",
    photo: "",
    email: "jigme.tshering2023@academy.bt",
    interests: ["Chess", "Music", "Writing", "Reading"],
  },
  {
    name: "Sangay Tharchen",
    role: "Design",
    bio: "Draws the pixel art — Tashi's gho, the monks, the deities and the Bhutanese architecture props.",
    initial: "ST",
    photo: "",
    email: "sangay.tharchen2023@academy.bt",
    interests: ["Volleyball", "Badminton", "Gaming", "Sleeping", "Maths", "Anime", "Reading"],
  },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Team Samsara"
        title="The team"
        description="Three of us, building a game about paying attention for TechTrek 2026."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article key={m.name} className="flex flex-col border border-border bg-card p-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
              {m.photo ? (
                <img src={m.photo} alt={`${m.name}, ${m.role}`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                  <User className="h-12 w-12" strokeWidth={1} aria-hidden />
                  <span className="rule-label">Photo to be added</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-base font-extrabold text-primary-foreground">
                {m.initial}
              </div>
              <div>
                <h2 className="font-display text-xl font-extrabold tracking-tight">{m.name}</h2>
                <div className="rule-label mt-1 text-primary">{m.role}</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>

            <div className="mt-5 border-t border-border pt-4">
              <div className="rule-label text-muted-foreground">Email</div>
              {m.email ? (
                <a
                  href={`mailto:${m.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm break-all hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {m.email}
                </a>
              ) : (
                <div className="mt-2 text-sm italic text-muted-foreground">Email to be added</div>
              )}
            </div>

            <div className="mt-4">
              <div className="rule-label text-muted-foreground">Also into</div>
              {m.interests.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {m.interests.map((i) => (
                    <span key={i} className="rule-label border border-border px-2 py-1 text-primary">
                      {i}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-2 text-sm italic text-muted-foreground">Interests to be added</div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
