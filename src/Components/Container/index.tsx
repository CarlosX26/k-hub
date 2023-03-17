import { ContainerStyled } from "./style";
import { iPropsContainer } from "./types";

export const Container = ({ children }: iPropsContainer) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
