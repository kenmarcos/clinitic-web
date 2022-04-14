import styled from "styled-components";

export const Container = styled.header`
  background-image: linear-gradient(
    180deg,
    var(--color3),
    hsla(0, 0%, 100%, 0)
  );
  width: 100%;
  height: 4rem;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const LogoMobile = styled.figure`
  width: 40%;

  img {
    height: 100%;
    display: block;
    border-radius: 5px;
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const LogoDesktop = styled.figure`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
    width: 40%;

    img {
      height: 100%;
      display: block;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const Buttons = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;
