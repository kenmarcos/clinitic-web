import { Container, ContainerInput, StyledInput } from "./styles";

const Input = ({ label, icon: Icon, error, register, name, ...rest }) => {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <ContainerInput isInvalid={!!error}>
        {Icon && <Icon size={24} />}
        <StyledInput {...register(name)} {...rest} />
      </ContainerInput>
    </Container>
  );
};

export default Input;
