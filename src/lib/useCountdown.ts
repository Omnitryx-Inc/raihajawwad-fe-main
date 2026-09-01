'use client';

import { useEffect, useState } from 'react';

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  reached: boolean;
};

function diff(targetIso: string): TimeLeft {
  const ms = new Date(targetIso).getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, reached: true };
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    reached: false,
  };
}

/**
 * Live countdown to `targetIso`, ticking once a second.
 *
 * Returns `null` on the very first render (before the effect runs), so the
 * server-rendered/static markup stays a deterministic placeholder and
 * avoids a hydration mismatch against `Date.now()`.
 */
export function useCountdown(targetIso: string): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(diff(targetIso));
    const id = setInterval(() => setTimeLeft(diff(targetIso)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return timeLeft;
}
