import { EnvelopeIntro } from '@/components/invitation/EnvelopeIntro';
import { Hero } from '@/components/invitation/Hero';
import { Verse } from '@/components/invitation/Verse';
import { Countdown } from '@/components/invitation/Countdown';
import { Schedule } from '@/components/invitation/Schedule';
import { Venue } from '@/components/invitation/Venue';
import { RSVP } from '@/components/invitation/RSVP';
import { Footer } from '@/components/invitation/Footer';
import { StickyActionBar } from '@/components/invitation/StickyActionBar';

export default function Home() {
  return (
    <>
      <EnvelopeIntro />
      <main>
        <Hero />
        <Verse />
        <Countdown />
        <Schedule />
        <Venue />
        <RSVP />
      </main>
      <Footer />
      <StickyActionBar />
    </>
  );
}
