import styled from "styled-components";

const BoxInputPrimary = styled.label`
  width: 100%;
  height: 48px;
  position: relative;

  border-radius: 4px;

  background-color: var(--color-grey-2);

  & > input {
    width: 100%;
    height: 48px;

    border-radius: 4px;

    padding-left: 16px;

    background-color: var(--color-grey-2);

    color: var(--color-grey-0);
  }

  & > span {
    position: absolute;
    top: -14px;
    left: 16px;

    color: var(--color-grey-1);
    background-color: var(--color-grey-2);

    font-size: 16px;

    cursor: text;

    border-radius: 4px 4px 0 0;

    transition: 0.1s ease-in-out;

    padding: 0 4px;
  }

  & > input::placeholder {
    color: transparent;
  }

  & > input:placeholder-shown ~ span {
    top: 12px;
  }

  & > input:focus {
    outline: 1px solid var(--color-grey-0);
  }
  & > input:focus + span {
    top: -14px;

    color: var(--color-grey-0);
  }
`;

const BoxInputPassword = styled(BoxInputPrimary)`
  & > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    color: var(--color-grey-1);
  }
  @media (min-width: 768px) {
    & > svg {
      cursor: pointer;
    }
  }
`;

const InputDisabled = styled.input`
  width: 90%;
  height: 48px;

  border-radius: 4px;

  padding-left: 16px;

  background-color: var(--color-grey-2);

  color: var(--color-grey-1);

  font-size: 16px;

  cursor: unset;
`;

export { BoxInputPrimary, BoxInputPassword, InputDisabled };
