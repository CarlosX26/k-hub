import LogoStyled from "./style";

const Logo = () => (
  <LogoStyled
    animate={{ scale: [0, 1], opacity: [0, 1] }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    K-Hub
  </LogoStyled>
);

export default Logo;
