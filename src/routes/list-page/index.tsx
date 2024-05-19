import MovieList from "@/components/movie/movie-list";
import Toolbar from "@/components/toolbar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ORDER } from "@/constants/order";
import { getMovieByType } from "@/services/api/movies";
import { getTypes } from "@/services/api/types";
import { Movie } from "@/types/movies";
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

  const { filtersApplied, items } = applyQueryFilters(movies, request.url);

  if (filtersApplied) {
    movies = items;
  } else {
    // If there is no search query, show the first 18 movies
    movies = items.slice(0, 18);
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

/**
 * Applies query filters to a list of movies based on a request URL.
 *
 * @param {Movie[]} items - The list of movies to filter.
 * @param {string} requestUrl - The request URL containing the query parameters.
 *
 * @returns {Object} An object containing the filtered list of movies and a boolean indicating whether any filters were applied.
 * @returns {Movie[]} .items - The filtered list of movies.
 * @returns {boolean} .filtersApplied - A boolean indicating whether any filters were applied.
 */
function applyQueryFilters(items: Movie[], requestUrl: string) {
  let filtersApplied = false;
  const url = new URL(requestUrl);
  const q = url.searchParams.get("q");

  // If there is a search query, and it is more than 2 characters
  if (q && q.length > 2) {
    items = items.filter((movie) =>
      movie.title.toLowerCase().includes(q.toLowerCase())
    );
    filtersApplied = true;
  }

  const orderQuery = url.searchParams.get("order");

  // If there is an order query, sort the movies
  // Sort function came from the constants/order file
  let order = ORDER.find((o) => o.slug === orderQuery);

  if (order) {
    items = items.sort(order.sort);
    filtersApplied = true;
  }

  return {
    items,
    filtersApplied,
  };
}
