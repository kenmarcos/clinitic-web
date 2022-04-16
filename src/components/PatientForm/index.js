import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { Container, Form } from "./styles";
import Button from "../Button";
import { usePatient } from "../../providers/patient";

const PatientForm = ({ setIsOpenPatientModal, isOpenPatientModal }) => {
  const { createPatient } = usePatient();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    birth_date: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    createPatient(data);
  };

  return (
    <Container>
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
          <Input
            label="Sexo"
            name="sex"
            register={register}
            error={errors.sex?.message}
          />
        </div>
        <div>
          <Input
            label="Aniversário"
            name="birth_date"
            type="date"
            register={register}
            error={errors.birth_date?.message}
          />
        </div>
        <Button
          onClick={() => setIsOpenPatientModal(!isOpenPatientModal)}
          className="createtBtn"
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
