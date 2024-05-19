import { MOVIES } from "@/mock/movies";
import { MoviesResponse } from "@/types/movies";

export function getMovies() {
  const data = MOVIES as MoviesResponse;

  return data;
}
