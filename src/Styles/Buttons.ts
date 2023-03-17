import styled from "styled-components";
import { Link } from "react-router-dom";
import { iPropsButtonPrimary } from "./types";

const ButtonPrimary = styled.button`
  width: 144px;
  height: 48px;

  font-size: 16px;

  border-radius: 4px;

  background-color: var(
    ${({ enabled = true }: iPropsButtonPrimary) =>
      enabled ? "--color-primary" : "--color-primary-negative"}
  );
  color: var(--color-white);

  transition: 0.3s;

  &:hover {
    background-color: var(
      ${({ enabled = true }: iPropsButtonPrimary) =>
        enabled ? "--color-primary-focus" : ""}
    );
  }

  @media (min-width: 768px) {
    & {
      cursor: ${({ enabled = true }: iPropsButtonPrimary) =>
        enabled ? "pointer" : "unset"};
    }
  }
`;

const ButtonSecondary = styled(ButtonPrimary)`
  background-color: var(--color-grey-1);

  &:hover {
    background-color: var(--color-grey-2);
  }
`;

const ButtonTertiary = styled(ButtonSecondary)`
  height: 32px;

  background-color: var(--color-grey-3);

  font-size: 12px;
`;

const ButtonNavigate = styled(Link)`
  width: 64px;
  height: 32px;

  background-color: var(--color-grey-3);
  color: var(--color-white);

  font-size: 12px;

  border-radius: 4px;

  transition: 0.3s;

  text-decoration: none;
  text-align: center;

  padding-top: 8px;
  &:hover {
    background-color: var(--color-grey-2);
  }
`;

const ButtonAddTech = styled.button`
  width: 32px;
  height: 32px;

  font-size: 24px;

  border-radius: 4px;

  background-color: var(--color-grey-3);
  color: var(--color-white);

  transition: 0.3s;

  &:hover {
    background-color: var(--color-grey-2);
  }

  @media (min-width: 768px) {
    cursor: pointer;
  }
`;

export {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonNavigate,
  ButtonAddTech,
};
