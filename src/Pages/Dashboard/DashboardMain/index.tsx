import { useContext } from "react";

import { AnimatePresence } from "framer-motion";

import { Container } from "../../../Components/Container";
import { ListTechs } from "../../../Components/ListTechs";
import { ModalNewTech } from "../../../Components/ModalNewTech";
import { ModalEditTech } from "../../../Components/ModalEditTech";
import { motion } from "framer-motion";

import Loading from "../../../Components/Loading";

import { TechContext } from "../../../Contexts/TechContext";

import DashboardMainStyled from "./style";

const DashboardMain = () => {
  const { showModalNewTech, showModalEditTech, loading } =
    useContext(TechContext);

  return (
    <motion.div
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <DashboardMainStyled>
        <Container>
          <ListTechs />
          <AnimatePresence>
            {showModalNewTech && <ModalNewTech />}
            {showModalEditTech && <ModalEditTech />}
          </AnimatePresence>
        </Container>
        {loading && <Loading />}
      </DashboardMainStyled>
    </motion.div>
  );
};

export default DashboardMain;
