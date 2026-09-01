'use client';

import { useEffect, useState } from 'react';
import { ButterflyIcon, KiwiIcon } from '@/components/icons';

type Stage = 'closed' | 'flap' | 'card' | 'exit' | 'done';

const FLAP_MS = 650;
const CARD_MS = 750;
const EXIT_MS = 800;

/**
 * The "opening the invitation" moment, staged as an actual envelope: tap it,
 * the flap folds open on a 3D hinge, the card slides up out of the pocket,
 * then the whole envelope clears to reveal the page underneath. Scroll is
 * locked on <html> (via .envelope-closed in globals.css) until the guest
 * taps, so nothing behind it is visible or scrollable first.
 */
export function EnvelopeIntro() {
  const [stage, setStage] = useState<Stage>('closed');

  useEffect(() => {
    document.documentElement.classList.add('envelope-closed');
    return () => document.documentElement.classList.remove('envelope-closed');
  }, []);

  function open() {
    if (stage !== 'closed') return;
    document.documentElement.classList.remove('envelope-closed');
    setStage('flap');
    setTimeout(() => setStage('card'), FLAP_MS);
    setTimeout(() => setStage('exit'), FLAP_MS + CARD_MS);
    setTimeout(() => setStage('done'), FLAP_MS + CARD_MS + EXIT_MS);
  }

  if (stage === 'done') return null;

  const flapOpen = stage !== 'closed';
  const cardOut = stage === 'card' || stage === 'exit';
  const exiting = stage === 'exit';

  return (
    <div
      className={`bg-grain fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-ink-950 via-burgundy-900 to-ink-950 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        exiting ? '-translate-y-full opacity-0 duration-[800ms]' : 'translate-y-0 opacity-100 duration-500'
      }`}
      style={{ transitionDuration: exiting ? `${EXIT_MS}ms` : undefined }}
      aria-hidden={stage !== 'closed'}
    >
      {/* soft burst of light from the seal as the flap lifts */}
      <div
        className={`pointer-events-none absolute h-[70vh] w-[70vh] rounded-full bg-gold-300 blur-3xl transition-opacity duration-700 sm:h-72 sm:w-72 ${
          flapOpen && !exiting ? 'opacity-[0.12]' : 'opacity-0'
        }`}
      />

      <button
        type="button"
        onClick={open}
        aria-label="Open invitation"
        disabled={stage !== 'closed'}
        className={`group relative outline-none transition-transform duration-300 ${
          stage === 'closed' ? 'hover:scale-[1.02] active:scale-[0.98]' : ''
        }`}
      >
        <div
          className="relative aspect-[64/44] w-[86vw] max-w-sm sm:aspect-auto sm:h-52 sm:w-72"
          style={{ perspective: '1400px' }}
        >
          {/* pocket back */}
          <div className="absolute inset-0 rounded-sm border border-gold-400/30 bg-ink-900" />

          {/* card, rises out of the pocket once the flap is open */}
          <div
            className={`absolute inset-x-3 top-3 flex h-[calc(100%-1.75rem)] flex-col items-center justify-center rounded-[2px] border border-gold-400/40 bg-gradient-to-b from-burgundy-800 to-ink-950 px-4 text-center transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardOut ? '-translate-y-[92%] opacity-100 duration-[750ms]' : 'translate-y-0 opacity-90 duration-500'
            } ${exiting ? 'opacity-0' : ''}`}
          >
            <ButterflyIcon className="h-8 w-8 text-gold-300 sm:h-9 sm:w-9" />
            <KiwiIcon className="mt-2 h-4 w-4 text-burgundy-300 sm:h-5 sm:w-5" />
          </div>

          {/* flap, hinges open from the top */}
          <div
            className={`absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b from-burgundy-700 to-burgundy-800 transition-all ease-[cubic-bezier(0.6,0,0.4,1)] ${
              flapOpen ? 'opacity-20 duration-[650ms]' : 'opacity-100 duration-500'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transform: flapOpen ? 'rotateX(-125deg) translateY(-2px)' : 'rotateX(0deg)',
              transitionDuration: `${FLAP_MS}ms`,
            }}
          />

          {/* wax seal, sits on the flap's tip and breaks apart as it lifts */}
          <div
            className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/50 bg-ink-950 shadow-[0_0_0_3px_rgba(10,7,7,0.6)] transition-all duration-500 sm:h-11 sm:w-11 ${
              flapOpen ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <ButterflyIcon className="h-7 w-7 text-gold-300 sm:h-5 sm:w-5" />
            <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-gold-400/50 bg-ink-950 sm:-bottom-1 sm:-right-1 sm:h-4 sm:w-4">
              <KiwiIcon className="h-3 w-3 text-burgundy-300 sm:h-2 sm:w-2" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
