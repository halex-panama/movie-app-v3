import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 20px;
  padding: 5px;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Content = styled.div`
  h3,
  p {
    margin: 0;
  }

  p {
    color: var(--darkGrey);
  }

  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.25rem;
`;

export const Image = styled.img`
  width: 100px;
  object-fit: cover;
  border-radius: 5px;
`;
