import { siteConfig } from '@/lib/site.config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PhoneIcon, WhatsAppIcon } from '@/components/icons';

function digitsOnly(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export function RSVP() {
  const { rsvp } = siteConfig;

  return (
    <section id="rsvp" className="bg-ivory-200">
      <div className="container-page section-y">
        <SectionHeading
          eyebrow="RSVP"
          description="We would love for you to join us in celebration."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-3">
          {rsvp.contacts.map((contact) => {
            const phone = contact.phone ?? rsvp.sharedPhone;
            const digits = digitsOnly(phone);

            return (
              <div key={contact.name} className="card flex flex-col items-center gap-1 px-5 py-8 text-center">
                <p className="font-display text-xl font-medium text-ink-900">{contact.name}</p>
                <p className="eyebrow">{contact.relation}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`tel:${digits}`}
                    aria-label={`Call ${contact.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-colors hover:border-gold-600 hover:text-gold-600"
                  >
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/${digits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Message ${contact.name} on WhatsApp`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-colors hover:border-gold-600 hover:text-gold-600"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
