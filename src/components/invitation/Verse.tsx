import { OrnamentDivider } from '@/components/ui/OrnamentDivider';

export function Verse() {
  return (
    <section className="bg-ink-950">
      <div className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-lg italic leading-relaxed text-ivory-100/80 sm:text-xl">
            &ldquo;And among His signs is that He created for you mates from among yourselves, that you may dwell in
            tranquility with them, and He put love and mercy between you.&rdquo;
          </p>
          <p className="eyebrow mt-5">Surah Ar-Rum, 30:21</p>
          <div className="mt-8">
            <OrnamentDivider />
          </div>
        </div>
      </div>
    </section>
  );
}
