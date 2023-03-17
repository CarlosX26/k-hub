import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  min-height: 100vh;

  margin: 20px 0;

  .boxHeaderForm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 296px;
    width: 90%;

    & > h1 {
      font-size: 24px;
    }
  }

  & > form > select {
    width: 100%;
    height: 48px;

    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);

    padding-left: 16px;
  }
`;

export default RegisterStyled;
