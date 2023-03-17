import styled from "styled-components";

const HeaderStyled = styled.header`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 28px 0;
  }
  & > div > button {
    width: 64px;
  }
`;

export default HeaderStyled;
