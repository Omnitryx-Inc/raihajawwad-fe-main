'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site.config';
import { MapPinIcon, ArrowUpRightIcon } from '@/components/icons';

/** A slim mobile-only quick-action bar (Directions + RSVP) that appears once the guest scrolls past the hero. */
export function StickyActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`bg-grain fixed inset-x-0 bottom-0 z-40 border-t border-gold-400/30 bg-ivory-100/95 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex divide-x divide-gold-400/20">
        <a
          href={siteConfig.venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-900"
        >
          <MapPinIcon className="h-4 w-4 text-gold-600" />
          Directions
        </a>
        <a
          href="#rsvp"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-600"
        >
          RSVP
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
