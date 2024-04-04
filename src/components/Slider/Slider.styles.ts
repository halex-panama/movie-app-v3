import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  h1 {
    color: var(--medGrey);
    margin: 1rem 3rem;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
      margin: 1rem 1.5rem;
    }
  }
`;
