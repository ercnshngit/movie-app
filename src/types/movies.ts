// General

export type Movie = {
  title: string;
  description: string;
  programType: "movie" | "series";
  images: Record<string, Image>;
  releaseYear: number;
};

export type Image = { url: string };

// Response
export type MoviesResponse = {
  total: number;
  entries: Movie[];
};
