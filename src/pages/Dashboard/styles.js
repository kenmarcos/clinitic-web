import styled from "styled-components";

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
