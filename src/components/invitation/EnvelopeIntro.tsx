'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site.config';
import { ButterflyIcon, KiwiIcon } from '@/components/icons';

/**
 * The "opening the invitation" moment: a full-screen seal that the guest
 * taps, which then lifts away to reveal the page underneath. Scroll is
 * locked on <html> (via the .envelope-closed class in globals.css) until
 * it's opened, so nothing behind it is visible or scrollable first.
 */
export function EnvelopeIntro() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('envelope-closed');
    return () => document.documentElement.classList.remove('envelope-closed');
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.remove('envelope-closed');
    const timeout = setTimeout(() => setMounted(false), 1000);
    return () => clearTimeout(timeout);
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      className={`bg-grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-ink-950 via-burgundy-900 to-ink-950 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      aria-hidden={open}
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="font-display text-sm italic text-gold-200/80">Bismillah ir-Rahman ir-Raheem</p>

        <div className="relative mt-9 flex h-28 w-28 items-center justify-center rounded-full border border-gold-400/40 sm:h-32 sm:w-32">
          <ButterflyIcon className="h-9 w-9 animate-flutter text-gold-300 sm:h-10 sm:w-10" />
          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-gold-400/40 bg-ink-950">
            <KiwiIcon className="h-3.5 w-3.5 text-burgundy-300" />
          </span>
        </div>

        <p className="mt-9 font-script text-5xl leading-none text-ivory-100 sm:text-6xl">
          {siteConfig.couple.partnerOne} <span className="text-gold-300">&amp;</span> {siteConfig.couple.partnerTwo}
        </p>
        <p className="eyebrow mt-5">
          {siteConfig.occasion.name} &middot; {siteConfig.occasion.dateLabel}
        </p>

        <button type="button" onClick={() => setOpen(true)} className="btn-primary mt-12 animate-shimmer">
          Open Invitation
        </button>
      </div>
    </div>
  );
}
