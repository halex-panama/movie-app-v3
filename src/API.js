const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `https://movie-app-v3.vercel.app/search?query=${searchTerm}&page=${page}`
      : `https://movie-app-v3.vercel.app/popular?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `https://movie-app-v3.vercel.app/info/${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `https://movie-app-v3.vercel.app/credits/${movieId}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideos: async (movieId) => {
    const videosEndpoint = `https://movie-app-v3.vercel.app/videos/${movieId}`;
    return await (await fetch(videosEndpoint)).json();
  },
};

export default apiSettings;
