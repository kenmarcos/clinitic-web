import styled from "styled-components";

export const Container = styled.button.attrs((props) => ({
  className: props.className,
}))`
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
`;
