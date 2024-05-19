import { fakeDelay } from "@/lib/utils";
import { MOVIES } from "@/mock/movies";
import { MoviesResponse } from "@/types/movies";

export function getMovies() {
  const data = MOVIES as MoviesResponse;

  return data;
}

export async function getMovieByType(type: string) {
  const data = MOVIES.entries.filter((movie) => {
    return movie.programType === type;
  });

  await fakeDelay(import.meta.env.VITE_MOCK_API_FAKE_DELAY_IN_MS || 0);

  return data;
}
