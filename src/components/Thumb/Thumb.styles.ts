import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  p,
  h3 {
    margin: 5px 0;
    color: var(--darkGrey);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;
  animation: animateThumb 0.5s;

  &:hover {
    transform: scale(1.05);
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
