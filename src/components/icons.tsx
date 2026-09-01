// Hand-rolled line icons so the site has zero icon-library dependency.
// All icons accept standard SVG props (className, etc.).
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** The site's signature mark: a butterfly, echoing 🦋 from the couple's own shorthand. */
export function ButterflyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 7.5c-1.3-3.2-4.6-4.8-6.6-3.6C3.3 5.2 3.6 9 6 11c1.6 1.4 4.4 2.1 6 2.1" />
      <path d="M12 7.5c1.3-3.2 4.6-4.8 6.6-3.6C20.7 5.2 20.4 9 18 11c-1.6 1.4-4.4 2.1-6 2.1" />
      <path d="M12 11.3c-1 2.6-3.6 4-5.2 3.1-1.8-1-1.9-4-.4-5.6 1.2-1.3 3.4-1.9 4.7-1.9" />
      <path d="M12 11.3c1 2.6 3.6 4 5.2 3.1 1.8-1 1.9-4 .4-5.6-1.2-1.3-3.4-1.9-4.7-1.9" />
      <path d="M12 6.5v11" />
    </svg>
  );
}

/** The other half of the couple's shorthand: a kiwi slice, 🥝. Used as a small companion accent to the butterfly. */
export function KiwiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="10" cy="10.3" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10.3" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="9.3" cy="12.8" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="12.8" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="10.7" cy="14.6" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="13.3" cy="14.6" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 4h3l1.4 4.2-2.1 1.7a12.5 12.5 0 0 0 5.2 5.2l1.7-2.1L20 14.4v3a1.6 1.6 0 0 1-1.7 1.6C11.4 18.5 5.5 12.6 5 5.7 4.9 4.8 5.6 4 6.6 4Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2 22l5.2-1.6A9.8 9.8 0 1 0 12 2.2Zm0 1.8a8 8 0 1 1-4.3 14.8l-.3-.2-3 .9.9-2.9-.2-.3A8 8 0 0 1 12 4Z" />
      <path d="M9.1 7.4c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.1 1.8 2.9 4.4 4 2.2.9 2.6.7 3.1.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.9-.9c-.3-.1-.5-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2.2Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.8" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9.5 12 15l6-5.5" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
