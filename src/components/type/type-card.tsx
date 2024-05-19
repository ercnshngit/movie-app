import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/movies";
import { Image } from "@/components/image";
import { Type } from "@/types/types";
import { Link } from "react-router-dom";

export default function TypeCard({ type }: { type: Type }) {
  let name = type.name;
  let slug = type.slug;
  let image = type.image;

  return (
    <Link to={`list/${slug}`} className="h-full w-full">
      <div className="overflow-hidden rounded-lg h-[85%]">
        <Image
          fallbackSrc="/images/movie/placeholder.png"
          src={image}
          alt={`Type Image for ${name}`}
          className={cn(
            "w-full h-full object-cover transition-all hover:scale-105 "
          )}
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </Link>
  );
}
