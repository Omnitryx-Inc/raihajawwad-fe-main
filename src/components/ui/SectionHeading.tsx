export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && <h2 className="text-3xl font-medium text-ink-900 sm:text-4xl">{title}</h2>}
      {description && <p className="mt-4 text-[15px] leading-relaxed text-ink-700/80">{description}</p>}
    </div>
  );
}
