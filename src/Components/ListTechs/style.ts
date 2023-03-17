import styled from "styled-components";

export const ListTechStyled = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > ul {
    margin: 20px 0;

    padding: 20px;

    width: 100%;
    min-height: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: var(--color-grey-3);

    border-radius: 4px;
  }
`;
