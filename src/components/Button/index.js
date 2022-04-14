import { Container } from "./styles";

const Button = ({ children, classNameProp, ...rest }) => {
  return (
    <Container className={classNameProp} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
