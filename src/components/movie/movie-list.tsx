import { Movie } from "@/types/movies";
import MovieCard from "./movie-card";
import { List } from "@/components/ui/list";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <List>
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
    </List>
  );
}
