import { siteConfig } from '@/lib/site.config';
import { venuePhotos } from '@/data/gallery';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Img } from '@/components/ui/Img';
import { MapPinIcon, ArrowUpRightIcon } from '@/components/icons';

export function Venue() {
  const { venue } = siteConfig;

  return (
    <section id="venue" className="bg-ink-950">
      <div className="container-page section-y">
        <SectionHeading eyebrow="Venue" title={venue.name} description={venue.subtitle} />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center">
            <div className="flex gap-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-gold-300" />
              <p className="text-[15px] leading-relaxed text-ivory-100/75">{venue.address}</p>
            </div>
            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-fit"
            >
              Get Directions
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="card min-h-[280px] overflow-hidden">
            <iframe
              src={venue.mapEmbedSrc}
              title={`Map to ${venue.name}`}
              loading="lazy"
              className="h-full min-h-[280px] w-full grayscale invert-[92%] contrast-[90%]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {venuePhotos.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
            {venuePhotos.map((photo) => (
              <div key={photo.src} className="aspect-[4/5] overflow-hidden rounded-md">
                <Img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
