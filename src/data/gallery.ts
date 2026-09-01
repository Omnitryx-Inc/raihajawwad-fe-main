// Venue photos, rendered in the Venue section. Empty by default, so the
// section falls back to its built-in placeholder panels; see
// public/images/venue/README.md for how to add real ones.
export type GalleryPhoto = {
  src: string; // path under /public, e.g. "/images/venue/hall.jpg"
  alt: string;
};

export const venuePhotos: GalleryPhoto[] = [];
