import { ButterflyIcon, KiwiIcon } from '@/components/icons';

/**
 * A handful of oversized, near-invisible butterfly/kiwi marks scattered
 * behind a section, the couple's own shorthand (🦋🥝) woven into the
 * design as texture rather than as literal emoji. Purely decorative.
 */
export function MotifScatter({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <ButterflyIcon className="absolute -left-10 top-10 h-40 w-40 rotate-[-12deg] text-gold-400/[0.06] sm:h-56 sm:w-56" />
      <KiwiIcon className="absolute -right-8 bottom-16 h-28 w-28 rotate-[8deg] text-burgundy-300/[0.08] sm:h-40 sm:w-40" />
      <ButterflyIcon className="absolute -right-16 top-1/3 hidden h-32 w-32 rotate-[16deg] text-gold-400/[0.05] sm:block" />
    </div>
  );
}
