import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tech Trek Docs" },
      { name: "description", content: "Get in touch with the Tech Trek team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <PageHeader
        eyebrow="Say hello"
        title="Contact us"
        description="Questions, feedback, or want to playtest? Reach out."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Thanks! We'll get back to you soon.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
          className="rounded-xl border border-border bg-card p-6 shadow-card"
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
            <Button
              type="submit"
              disabled={sending}
              className="bg-mint-gradient text-primary-foreground shadow-mint hover:opacity-90"
            >
              <Send className="mr-2 h-4 w-4" />
              {sending ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <Mail className="h-5 w-5 text-mint" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <a href="mailto:team@techtrek.example" className="mt-1 block font-display text-lg hover:text-mint">
              team@techtrek.example
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <Github className="h-5 w-5 text-mint" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Source</div>
            <a href="#" className="mt-1 block font-display text-lg hover:text-mint">
              github.com/your-team
            </a>
          </div>
          <div className="rounded-xl border border-dashed border-mint/30 bg-mint/5 p-5">
            <div className="text-xs uppercase tracking-widest text-mint">Tip</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Replace this form with a real backend (Lovable Cloud) when you're ready to collect responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
