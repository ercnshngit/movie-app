import { Movie } from "@/types/movies";
import MovieCard from "./movie-card";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
      {movies.length === 0 && (
        <div className="col-span-4 text-center text-lg">
          Bu tipte içerik bulunamadı.
        </div>
      )}
      {movies.map((movie) => (
        <div key={movie.title} className="h-[400px] w-full overflow-hidden">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
