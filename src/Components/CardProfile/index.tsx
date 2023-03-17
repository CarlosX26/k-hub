import { useContext } from "react";

import { motion } from "framer-motion";

import { Container } from "../Container";
import { UserContext } from "../../Contexts/UserContext";

import { TextPrimary, TitlePrimary } from "../../Styles/Typography";
import { CardProfileStyled } from "./style";

export const CardProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <motion.div
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <CardProfileStyled>
        <Container>
          <TitlePrimary>Olá, {user?.name}</TitlePrimary>
          <TextPrimary weight={700} color="--color-grey-1">
            {user?.course_module}
          </TextPrimary>
        </Container>
      </CardProfileStyled>
    </motion.div>
  );
};
