import YouTube from "react-youtube";

import { Content, Skeleton, Wrapper } from "./Trailer.styles";
import { useState } from "react";

type Props = {
  id: string;
};

const Trailer = ({ id }: Props) => {
  const [loadingVideo, setLoadingVideo] = useState(true);
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Wrapper>
      <h1>Play Video</h1>
      <Content>
        {loadingVideo && <Skeleton />}
        <YouTube
          className="video"
          opts={opts}
          videoId={id}
          onReady={() => setLoadingVideo(false)}
        />
      </Content>
    </Wrapper>
  );
};

export default Trailer;
