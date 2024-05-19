import MovieList from "@/components/movie/movie-list";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getMovieByType } from "@/services/api/movies";
import { getTypes } from "@/services/api/types";
import { Link, useLoaderData, useRouteError } from "react-router-dom";

export async function loader({ params }) {
  if (!params.type) {
    throw new Error("Tip zorunludur.");
  }
  let types = await getTypes();
  let type = types.find((type) => type.slug === params.type);
  if (!type) {
    throw new Error("Tip bulunamadı.");
  }

  let movies = getMovieByType(params.type);
  return { type, movies };
}

export default function ListingPage() {
  const { movies, type } = useLoaderData();

  return (
    <>
      <Breadcrumb>
        <h2 className="text-lg">{type.name}</h2>
      </Breadcrumb>
      <div className="container mx-auto py-10">
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
