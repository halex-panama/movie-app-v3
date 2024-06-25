import { Link } from "react-router-dom";
import { fadeInThumbVariant, formatReleaseDate } from "../../helpers";

//styles
import { Image, Wrapper } from "./Thumb.styles";

type Props = {
  image: string;
  clickable: boolean;
  movieId?: number;
  title?: string;
  release?: string;
  index?: number;
  scale?: number;
  height?: "22.5rem" | "auto";
};

const Thumb = ({
  image,
  movieId,
  clickable,
  title,
  release,
  index,
  scale = 1,
  height = "auto",
}: Props) => (
  <>
    {clickable ? (
      <Link className="link" to={`/${movieId}`}>
        <Wrapper
          initial="initial"
          whileInView="animate"
          variants={fadeInThumbVariant}
          custom={index}
        >
          <Image
            src={image}
            alt="movie-thumb"
            scale={scale as number}
            height={height}
          />
          {title && <h3>{title}</h3>}
          {release && <p>{formatReleaseDate(release as string)}</p>}
        </Wrapper>
      </Link>
    ) : (
      <Wrapper
        initial="initial"
        whileInView="animate"
        variants={fadeInThumbVariant}
        custom={index}
      >
        <Image
          src={image}
          alt="movie-thumb"
          scale={scale as number}
          loading="lazy"
        />
        {title && <h3>{title}</h3>}
        {release && <p>{formatReleaseDate(release as string)}</p>}
      </Wrapper>
    )}
  </>
);

export default Thumb;
