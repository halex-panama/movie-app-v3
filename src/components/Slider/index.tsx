import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Movie } from "../../API";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.png";

type Props = {
  movie: Movie[];
};

const Slider = ({ movie }: Props) => {
  return (
    <Splide>
      {movie &&
        movie.length > 0 &&
        movie.map((item) => (
          <SplideSlide key={item.id}>
            <Thumb
              key={item.id}
              clickable
              image={
                item.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                  : NoImage
              }
              movieId={item.id}
              title={item.title}
              release={item.release_date}
            />
          </SplideSlide>
        ))}
    </Splide>
  );
};

export default Slider;
