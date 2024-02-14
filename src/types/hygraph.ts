type Text = { markdown: string; html: string };

type Image = { url: string };

type Location = {
  latitude: number;
  longitude: number;
};

export type Property = {
  id: string;
  image: Image;
  rooms: string;
  location: Location;
  pricePerNight: number;
  pros: string[];
  link: string;
  title: string;
  cons: string[];
  notes: Text;
  accommodates: string;
  bathrooms: string;
  unavailable: boolean;
  picked: boolean;
};

export type Event = {
  id: string;
  numberOfNights: number;
  slug: string;
  theme: string;
  title: string;
  estimatedAttendees: number;
  propertyPicks?: Property[];
};
