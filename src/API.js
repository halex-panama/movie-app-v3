const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `https://movie-app-server-eeb0.onrender.com/search?query=${searchTerm}&page=${page}`
      : `https://movie-app-server-eeb0.onrender.com/popular?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `https://movie-app-server-eeb0.onrender.com/info/${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `https://movie-app-server-eeb0.onrender.com/credits/${movieId}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideos: async (movieId) => {
    const videosEndpoint = `https://movie-app-server-eeb0.onrender.com/videos/${movieId}`;
    return await (await fetch(videosEndpoint)).json();
  },
};

export default apiSettings;
