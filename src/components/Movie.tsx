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
import Slider from "./Slider";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

//image
import NoImage from "../images/no_image.png";

//helpers
import { fadeInThumbVariant, randomArray } from "../helpers";

import { motion } from "framer-motion";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId as string);

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

      {/* <Grid header="Similar Movie">
        {movie.similar &&
          movie.similar.length > 0 &&
          movie.similar.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
              title={movie.title}
              release={movie.release_date}
            />
          ))}
      </Grid> */}

      <Slider header="Similar Movie" movie={movie.similar} />

      <Grid header="Cast">
        {movie.actors &&
          movie.actors.length > 0 &&
          movie.actors.map((actor, index) => (
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInThumbVariant}
              custom={index}
              key={actor.credit_id}
            >
              <Actor
                name={actor.name}
                character={actor.character}
                imageUrl={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
              />
            </motion.div>
          ))}
      </Grid>
    </>
  );
};

export default Movie;
