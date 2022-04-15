import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { Container, Form, Title, Span } from "./styles";
import { FaUserCircle, FaClinicMedical } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoKey } from "react-icons/go";
import Button from "../Button";
import { useDoctor } from "../../providers/doctor";

const SignUpForm = () => {
  const { registerNewDoctor } = useDoctor();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    first_name: yup.string().required("Campo obrigatório"),
    last_name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    crm_number: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    registerNewDoctor(data, navigate);
  };

  return (
    <Container>
      <Title>Faça seu cadastro!</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input
            label="Nome"
            icon={FaUserCircle}
            name="first_name"
            register={register}
            error={errors.first_name?.message}
          />
        </div>
        <div>
          <Input
            label="Sobrenome"
            icon={FaUserCircle}
            name="last_name"
            register={register}
            error={errors.last_name?.message}
          />
        </div>
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
            label="Número CRM"
            icon={FaClinicMedical}
            name="crm_number"
            register={register}
            error={errors.crm_number?.message}
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
        {/* <ButtonContainer> */}
        <Button className="createtBtn" type="submit">
          Enviar
        </Button>
        {/* </ButtonContainer> */}
      </Form>
      <Span>
        Já possui conta? Faça o <Link to="/login">Login</Link>.
      </Span>
    </Container>
  );
};

export default SignUpForm;
