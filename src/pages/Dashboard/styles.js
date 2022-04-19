import styled from "styled-components";
import Modal from "styled-react-modal";

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

export const Container = styled.div`
  padding: 5rem 0 2rem;

  @media only screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    gap: 5rem;
    justify-content: center;
  }
`;

export const ContentBox = styled.section`
  margin-bottom: 3rem;

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  gap: 0.7rem;
  padding: 1rem 5px;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    justify-content: start;
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
  padding: 0 10px 5px;
  border-bottom: 0.5px solid var(--grayColor);

  @media only screen and (min-width: 1024px) {
    margin-top: 1.8rem;
    font-size: 1.8rem;
  }
`;

export const SchedulesBox = styled.div`
  h2 {
    color: var(--color3);
    text-align: center;
    margin: 2rem 0;
  }

  @media only screen and (min-width: 1024px) {
    height: 64vh;
    overflow: auto;
  }
`;

export const SchedulesList = styled.ul``;

export const SchedulesItems = styled.li`
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
  gap: 1rem;

  h3 {
    text-align: center;
  }
  
  div {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  svg {
    font-size: 3.5rem;
    color: var(--color1);
  }

  @media only screen and (min-width: 1024px) {
    width: 28rem;
    padding: 2rem;
  }
`;
