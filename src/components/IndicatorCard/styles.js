import styled from "styled-components";

export const Container = styled.div`
  padding: 0.7rem;
  box-shadow: -1px 5px 12px -2px rgba(0, 0, 0, 0.75);
  background-color: var(--whiteColor);
  border-radius: 1rem;
  width: 50%;

  @media only screen and (min-width: 1024px) {
    width: 25rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #46cc46;
    vertical-align: text-top;
    font-size: 4rem;
    margin-left: 20px;
  }
`;

export const Indicator = styled.h3`
  font-size: 4rem;
  display: inline-block;
`;

export const IndicatorImage = styled.figure`
  display: inline-block;

  svg {
    color: #46cc46;
    font-size: 4rem;
    vertical-align: middle;
  }
`;
