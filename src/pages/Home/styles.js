import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color2);
  padding: 1rem;

  @media only screen and (min-width: 1024px) {
    padding: 4rem;
  }
`;

export const Intro = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: var(--font1);
  color: var(--darkGrayColor);
  margin: 2rem 0;
  font-size: 2.5rem;

  @media only screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: var(--font1);
  color: var(--darkGrayColor);
  margin: 1rem 0;
  font-size: 1.8rem;

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  margin: 1rem;
  line-height: 2rem;
  font-size: 1.3rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 0 15rem;
  }
`;

export const Content = styled.section``;

export const Feature = styled.div`
  display: flex;
  flex-direction: ${(prop) => (prop.reverse ? "column-reverse" : "column")};

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 2rem 6rem;
    gap: 2rem;
  }
`;

export const Text = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FeatDescription = styled.p`
  line-height: 2rem;
  font-size: 1.3rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Illustration = styled.figure`
  padding: 3rem 0;

  img {
    width: 80%;
    display: block;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
    padding: 0;

    img {
      width: 75%;
    }
  }
`;

export const FinalContent = styled.section`
  background-color: var(--color1);
  text-align: center;
`;

export const HitPhrase = styled.h2`
  font-family: var(--font1);
  color: var(--whiteColor);
  padding: 0 2rem 4rem 2rem;
  font-size: 2rem;

  @media only screen and (min-width: 1024px) {
    padding: 0 10rem 8rem 10rem;
    font-size: 3rem;
  }
`;

export const Banner = styled.figure`
  img {
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    img {
      width: 65%;
    }
  }
`;
