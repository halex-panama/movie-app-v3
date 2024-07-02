import { Link } from "react-router-dom";
import { fadeInThumbVariant, formatReleaseDate } from "../../helpers";

//styles
import { Image, Skeleton, Wrapper } from "./Thumb.styles";
import { useState } from "react";

type Props = {
  image: string;
  clickable: boolean;
  movieId?: number;
  title?: string;
  release?: string;
  index?: number;
  scale?: number;
  movieInfo?: boolean;
  // height?: "22.5rem" | "auto";
};

const Thumb = ({
  image,
  movieId,
  clickable,
  title,
  release,
  index,
  scale = 1,
  movieInfo = false,
}: // height = "auto",
Props) => {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <>
      {clickable ? (
        <Link className="link" to={`/${movieId}`}>
          <Wrapper
            initial="initial"
            whileInView="animate"
            variants={fadeInThumbVariant}
            custom={index}
          >
            {loadingImage && <Skeleton movieInfo={movieInfo as boolean} />}
            <Image
              src={image}
              alt="movie-thumb"
              scale={scale as number}
              onLoad={() => setLoadingImage(false)}
              // height={height}
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
          {loadingImage && <Skeleton movieInfo={movieInfo as boolean} />}
          <Image
            src={image}
            alt="movie-thumb"
            scale={scale as number}
            loading="lazy"
            onLoad={() => setLoadingImage(false)}
          />
          {title && <h3>{title}</h3>}
          {release && <p>{formatReleaseDate(release as string)}</p>}
        </Wrapper>
      )}
    </>
  );
};

export default Thumb;
