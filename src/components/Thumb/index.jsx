import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatReleaseDate } from "../../helpers";

//styles
import { Image, Wrapper } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, title, release }) => (
  <div>
    {clickable ? (
      <Link className="link" to={`/${movieId}`}>
        <Wrapper>
          <Image src={image} alt="movie-thumb" />
          <h3>{title}</h3>
          <p>{formatReleaseDate(release)}</p>
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

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  title: PropTypes.string,
  release: PropTypes.string,
};

export default Thumb;
