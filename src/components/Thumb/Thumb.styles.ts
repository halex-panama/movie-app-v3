import { motion } from "framer-motion";
import styled from "styled-components";

type ImageProps = {
  scale: number;
  // height?: "22.5rem" | "auto";
};

type SkeletonProps = {
  movieInfo: boolean;
};

export const Wrapper = styled(motion.div)`
  position: relative;

  p,
  h3 {
    margin: 5px 0;
    color: var(--darkGrey);
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
  height: ${({ movieInfo }) => (movieInfo ? "auto" : "22.5rem")};

  position: absolute;
  top: 0;
  width: 100%;
  max-width: 720px;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;
  animation: animateThumb 0.5s;

  &:hover {
    transform: ${({ scale }) => `scale(${scale})`};
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
