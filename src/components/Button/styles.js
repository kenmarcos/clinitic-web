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

  &.tryNowBtn {
    background-color: var(--color1);
    padding: 1.5rem 3rem;
    font-size: 1.3rem;
    color: var(--whiteColor);
    font-family: var(--font1);
    font-weight: bolder;
  }
`;
