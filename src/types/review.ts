interface Review {
  id: string;
  user_id: string;
  article: string;
  score: number;
  media: Media;
  title: string;
  type: 'movie' | 'tv';
}

interface Media {
  id: string;
  title: string;
  genre: string;
  synopsis: string;
  images_url: string[];
  directors_id: string;
  year: number;
  thumbnail_url: string;
  duration: number;
  release_date: string;
  rating: number;
}

export type { Media, Review };

