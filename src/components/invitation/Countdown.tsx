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
    <section className="bg-burgundy-900">
      <div className="container-page py-16 sm:py-20">
        <p className="eyebrow text-center text-gold-200">
          {timeLeft?.reached ? 'Today is the day' : 'Counting down to our Nikkah'}
        </p>

        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 gap-3 sm:gap-5">
          {UNITS.map((unit) => (
            <div key={unit.key} className="rounded-md border border-ivory-100/15 bg-ink-950/30 py-5 text-center">
              <p className="font-display text-3xl font-medium text-ivory-100 tabular-nums sm:text-4xl">
                {String(timeLeft ? timeLeft[unit.key] : 0).padStart(2, '0')}
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-widest2 text-ivory-100/55">{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
