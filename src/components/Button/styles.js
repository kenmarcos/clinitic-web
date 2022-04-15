import styled from "styled-components";

export const Container = styled.button`
  border: none;
  box-shadow: 0px 12px 20px -15px black;
  transform: translate(0px, 2px);
  transition: transform 500ms;
  border-radius: 1rem;
  :hover {
    transform: translate(0px, -2px);
    transition: transform 500ms;
  }
  font-family: var(--font1);
  font-weight: bolder;

  &.tryNowBtn {
    background-color: var(--color1);
    padding: 1.5rem 3rem;
    font-size: 1.3rem;
    color: var(--whiteColor);
  }

  &.loginBtn {
    background-color: transparent;
    color: var(--color1);
    font-size: 1.2rem;

    :hover {
      text-decoration: underline;
    }
  }

  &.signUpBtn {
    background-color: var(--color1);
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;
    color: var(--whiteColor);
  }

  &.createAccountBtn {
    background-color: var(--color1);
    width: 100%;
    font-size: 2rem;
    color: var(--whiteColor);
    border-radius: 5px;
    margin-bottom: 1.5rem;
    padding: 5px;
  }

  &.logoutBtn {
    display: none;

    @media only screen and (min-width: 1024px) {
      display: block;
    }
  }

  &.cancelBtn {
    background-color: var(--redColor);
    color: var(--whiteColor);
    transform: none;
    :hover {
      filter: brightness(1.3);
    }
    font-size: 1rem;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
  }

  &.basicBtn {
    border: 1px solid var(--color3);
    background-color: var(--whiteColor);
    color: var(--darkGrayColor);
  }
`;
