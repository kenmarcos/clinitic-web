import { Container, LogoMobile, LogoDesktop, Buttons } from "./styles";
import logoMobile from "../../assets/Logotipo.png";
import logoDesktop from "../../assets/Logo_Clinitic.png";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <Container>
      <LogoMobile>
        <Link to="/">
          <img src={logoMobile} alt="logoMobile" />
        </Link>
      </LogoMobile>
      <LogoDesktop>
        <Link to="/">
          <img src={logoDesktop} alt="logoDesktop" />
        </Link>
      </LogoDesktop>
      <Buttons>{children}</Buttons>
    </Container>
  );
};
export default Header;
