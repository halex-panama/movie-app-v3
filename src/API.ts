const BASE_URL = `https://movie-app-v3.vercel.app/`;

//Types
export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  release_date: string;
  genres: Genre[];
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  credit_id: number;
  name: string;
  character: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Video = {
  type: string;
  site: string;
  key: string;
};

export type Videos = {
  id: number;
  results: Video[];
};

const apiSettings = {
  fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint = searchTerm
      ? `${BASE_URL}search?query=${searchTerm}&page=${page}`
      : `${BASE_URL}popular?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint = `${BASE_URL}info/${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsEndpoint = `${BASE_URL}credits/${movieId}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideos: async (movieId: string): Promise<Videos> => {
    const videosEndpoint = `${BASE_URL}videos/${movieId}`;
    return await (await fetch(videosEndpoint)).json();
  },
};

export default apiSettings;
