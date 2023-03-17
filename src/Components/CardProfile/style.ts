import styled from "styled-components";

export const CardProfileStyled = styled.section`
  box-shadow: 0px 0px 0px 1px var(--color-grey-2);

  padding: 48px 0;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (min-width: 768px) {
    & > div {
      gap: unset;
      align-items: center;
    }
  }
`;
