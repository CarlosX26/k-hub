import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  min-height: 100vh;

  & > form > a {
    width: 100%;
    height: 48px;

    font-size: 16px;

    border-radius: 4px;

    background-color: var(--color-grey-1);
    color: var(--color-white);

    transition: 0.3s;

    padding-top: 14px;

    &:hover {
      background-color: var(--color-grey-2);
    }

    @media (min-width: 768px) {
      & {
        cursor: pointer;
      }
    }
  }
`;

export default LoginStyled;
