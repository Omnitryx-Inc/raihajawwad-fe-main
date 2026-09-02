import { siteConfig } from '@/lib/site.config';
import { ButterflyIcon, KiwiIcon } from '@/components/icons';
import { MotifScatter } from '@/components/invitation/MotifScatter';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ivory-100 py-16 text-center">
      <MotifScatter />
      <div className="container-page relative">
        <div className="mx-auto flex w-fit items-center gap-2 text-gold-600">
          <ButterflyIcon className="h-5 w-5" />
          <KiwiIcon className="h-4 w-4 text-gold-500" />
        </div>
        <p className="mt-5 font-script text-3xl text-gold-700">
          {siteConfig.couple.partnerOne} &amp; {siteConfig.couple.partnerTwo}
        </p>
        <p className="eyebrow mt-3">{siteConfig.occasion.dateLabel}</p>
      </div>
    </footer>
  );
}
