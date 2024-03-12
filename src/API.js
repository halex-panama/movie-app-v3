const BASE_URL = `https://movie-app-v3.vercel.app/`;

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${BASE_URL}search?query=${searchTerm}&page=${page}`
      : `${BASE_URL}popular?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${BASE_URL}info/${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${BASE_URL}credits/${movieId}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideos: async (movieId) => {
    const videosEndpoint = `${BASE_URL}videos/${movieId}`;
    return await (await fetch(videosEndpoint)).json();
  },
};

export default apiSettings;
