//components
import Thumb from "../Thumb";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//image
import NoImage from "../../images/no_image.png";

//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//helpers
import { formatRating } from "../../helpers";

//types
import { MovieState } from "../../hooks/useMovieFetch";

type Props = {
  movie: MovieState;
};

const MovieInfo = ({ movie }: Props) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
        movieInfo={true}
        scale={1}
      />

      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="text-container">
          <div>
            <h3>RATING</h3>
            <div className="score">{formatRating(movie.vote_average)}</div>
          </div>

          <div className="director">
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>

          <div className="genre">
            <h3>GENRES</h3>
            {movie.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
