import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import {
  Container,
  Title,
  Form,
  RadioInputText,
  RadioInputLabel,
} from "./styles";
import Button from "../Button";
import { usePatient } from "../../providers/patient";

const PatientForm = ({
  setIsOpenCreatePatientModal,
  isOpenCreatePatientModal,
}) => {
  const { createPatient } = usePatient();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    birth_date: yup
      .string()
      .required("Campo obrigatório")
      .test("validBirthDate", "Data inválida", (value) => {
        return new Date(value) < new Date();
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    createPatient(data);
    setIsOpenCreatePatientModal(!isOpenCreatePatientModal);
  };

  return (
    <Container>
      <Title>Adicionar Paciente</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input
            label="Nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
        </div>
        <div>
          <Input
            label="CPF"
            name="cpf"
            register={register}
            error={errors.cpf?.message}
          />
        </div>
        <div>
          <RadioInputText>Sexo:</RadioInputText>
          <input
            name="sex"
            id="female"
            type="radio"
            value="F"
            defaultChecked
            {...register("sex")}
          />
          <RadioInputLabel for="female">Feminino</RadioInputLabel>
          <input
            name="sex"
            id="male"
            type="radio"
            value="M"
            {...register("sex")}
          />
          <RadioInputLabel for="male">Masculino</RadioInputLabel>
        </div>
        <div>
          <Input
            label="Data de nascimento"
            name="birth_date"
            type="date"
            register={register}
            error={errors.birth_date?.message}
          />
        </div>
        <Button className="createtBtn" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
