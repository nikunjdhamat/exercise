export type Movie = {title: string; poster_path: string};
export type MovieListResponseType = {
  page: number;
  results: Movie[];
};
