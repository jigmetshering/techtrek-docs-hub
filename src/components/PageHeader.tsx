interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-border/60 pb-8">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.25em] text-mint">{eyebrow}</div>
      )}
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
