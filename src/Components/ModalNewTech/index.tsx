import { useContext } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { schemaNewTech } from "../../Validations/schemaNewTech";
import { TechContext } from "../../Contexts/TechContext";
import useOutClick from "../../Hooks/useOutClick";

import { ButtonPrimary } from "../../Styles/Buttons";
import { FormModalNewTech } from "../../Styles/Forms";
import { BoxInputPrimary } from "../../Styles/Inputs";
import { TitleTertiary } from "../../Styles/Typography";
import { ModalContainerStyled, ModalPrimary } from "../../Styles/Modal";
import { iFormDataModalNew } from "./types";

export const ModalNewTech = () => {
  const { createTechnology, setShowModalNewTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormDataModalNew>({
    resolver: yupResolver(schemaNewTech),
  });

  const modalRef = useOutClick(() => {
    setShowModalNewTech(false);
  });

  return (
    <ModalContainerStyled>
      <ModalPrimary ref={modalRef}>
        <motion.div
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          exit={{ scale: [1, 0], opacity: [1, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FormModalNewTech onSubmit={handleSubmit(createTechnology)}>
            <div className="modal__head">
              <TitleTertiary>Cadastrar Tecnologia</TitleTertiary>
              <button type="button" onClick={() => setShowModalNewTech(false)}>
                X
              </button>
            </div>
            <BoxInputPrimary>
              <input placeholder="Titulo" type="text" {...register("title")} />
              <span>Nome</span>
            </BoxInputPrimary>

            <small>{errors.title?.message}</small>

            <select {...register("status")}>
              <option value="">Selecionar status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <small>{errors.status?.message}</small>

            <ButtonPrimary>Cadastrar Tecnologia</ButtonPrimary>
          </FormModalNewTech>
        </motion.div>
      </ModalPrimary>
    </ModalContainerStyled>
  );
};
