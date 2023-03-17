import { motion } from "framer-motion";
import styled from "styled-components";

const FormPrimary = styled(motion.form)`
  max-width: 296px;
  width: 90%;

  background-color: var(--color-grey-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 32px 16px;

  border-radius: 4px;

  & > button {
    width: 100%;
  }

  & > small {
    color: var(--color-fb-negative);
    font-size: 12px;
  }
`;

const FormModalNewTech = styled(FormPrimary)`
  width: 100%;

  border-radius: 4px;

  padding: 0;

  .modal__head {
    width: 100%;

    display: flex;
    justify-content: space-between;

    background-color: var(--color-grey-2);

    padding: 16px;

    border-radius: 4px 4px 0px 0px;
  }

  .modal__head > button {
    border: none;

    background: none;

    font-size: 16px;

    color: var(--color-grey-1);

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }

  & > label {
    width: 90%;
  }

  & > select {
    width: 90%;
    height: 48px;
    position: relative;
    border-radius: 4px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);
    padding-left: 16px;
    font-size: 16px;
    cursor: pointer;
  }

  & > select:focus-visible {
    outline: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

  & > button {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const FormModalEditTech = styled(FormModalNewTech)`
  .modal__buttons {
    width: 90%;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
  }
  .modal__buttons > button {
    width: 60%;
  }
  .modal__buttons > button + button {
    width: 30%;
  }

  & > span {
    width: 90%;
    font-size: 12px;
    align-self: flex-start;
    margin: 0 auto;
    color: var(--color-grey-0);
  }
`;

export { FormPrimary, FormModalNewTech, FormModalEditTech };
