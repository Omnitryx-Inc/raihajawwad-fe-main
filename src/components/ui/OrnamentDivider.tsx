import { ButterflyIcon } from '@/components/icons';

/** The recurring section divider: a thin gold hairline with the butterfly mark at its centre. */
export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`} aria-hidden="true">
      <span className="ornament-line" />
      <ButterflyIcon className="h-4 w-4 text-gold-300" />
      <span className="ornament-line" />
    </div>
  );
}
