# Team page: photos, email and interests

## What changes

Each of the three team cards on **The Team** page grows from a name-and-bio block into a full profile:

- **Photo frame** — a tall vertical portrait slot (4:5) above the name, square corners, thin border. Until you send pictures it shows a plain figure silhouette with the label "Photo to be added", so the frame is obviously waiting for a picture rather than looking broken.
- **Email** — its own row with a small mail icon. Once you give us an address it becomes a clickable link that opens a new mail; until then the row reads "Email to be added".
- **Personal interests** — shown as small tags under an "Also into" label, one tag per interest, in the same thin-bordered style as the rest of the site. Until you send them, the row reads "Interests to be added".
- The existing role, short bio and initials stay as they are. The three cards keep their current two-per-row arrangement on wide screens and stack on phones.

Nothing on other pages changes, and the look stays as it is now: warm paper, pine-teal ink, sharp edges, no rounded corners or shadows.

## When you send the details

You only need to type them in chat, for example:

```text
Tandin  tandin@example.com  interests: trekking, retro games, coding
Jigme   jigme@example.com   interests: writing, photography
Sangay  sangay@example.com  interests: thangka, sketching
```

and attach three photos. We then drop the real values into the same slots and the "to be added" labels disappear — no layout work needed at that point.

## Technical details

- File touched: `src/routes/team.tsx` only.
- `members` becomes a typed array with `name`, `role`, `bio`, `initial`, `photo` (asset pointer URL, empty until supplied), `email` and `interests: string[]`.
- Portrait frame: `aspect-[4/5]` block, `border border-border bg-muted`, `image-rendering: pixelated` not needed — photos render normally; object-fit cover.
- Placeholder state driven by empty values: `photo` empty renders a centred `lucide-react` silhouette icon plus a `rule-label` caption; `email` empty renders the label instead of an `<a href="mailto:...">`; `interests` empty renders the label instead of chips.
- Email row uses `lucide-react` `Mail`; chips reuse the existing `rule-label` utility with `border border-border px-2 py-1`.
- `head()` description updated to mention contact and interests; title and og tags keep their current wording.
- `roadmap.md` gets two checklist items (add profile fields, verify on desktop and mobile); both checked once the build is green and the page is checked at 1280x1800 and 390x844.
- No new packages, no database, no backend work — this is presentation only.
