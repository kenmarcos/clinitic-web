import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  font-size: 1rem;
  color: var(--darkGrayColor);
  padding: 1rem;

  @media (min-width: 768px) {
    width: 56vw;
  }

  @media (min-width: 1024px) {
    width: 32vw;
  }
`;

export const Title = styled.h2`
  color: var(--color1);
  text-align: center;
  margin: 1rem 0 1.5rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
  display: block;
  text-align: center;
  color: var(--grayColor);

  a {
    color: var(--color1);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  div {
    margin-bottom: 1.5rem;
  }
`;
