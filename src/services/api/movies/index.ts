import { MOVIES } from "@/mock/movies";
import { MoviesResponse } from "@/types/movies";

export function getMovies() {
  const data = MOVIES as MoviesResponse;

  return data;
}

export function getMovieByType(type: string) {
  const data = MOVIES.entries.filter((movie) => {
    return movie.programType === type;
  });

  return data;
}
