import MovieList from "@/components/movie/movie-list";
import Toolbar from "@/components/toolbar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getMovieByType } from "@/services/api/movies";
import { getTypes } from "@/services/api/types";
import { Link, useLoaderData, useRouteError } from "react-router-dom";

export async function loader({ params, request }) {
  if (!params.type) {
    throw new Error("Tip zorunludur.");
  }
  let types = await getTypes();
  let type = types.find((type) => type.slug === params.type);
  if (!type) {
    throw new Error("Tip bulunamadı.");
  }
  let movies = await getMovieByType(params.type);

  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  // If there is a search query, and it is more than 2 characters
  if (q && q.length > 2) {
    movies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  return { type, movies };
}

export default function ListingPage() {
  const { movies, type } = useLoaderData();

  return (
    <>
      <Breadcrumb>
        <h2 className="text-lg">{type.name}</h2>
      </Breadcrumb>

      <div className="container mx-auto py-10 flex flex-col  gap-10">
        <Toolbar />
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export function ListingPageError() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold">Bir hata oluştu</h1>
      <p className="text-lg mt-4">{error.message}</p>
      <Link to="/">
        <Button asChild>Anasayfaya dön</Button>
      </Link>
    </div>
  );
}
