import { OrnamentDivider } from '@/components/ui/OrnamentDivider';

export function Verse() {
  return (
    <section className="bg-ivory-100">
      <div className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-lg italic leading-relaxed text-ink-700/90 sm:text-xl">
            &ldquo;And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. 
            And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.&rdquo;
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
