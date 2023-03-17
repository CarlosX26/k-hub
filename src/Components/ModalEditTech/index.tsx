import { useContext } from "react";

import { useForm } from "react-hook-form";
import { TechContext } from "../../Contexts/TechContext";
import { motion } from "framer-motion";
import useOutClick from "../../Hooks/useOutClick";

import { ButtonPrimary, ButtonSecondary } from "../../Styles/Buttons";
import { FormModalEditTech } from "../../Styles/Forms";
import { InputDisabled } from "../../Styles/Inputs";
import { TitleTertiary } from "../../Styles/Typography";
import { ModalContainerStyled, ModalPrimary } from "../../Styles/Modal";
import { iFormDataModalEdit } from "./types";

export const ModalEditTech = () => {
  const { setShowModalEditTech, deleteTechnology, editTechnology, techEdit } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<iFormDataModalEdit>();

  const modalRef = useOutClick(() => {
    setShowModalEditTech(false);
  });

  return (
    <ModalContainerStyled>
      <ModalPrimary ref={modalRef}>
        <motion.div
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          exit={{ scale: [1, 0], opacity: [1, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FormModalEditTech onSubmit={handleSubmit(editTechnology)}>
            <div className="modal__head">
              <TitleTertiary>Tecnologia Detalhes</TitleTertiary>
              <button type="button" onClick={() => setShowModalEditTech(false)}>
                X
              </button>
            </div>
            <span>Nome do projeto</span>

            <InputDisabled type="text" value={techEdit.title} readOnly />

            <span>Alterar status</span>
            <select {...register("status")} defaultValue={techEdit.status}>
              <option value="">Selecionar status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <small>{errors.status?.message}</small>

            <div className="modal__buttons">
              <ButtonPrimary enabled={isDirty} disabled={!isDirty}>
                Salvar alterações
              </ButtonPrimary>
              <ButtonSecondary
                type="button"
                onClick={() => deleteTechnology(techEdit.id)}
              >
                Excluir
              </ButtonSecondary>
            </div>
          </FormModalEditTech>
        </motion.div>
      </ModalPrimary>
    </ModalContainerStyled>
  );
};
