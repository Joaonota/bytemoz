export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <header className={`max-w-2xl ${className}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="h-section mt-5">
        {title}
      </h2>
      {lead && <p className="lead mt-5">{lead}</p>}
    </header>
  );
}
