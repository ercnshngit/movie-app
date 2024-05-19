// General

export type Movie = {
  title: string;
  description: string;
  programType: "movie" | "series";
  images: Record<ImageType, Image>;
  releaseYear: number;
};

export type ImageType = "Poster Art";

export type Image = { url: string };

// Response
export type MoviesResponse = {
  total: number;
  entries: Movie[];
};
