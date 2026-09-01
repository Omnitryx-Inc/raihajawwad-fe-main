import { siteConfig } from '@/lib/site.config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AddToCalendar } from '@/components/invitation/AddToCalendar';

export function Schedule() {
  return (
    <section id="schedule" className="bg-ink-900">
      <div className="container-page section-y">
        <SectionHeading eyebrow="Schedule" title="The Evening" description={siteConfig.occasion.dateLabel} />

        <ol className="relative mx-auto mt-16 max-w-md">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gold-400/30" aria-hidden="true" />
          {siteConfig.schedule.events.map((event) => (
            <li key={event.id} className="relative flex gap-6 pb-12 last:pb-0">
              <span className="relative z-10 mt-1.5 h-3.5 w-3.5 flex-none rounded-full border-2 border-gold-400 bg-ink-900" />
              <div>
                <p className="font-display text-2xl font-medium text-ivory-100">{event.label}</p>
                <p className="mt-1 text-sm font-medium tracking-wide text-gold-300">{event.time}</p>
                <p className="mt-1 text-sm text-ivory-100/55">{event.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-center">
          <AddToCalendar />
        </div>
      </div>
    </section>
  );
}
