interface Genres {
  id: number;
  name: string;
}

export type Prop = {
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: Genres[];
  voteAverage: number;
  tagline: string;
  overview: string;
  runtime: number;
};
