import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  scale: number;
  height?: "22.5rem" | "auto";
};

export const Wrapper = styled(motion.div)`
  p,
  h3 {
    margin: 5px 0;
    color: var(--darkGrey);
  }
`;

export const Image = styled.img<Props>`
  width: 100%;
  max-width: 720px;
  height: ${({ height }) => (height ? `${height}` : "auto")};
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
