import LoginForm from "../../components/LoginForm";
import { Container, LoginBox } from "./styles";
import Header from "../../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <LoginForm />
        </LoginBox>
      </Container>
    </>
  );
};

export default Login;
