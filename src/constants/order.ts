import { Movie } from "@/types/movies";

export const ORDER = [
  {
    label: "Yeniye Göre Sırala",
    slug: "newest",
    sort: (a: Movie, b: Movie) => b.releaseYear - a.releaseYear,
  },
  {
    label: "Eskiyi Göre Sırala",
    slug: "oldest",
    sort: (a: Movie, b: Movie) => a.releaseYear - b.releaseYear,
  },
  {
    label: "İsme Göre Sırala (A-Z)",
    slug: "name",
    sort: (a: Movie, b: Movie) => a.title.localeCompare(b.title),
  },
  {
    label: "İsme Göre Sırala (Z-A)",
    slug: "name-desc",
    sort: (a: Movie, b: Movie) => b.title.localeCompare(a.title),
  },
  {
    label: "Rastgele Sırala",
    slug: "random",
    sort: () => 1,
  },
];
