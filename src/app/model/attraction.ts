export interface Attraction {
    id: number;
    position: {
      lat: number,
      lng: number,
    },
    name: string;
    description: string;
    address: string;
    url: string;
    image: string;
  }