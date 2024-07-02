import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Skeleton = styled.div`
  width: 640px;
  height: 360px;

  position: absolute;
  top: 0;

  @media screen and (max-width: 768px) {
    width: 320px;
    height: 240px;
  }

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  .video {
    width: 640px;
    height: 360px;

    @media screen and (max-width: 768px) {
      width: 320px;
      height: 240px;
    }
  }
`;
