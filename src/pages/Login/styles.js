import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  border-radius: 1rem;
  background-color: var(--whiteColor);
  display: flex;
  justify-content: center;
  width: 90%;
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.75);

  @media only screen and (min-width: 1024px) {
    width: 40rem;
  }
`;
