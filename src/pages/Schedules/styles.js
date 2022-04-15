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
  border: 1px solid red;
  background-color: var(--whiteColor);

  @media only screen and (min-width: 1024px) {
    width: 70rem;
    margin: 0 auto;
    padding: 4rem;
  }
`;

export const PatientList = styled.ul``;

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
`;

export const StyledModal = Modal.styled`
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color2);
  position: relative;
  border-radius: 5px;

  h3 {
    text-align: center;
  }
  
  div {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    width: 60rem;
  }
`;

export const ScheduleModal = Modal.styled`
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color2);
  position: relative;
  border-radius: 5px;

  @media only screen and (min-width: 1024px) {
    width: 40rem;
  }
`;
