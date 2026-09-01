import { siteConfig } from '@/lib/site.config';
import { Img } from '@/components/ui/Img';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { MotifScatter } from '@/components/invitation/MotifScatter';
import { ChevronDownIcon } from '@/components/icons';

export function Hero() {
  const { couple, occasion } = siteConfig;
  const hasPhoto = Boolean(siteConfig.media.heroPhoto);

  return (
    <section className="bg-grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        {hasPhoto ? (
          <>
            <Img src={siteConfig.media.heroPhoto as string} alt="" loading="eager" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900 via-ink-950 to-ink-950" />
        )}
      </div>
      <MotifScatter />

      <div className="container-page relative py-32 text-center">
        <div className="mx-auto max-w-2xl animate-fade-up">
          <p className="eyebrow">You are invited to our</p>
          <h1 className="mt-4 font-display text-2xl font-medium uppercase tracking-[0.3em] text-gold-300 sm:text-3xl">
            {occasion.name}
          </h1>

          <p className="mt-10 font-display text-5xl font-medium leading-[1.05] text-ivory-100 sm:text-7xl">
            {couple.partnerOne}
            <span className="mx-3 font-script text-4xl text-gold-300 sm:mx-5 sm:text-6xl">&amp;</span>
            {couple.partnerTwo}
          </p>

          <div className="my-10">
            <OrnamentDivider />
          </div>

          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-ivory-100/70">{occasion.invitationLine}</p>

          <p className="mt-8 text-lg font-medium text-ivory-100 sm:text-xl">
            {occasion.dayLabel}, {occasion.dateLabel}
          </p>
          <p className="mt-1 text-sm text-ivory-100/60">
            {siteConfig.venue.name} &middot; {occasion.city}
          </p>
        </div>
      </div>

      <a
        href="#schedule"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory-100/50 transition-colors hover:text-gold-300"
        aria-label="Scroll to details"
      >
        <ChevronDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
