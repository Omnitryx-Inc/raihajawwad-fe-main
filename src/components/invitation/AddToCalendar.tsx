'use client';

import { siteConfig } from '@/lib/site.config';
import { googleCalendarUrl, icsDataUrl } from '@/lib/calendar';
import { CalendarIcon } from '@/components/icons';

export function AddToCalendar() {
  const event = {
    title: `${siteConfig.couple.partnerOne} & ${siteConfig.couple.partnerTwo}'s Nikkah`,
    description: `Join us as we celebrate our Nikkah.\nGathering ${siteConfig.schedule.events[0].time}, Nikkah ${siteConfig.schedule.events[1].time}, Dinner ${siteConfig.schedule.events[2].time}.`,
    location: `${siteConfig.venue.name}, ${siteConfig.venue.address}`,
    start: new Date(siteConfig.occasion.calendarStartIso),
    end: new Date(siteConfig.occasion.calendarEndIso),
  };

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto">
        <CalendarIcon className="h-4 w-4" />
        Google Calendar
      </a>
      <a href={icsDataUrl(event)} download="raiha-jawwad-nikkah.ics" className="btn-outline w-full sm:w-auto">
        <CalendarIcon className="h-4 w-4" />
        Apple / Outlook (.ics)
      </a>
    </div>
  );
}
