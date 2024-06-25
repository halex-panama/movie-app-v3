import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Movie } from "../../API";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.png";
import { Wrapper, Content } from "./Slider.styles";

type Props = {
  header: string;
  movie: Movie[];
};

const Slider = ({ header, movie }: Props) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>
        <Splide
          options={{
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1.5rem",
            perPage: 5,
            width: 800,
            breakpoints: {
              1500: {
                width: 1200,
              },
              1280: {
                width: 1000,
              },
              1024: {
                width: 800,
              },
              768: {
                perPage: 3,
                width: 500,
              },
              640: {
                perPage: 2,
                width: 400,
              },
              500: {
                perPage: 1,
                width: 250,
              },
            },
          }}
        >
          {movie &&
            movie.length > 0 &&
            movie.map((item) => (
              <SplideSlide key={item.id}>
                <Thumb
                  scale={0.975}
                  key={item.id}
                  clickable
                  image={
                    item.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                      : NoImage
                  }
                  movieId={item.id}
                />
              </SplideSlide>
            ))}
        </Splide>
      </Content>
    </Wrapper>
  );
};

export default Slider;
