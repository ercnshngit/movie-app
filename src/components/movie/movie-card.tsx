import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/movies";
import { Image } from "@/components/image";

export default function MovieCard({ movie }: { movie: Movie }) {
  let title = movie.title || "No title";
  let description = movie.description || "No description";
  let programType = movie.programType || "No program type";
  let releaseYear = movie.releaseYear || "No release year";
  let posterImage =
    movie.images["Poster Art"].url || "/images/movie/placeholder.png";

  return (
    <div className="h-full w-full">
      <div className="overflow-hidden rounded-lg h-[85%]">
        <Image
          fallbackSrc="/images/movie/placeholder.png"
          src={posterImage}
          alt={`${title} poster`}
          className={cn(
            "w-full h-full object-cover transition-all hover:scale-105 "
          )}
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm text-gray-500">
        {programType} - {releaseYear}
      </p>
    </div>
  );
}
