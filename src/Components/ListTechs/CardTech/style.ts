import styled from "styled-components";

export const CardTechStyled = styled.li`
  width: 100%;

  border-radius: 4px;

  background-color: var(--color-grey-4);

  padding: 0 20px;

  transition: 0.3s;

  @media (min-width: 768px) {
    cursor: pointer;
  }
  &:hover {
    background-color: var(--color-grey-2);
  }

  .box__motion {
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box__motion > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .box__motion > div > button {
    background: none;
    font-size: 20px;
  }
  .box__motion > div > button > svg {
    color: var(--color-grey-0);
  }
  @media (min-width: 768px) {
    .box__motion > div > button {
      cursor: pointer;
    }
  }
`;
