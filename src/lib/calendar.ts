// Builds an "Add to calendar" event (Google Calendar link + a downloadable
// .ics file) entirely client-side, no backend involved. Both are derived
// from siteConfig, so editing the date/venue there keeps this in sync.

export type CalendarEvent = {
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
};

function toUtcStamp(date: Date): string {
  return `${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
}

export function googleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${toUtcStamp(event.start)}/${toUtcStamp(event.end)}`,
    details: event.description,
    location: event.location,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function escapeIcsText(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

/** Returns a `data:` URL for a downloadable .ics file (works for Apple/Outlook/anything else). */
export function icsDataUrl(event: CalendarEvent): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Raiha & Jawwad//Nikkah Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:raiha-jawwad-nikkah-${event.start.getTime()}@raihajawwad.love`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART:${toUtcStamp(event.start)}`,
    `DTEND:${toUtcStamp(event.end)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  const ics = lines.join('\r\n');
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
