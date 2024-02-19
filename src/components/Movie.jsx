import React from "react";
import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//component
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import Trailer from "./Trailer";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

//image
import NoImage from "../images/no_image.png";

//helpers
import { randomArray } from "../helpers";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something is wrong..</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      {movie.trailers && movie.trailers.length > 0 ? (
        <Trailer id={movie.trailers[randomArray(movie.trailers.length)].key} />
      ) : (
        <div>No Trailer Found</div>
      )}

      <Grid header="Cast">
        {movie.actors &&
          movie.actors.length > 0 &&
          movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
      </Grid>
    </>
  );
};

export default Movie;
