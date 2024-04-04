import { Link } from "react-router-dom";
import { formatReleaseDate } from "../../helpers";

//styles
import { Image, Wrapper } from "./Thumb.styles";

type Props = {
  image: string;
  clickable: boolean;
  movieId?: number;
  title?: string;
  release?: string;
};

const Thumb = ({ image, movieId, clickable, title, release }: Props) => (
  <div>
    {clickable ? (
      <Link className="link" to={`/${movieId}`}>
        <Wrapper>
          <Image src={image} alt="movie-thumb" />
          <h3>{title}</h3>
          <p>{formatReleaseDate(release as string)}</p>
        </Wrapper>
      </Link>
    ) : (
      <Wrapper>
        <Image src={image} alt="movie-thumb" />
        <h3>{title}</h3>
        <p>{release}</p>
      </Wrapper>
    )}
  </div>
);

export default Thumb;
