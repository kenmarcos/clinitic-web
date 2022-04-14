import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  font-family: var(--font2);
  p {
    margin-bottom: 0.2rem;
    font-weight: bold;
    color: var(--color1);
  }
  span {
    color: var(--redColor);
    font-weight: normal;
  }
`;

export const ContainerInput = styled.div`
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(prop) =>
    prop.isInvalid ? "var(--redColor)" : "var(--color1)"};
  padding: 0.4rem 0.8rem;
  display: flex;
  background: var(--whiteColor);
  gap: 10px;
  color: ${(prop) => (prop.isInvalid ? "var(--redColor)" : "var(--grayColor)")};
`;

export const StyledInput = styled.input`
  color: var(--grayColor);
  font-size: 1rem;
`;
