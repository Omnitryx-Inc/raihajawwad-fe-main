import { siteConfig } from '@/lib/site.config';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Schedule() {
  const { events } = siteConfig.schedule;

  return (
    <section id="schedule" className="bg-ink-900">
      <div className="container-page section-y">
        <SectionHeading eyebrow="Schedule" title="The Evening" description={siteConfig.occasion.dateLabel} />

        <ol className="mx-auto mt-16 max-w-md text-center">
          {events.map((event, index) => (
            <li key={event.id} className="relative flex flex-col items-center pb-12 last:pb-0">
              <span className="relative z-10 h-3.5 w-3.5 flex-none rounded-full border-2 border-gold-400 bg-ink-900" />
              {index < events.length - 1 && (
                <span className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-gold-400/30" aria-hidden="true" />
              )}
              <p className="mt-4 font-display text-2xl font-medium text-ivory-100">{event.label}</p>
              <p className="mt-1 text-sm font-medium tracking-wide text-gold-300">{event.time}</p>
              <p className="mt-1 text-sm text-ivory-100/55">{event.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
