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
  // justify-content: center;
  background-color: var(--color2);
  position: relative;
  border-radius: 5px;
  max-height: 85vh;
  overflow: scroll;

  @media only screen and (min-width: 1024px) {
    width: 40rem;
  }
`;
