import { motion } from "framer-motion";

import { UserContext } from "../../Contexts/UserContext";

import Logo from "../Logo";

import { ButtonTertiary } from "../../Styles/Buttons";
import HeaderStyled from "./style";
import { Container } from "../Container";
import { useContext } from "react";

export const Header = () => {
  const { loggout } = useContext(UserContext);

  return (
    <motion.div
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <HeaderStyled>
        <Container>
          <Logo />
          <ButtonTertiary onClick={() => loggout()}>Sair</ButtonTertiary>
        </Container>
      </HeaderStyled>
    </motion.div>
  );
};
