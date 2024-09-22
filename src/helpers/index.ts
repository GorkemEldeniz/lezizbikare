function formatReleaseDate(releaseDate: string): string {
  const date = new Date(releaseDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getNavigationPath(id: string, type: "movie" | "tv"): string {
  if (type.startsWith("movie")) {
    return `/reviews/movies/${id}`;
  } else if (type.startsWith("tv")) {
    return `/reviews/tv-series/${id}`;
  }
  return "#";
}

export { formatReleaseDate, getNavigationPath };
