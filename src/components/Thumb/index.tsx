import { Link } from "react-router-dom";
import { fadeInThumbVariant, formatReleaseDate } from "../../helpers";

//styles
import { ImageContainer, Wrapper } from "./Thumb.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";

type Props = {
  image: string;
  clickable: boolean;
  movieId?: number;
  title?: string;
  release?: string;
  index?: number;
  scale?: number;
};

const Thumb = ({
  image,
  movieId,
  clickable,
  title,
  release,
  index,
  scale = 1,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {clickable ? (
        <Link className="link" to={`/${movieId}`}>
          <Wrapper
            initial="initial"
            whileInView="animate"
            variants={fadeInThumbVariant}
            viewport={{ once: true }}
            custom={index}
          >
            <ImageContainer scale={scale} isLoaded={isLoaded}>
              <LazyLoadImage
                src={image}
                width={"100%"}
                height={"100%"}
                effect="blur"
                className="lazy-img"
                onLoad={() => setIsLoaded(true)}
              />
            </ImageContainer>
            {title && <h3>{title}</h3>}
            {release && <p>{formatReleaseDate(release as string)}</p>}
          </Wrapper>
        </Link>
      ) : (
        <Wrapper
          initial="initial"
          whileInView="animate"
          variants={fadeInThumbVariant}
          viewport={{ once: true }}
          custom={index}
        >
          <ImageContainer scale={scale} isLoaded={isLoaded}>
            <LazyLoadImage
              src={image}
              width={"100%"}
              height={"100%"}
              effect="blur"
              className="lazy-img"
              onLoad={() => setIsLoaded(true)}
            />
          </ImageContainer>
          {title && <h3>{title}</h3>}
          {release && <p>{formatReleaseDate(release as string)}</p>}
        </Wrapper>
      )}
    </>
  );
};

export default Thumb;
