import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { CardTechStyled } from "./style";
import { iPropsCardTech } from "./types";

export const CardTech = ({ tech, children }: iPropsCardTech) => {
  const { setShowModalEditTech, setTechEdit } = useContext(TechContext);
  const openModalEdit = (event: React.BaseSyntheticEvent | MouseEvent) => {
    event.stopPropagation();
    setTechEdit({ ...tech });
    setShowModalEditTech(true);
  };

  return (
    <CardTechStyled onClick={(e) => openModalEdit(e)}>
      {children}
    </CardTechStyled>
  );
};
