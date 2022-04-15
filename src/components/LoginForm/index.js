import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { Container, Form, Title, Span } from "./styles";
import { MdEmail } from "react-icons/md";
import { GoKey } from "react-icons/go";
import Button from "../Button";
import { useDoctor } from "../../providers/doctor";

const LoginForm = () => {
  const { login } = useDoctor();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    login(data, navigate);
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input
            label="E-mail"
            icon={MdEmail}
            name="email"
            register={register}
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            label="Senha"
            icon={GoKey}
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
        </div>
        <Button className="createAccountBtn" type="submit">
          Entrar
        </Button>
      </Form>
      <Span>
        Ainda não tem conta? Faça seu <Link to="/">cadastro</Link>!
      </Span>
    </Container>
  );
};

export default LoginForm;
