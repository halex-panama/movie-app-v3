import { useState, useEffect } from "react";

import API, { Movie, Cast, Crew, Video } from "../API";

import { isPersistedState } from "../helpers";

export type MovieState = Movie & {
  actors: Cast[];
  directors: Crew[];
  trailers: Video[];
};

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);

        const credits = await API.fetchCredits(movieId);

        const videos = await API.fetchVideos(movieId);

        //get directors
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        // get trailers
        const trailers = videos.results.filter(
          (video) =>
            video.site.toLowerCase() === "youtube" &&
            (video.type.toLowerCase() === "trailer" ||
              video.type.toLowerCase() === "teaser" ||
              video.type.toLowerCase() === "clip")
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
          trailers,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    if (sessionState && sessionState.length > 0) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
