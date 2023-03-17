import { useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";

import { TechContext } from "../../Contexts/TechContext";

import { ButtonAddTech } from "../../Styles/Buttons";
import { TextPrimary, TitleSecondary } from "../../Styles/Typography";
import { CardTech } from "./CardTech";
import { ListTechStyled } from "./style";

export const ListTechs = () => {
  const { listTechs, setShowModalNewTech, deleteTechnology } =
    useContext(TechContext);

  return (
    <ListTechStyled>
      <div>
        <TitleSecondary>Tecnologias</TitleSecondary>
        <ButtonAddTech
          onClick={(e) => {
            e.stopPropagation();
            setShowModalNewTech(true);
          }}
        >
          +
        </ButtonAddTech>
      </div>

      <ul>
        {listTechs.length === 0 && (
          <TitleSecondary>Nenhuma tecnologia cadastrada :( </TitleSecondary>
        )}
        <AnimatePresence>
          {listTechs.map((el) => (
            <CardTech key={el.id} tech={el}>
              <motion.div
                animate={{ scale: [0, 1], opacity: [0, 1] }}
                exit={{ scale: [1, 0], opacity: [1, 0] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="box__motion"
              >
                <TitleSecondary>{el.title}</TitleSecondary>
                <div>
                  <TextPrimary color="--color-grey-1">{el.status}</TextPrimary>
                  <motion.button
                    whileHover={{ rotate: [0, 15, -15, 15, -15, 0] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTechnology(el.id);
                    }}
                  >
                    <FiTrash2 />
                  </motion.button>
                </div>
              </motion.div>
            </CardTech>
          ))}
        </AnimatePresence>
      </ul>
    </ListTechStyled>
  );
};
