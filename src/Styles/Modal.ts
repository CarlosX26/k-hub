import styled from "styled-components";

const ModalContainerStyled = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalPrimary = styled.div`
  max-width: 296px;
  width: 90%;
`;

export { ModalContainerStyled, ModalPrimary };
