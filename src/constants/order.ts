export const ORDER = [
  {
    label: "Yeniye Göre Sırala",
    slug: "newest",
    sort: (a, b) => b.releaseYear - a.releaseYear,
  },
  {
    label: "Eskiyi Göre Sırala",
    slug: "oldest",
    sort: (a, b) => a.releaseYear - b.releaseYear,
  },
  {
    label: "İsme Göre Sırala (A-Z)",
    slug: "name",
    sort: (a, b) => a.title.localeCompare(b.title),
  },
  {
    label: "İsme Göre Sırala (Z-A)",
    slug: "name-desc",
    sort: (a, b) => b.title.localeCompare(a.title),
  },
];
