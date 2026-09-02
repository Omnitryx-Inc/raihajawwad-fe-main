import { siteConfig } from '@/lib/site.config';
import { Img } from '@/components/ui/Img';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { MotifScatter } from '@/components/invitation/MotifScatter';

export function Hero() {
  const { couple, occasion, formalInvite } = siteConfig;
  const hasPhoto = Boolean(siteConfig.media.heroPhoto);

  return (
    <section
      className={`bg-grain relative flex items-center overflow-hidden bg-ivory-100 ${hasPhoto ? 'min-h-[100svh]' : ''}`}
    >
      <div className="absolute inset-0">
        {hasPhoto ? (
          <>
            <Img src={siteConfig.media.heroPhoto as string} alt="" loading="eager" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ivory-100/30 via-ivory-100/80 to-ivory-100" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-ivory-200 via-ivory-100 to-ivory-100" />
        )}
      </div>
      <MotifScatter />

      <div className={`container-page relative text-center ${hasPhoto ? 'py-32' : 'section-y'}`}>
        <div className="mx-auto max-w-2xl animate-fade-up">
          <p className="eyebrow">
            {formalInvite.hostLine} cordially invites you to the
          </p>
          <h1 className="text-foil mt-4 font-display text-2xl font-medium uppercase tracking-[0.3em] sm:text-3xl">
            {occasion.name}
          </h1>

          <p className="mt-10 flex flex-col items-center gap-4 font-script leading-none text-gold-700">
            <span className="text-4xl sm:text-6xl">{couple.partnerOneFull}</span>
            <span className="text-foil text-3xl sm:text-5xl">&amp;</span>
            <span className="text-4xl sm:text-6xl">{couple.partnerTwoFull}</span>
          </p>

          <div className="my-10">
            <OrnamentDivider />
          </div>

          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-ink-700/80">{occasion.invitationLine}</p>

          <p className="mt-8 text-lg font-medium text-ink-900 sm:text-xl">
            {occasion.dayLabel}, {occasion.dateLabel}
          </p>
          <p className="mt-1 text-sm text-ink-600">
            {siteConfig.venue.name} &middot; {occasion.city}
          </p>
        </div>
      </div>
    </section>
  );
}
