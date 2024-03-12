import YouTube from "react-youtube";

import { Content, Wrapper } from "./Trailer.styles";

type Props = {
  id: string;
};

const Trailer = ({ id }: Props) => {
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
        <YouTube className="video" opts={opts} videoId={id} />
      </Content>
    </Wrapper>
  );
};

export default Trailer;
