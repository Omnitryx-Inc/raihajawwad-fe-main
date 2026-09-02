// ---------------------------------------------------------------------------
// Central site configuration.
//
// This is the one file you should need to edit to update any detail on the
// invitation: names, date, venue, schedule, RSVP contacts, or the couple
// photo. Everything on the page reads from here.
// ---------------------------------------------------------------------------

export const siteConfig = {
  couple: {
    partnerOne: 'Raiha',
    partnerTwo: 'Jawwad',
    // Full legal names, for the formal hero card. Short first names above
    // are used for the casual signature moments (e.g. the footer).
    partnerOneFull: 'Raiha Azfar',
    partnerTwoFull: 'Jawwad Ahmed Abbasi',
    // Shown as the small monogram mark (e.g. in the envelope seal and footer).
    initials: 'R & J',
  },

  occasion: {
    name: 'Nikkah',
    // ISO 8601, in Karachi local time (Asia/Karachi, UTC+5). Used for the
    // countdown and the calendar links, so keep this in sync with
    // schedule.events[1] (Nikkah) below.
    dateTimeIso: '2026-10-17T21:30:00+05:00',
    // Human-readable date shown throughout the page.
    dateLabel: '17 October 2026',
    dayLabel: 'Saturday',
    city: 'Karachi, Pakistan',
    // A short, tasteful line shown near the top of the invitation.
    invitationLine: 'Together with their families, request the honour of your presence',
  },

  // The elder hosting the invitation: in a desi shadi card this is who
  // issues it, addressed to the guest, not written in the couple's own
  // voice. Shown in the hero's eyebrow line ("[hostLine] cordially invites
  // you to the...").
  formalInvite: {
    hostLine: 'Mrs. Aftab ur Rehman',
  },

  venue: {
    name: 'Glass Palace',
    subtitle: 'At Duty Free Shop',
    address: 'Duty Free Shop, Karachi Memon Co-operative Housing Society, Jinnah Housing Society, P.E.C.H.S., Karachi, 75350, Pakistan',
    // Directions link as provided (opens turn-by-turn directions to the venue).
    directionsUrl:
      'https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KT3Bnx0AP7M-MV1MmsQy56hg&daddr=At+Duty+Free+Shop,+Glass+Palace,+Duty+Free+Shop,+Karachi+Memon+Co-operative+Housing+Society+Jinnah+Housing+Society+P.E.C.H.S.,+Karachi,+75350,+Pakistan',
    // Embeddable map, built from the same address, for the inline preview.
    mapEmbedSrc:
      'https://www.google.com/maps?q=Glass+Palace+Duty+Free+Shop+Karachi+Memon+Co-operative+Housing+Society+Jinnah+Housing+Society+PECHS+Karachi+75350+Pakistan&output=embed',
  },

  // Order matters, rendered as a vertical timeline.
  schedule: {
    events: [
      { id: 'gathering', label: 'Gathering', time: '8:30 PM', note: 'Arrival' },
      { id: 'nikkah', label: 'Nikkah', time: '9:30 PM', note: 'The ceremony' },
      { id: 'dinner', label: 'Dinner', time: '10:00 PM', note: 'Celebration & dinner' },
    ],
  },

  // Everyone here shares one WhatsApp/call number for now. Give any contact
  // their own by adding a `phone` field to that entry (E.164 format, e.g.
  // "+923001234567"); it overrides the shared number below just for them.
  rsvp: {
    sharedPhone: '+923232987356',
    contacts: [
      { name: 'Azfar Aftab', relation: 'Father' },
      { name: 'Rawaha', relation: 'Mother' },
      { name: 'Muhammad Danish', relation: 'Brother' },
    ] as Array<{ name: string; relation: string; phone?: string }>,
  },

  media: {
    // Set to a path under /public (e.g. "/images/couple/hero.jpg") to show a
    // real photo behind the hero. Leave null for the gradient-only hero.
    heroPhoto: null as string | null,
  },

  seo: {
    title: 'Raiha & Jawwad | Nikkah · 17 October 2026',
    description: 'Join us as we celebrate our Nikkah on 17 October 2026 at Glass Palace, Karachi.',
    siteUrl: 'https://raihajawwad.love',
  },
} as const;

export type SiteConfig = typeof siteConfig;
