import { motion } from "framer-motion";
import styled from "styled-components";

type ImageProps = {
  scale: number;
  isLoaded: boolean;
};

export const Wrapper = styled(motion.div)`
  p,
  h3 {
    margin: 8px 0;
    color: var(--darkGrey);
  }
`;

export const ImageContainer = styled.div<ImageProps>`
  transition: all 0.3s;
  overflow: hidden;
  border-radius: 0.5rem;
  min-height: 350px;
  max-width: 720px;

  animation: ${({ isLoaded }) =>
    isLoaded ? "none" : "skeleton-loading 1s linear infinite alternate"};

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ isLoaded }) =>
        isLoaded ? "none" : "hsl(200, 20%, 80%)"};
    }
    100% {
      background-color: ${({ isLoaded }) =>
        isLoaded ? "none" : "hsl(200, 20%, 95%)"};
    }
  }

  @media screen and (max-width: 450px) {
    min-height: 500px;
  }

  .lazy-img {
    border-radius: 0.5rem;
  }

  &:hover {
    transform: ${({ scale }) => `scale(${scale})`};
  }
`;
