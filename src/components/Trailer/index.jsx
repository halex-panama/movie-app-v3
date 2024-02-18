import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
import { Content, Wrapper } from "./Trailer.styles";

const Trailer = ({ id }) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Wrapper>
      <h1>Play Trailer</h1>
      <Content>
        <YouTube className="video" opts={opts} videoId={id} />
      </Content>
    </Wrapper>
  );
};

Trailer.propTypes = {
  id: PropTypes.string,
};

export default Trailer;
