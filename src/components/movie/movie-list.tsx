import { Movie } from "@/types/movies";
import MovieCard from "./movie-card";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {movies.map((movie) => (
        <div key={movie.title} className="h-[400px] w-full overflow-hidden">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
