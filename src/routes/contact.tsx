import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Send, Gamepad2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(2000, "Message is too long"),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Tapestry of Monyul" },
      { name: "description", content: "Get in touch with team Samsara about The Tapestry of Monyul." },
      { property: "og:title", content: "Contact — The Tapestry of Monyul" },
      { property: "og:description", content: "Questions, feedback or a playtest request? Reach team Samsara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Say hello"
        title="Contact us"
        description="Questions about the project, feedback on the build, or interested in playtesting with a class? Reach out."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            const parsed = contactSchema.safeParse({
              name: fd.get("name"),
              email: fd.get("email"),
              message: fd.get("message"),
            });
            if (!parsed.success) {
              toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
              return;
            }
            setSending(true);
            const { error } = await supabase.from("contact_submissions").insert(parsed.data);
            setSending(false);
            if (error) {
              toast.error("Sorry, your message couldn't be sent. Please try again.");
              return;
            }
            toast.success("Thanks! We'll get back to you soon.");
            form.reset();
          }}
          className="border border-border bg-card p-6"
        >
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} placeholder="What's on your mind?" className="mt-1.5" />
            </div>
            <Button type="submit" disabled={sending} className="rule-label">
              <Send className="mr-2 h-4 w-4" />
              {sending ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="border border-border bg-card p-5">
            <Github className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Source &amp; docs</div>
            <a
              href="https://github.com/tanwangs/TechTrek-2026-Samsara"
              target="_blank"
              rel="noreferrer"
              className="font-display mt-1 block break-words text-lg font-extrabold hover:text-primary"
            >
              tanwangs/TechTrek-2026-Samsara
            </a>
          </div>
          <div className="border border-border bg-card p-5">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Engine</div>
            <div className="font-display mt-1 text-lg font-extrabold">Godot 4.7.2 · GDScript</div>
          </div>
          <div className="border border-border bg-card p-5">
            <Mail className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Team</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Tandin Wangyel · Jigme Tshering · Sangay Tharchen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
