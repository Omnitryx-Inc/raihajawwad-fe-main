'use client';

import { siteConfig } from '@/lib/site.config';
import { useCountdown } from '@/lib/useCountdown';

const UNITS: Array<{ key: 'days' | 'hours' | 'minutes' | 'seconds'; label: string }> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export function Countdown() {
  const timeLeft = useCountdown(siteConfig.occasion.dateTimeIso);

  return (
    <section className="bg-ivory-200">
      <div className="container-page py-16 sm:py-20">
        <p className="eyebrow text-center">{timeLeft?.reached ? 'Today is the day' : 'Counting down to the Wedding'}</p>

        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 gap-3 sm:gap-5">
          {UNITS.map((unit) => (
            <div key={unit.key} className="card py-5 text-center">
              <p className="text-foil font-display text-3xl font-medium tabular-nums sm:text-4xl">
                {String(timeLeft ? timeLeft[unit.key] : 0).padStart(2, '0')}
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-widest2 text-ink-500">{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
