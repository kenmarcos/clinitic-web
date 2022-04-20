import styled from "styled-components";
import Modal from "styled-react-modal";

export const Container = styled.div`
  padding: 5rem 0 2rem;
`;

export const LogoutContainer = styled.div`
  svg {
    color: var(--color1);
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
    svg {
      display: none;
    }
  }
`;

export const CalendarContainer = styled.div`
  background-color: var(--whiteColor);

  .fc-toolbar-title:first-letter {
    text-transform: uppercase;
  }

  .fc-button-primary {
    background-color: var(--color1);
    font-family: var(--font1);
    font-weight: bold;
    border-color: var(--color2);
    &:hover {
      background-color: var(--color3);
    }
  }

  .fc-button-primary:not(:disabled).fc-button-active {
    background-color: var(--color3);
  }

  a {
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    width: 70rem;
    margin: 0 auto;
    padding: 1rem 4rem;
  }
`;

export const PatientList = styled.ul`
  width: 100%;

  li:first-child {
    border-top: 1px dashed var(--grayColor);
  }
`;

export const PatientItems = styled.li`
  padding: 10px;
  border-bottom: 1px dashed var(--grayColor);

  h3 {
    margin-bottom: 5px;
  }

  span {
    display: inline-block;
    width: 100%;
    font-size: 1rem;
  }

  small {
    font-weight: bold;
    color: var(--redColor);
    text-decoration: underline;
  }

  p {
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const StyledModal = Modal.styled`
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color2);
  position: relative;
  border-radius: 5px;
  max-height: 85vh;
  overflow: auto;

  @media only screen and (min-width: 1024px) {
    width: 40rem;
  }
`;

export const EventModal = Modal.styled`
  width: 15rem;
  height: 15rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color2);
  position: relative;
  border-radius: 5px;

  h3 + ul {
    margin-top: 1.7rem;
  }

  ul {
    width: 100%;
    padding: 0 10px;
    
    li {
      line-height: 2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 25rem;
    height: 25rem;

    h3 {
      font-size: 2rem;
    }

    ul {
      li {
        line-height: 3rem;
      }
    }

    p {
      font-size: 1.3rem;
    }
  }
`;
