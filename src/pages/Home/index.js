import {
  Container,
  Intro,
  Title,
  Subtitle,
  Description,
  Content,
  Feature,
  Text,
  FeatDescription,
  Illustration,
  Banner,
  StyledModal,
} from "./styles";
import Button from "../../components/Button";
import featOne from "../../assets/marginalia-coming-soon.png";
import featTwo from "../../assets/marginalia-online-shopping.png";
import featThree from "../../assets/marginalia-order-complete.png";
import banner from "../../assets/Banner_Clinitic.png";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header>
        <Button onClick={() => navigate("/login")} className="loginBtn">
          Login
        </Button>
        <Button onClick={toggleModal} className="headerMainBtn">
          Cadastrar
        </Button>
      </Header>
      <Container>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <SignUpForm />
        </StyledModal>
        <Intro>
          <Title>Clinitic é o seu centro de agendamento</Title>
          <Description>
            Clinitic automatiza o sistema de agendamento da sua clínica,
            simplificando o processo para todos os envolvidos.
          </Description>
          <Button onClick={toggleModal} className="tryNowBtn">
            Experimente já!
          </Button>
        </Intro>
        <Content>
          <Feature>
            <Text>
              <Subtitle>Clareza em sua clínica</Subtitle>
              <FeatDescription>
                Clinitic ajuda a tornar sua clínica clara, organizada e
                profissional. Com a função de agendamento, você terá sempre uma
                visão geral de sua agenda e saberá quanto tempo você precisa
                para estar com um paciente.
              </FeatDescription>
            </Text>
            <Illustration>
              <img src={featOne} alt="feature-card" />
            </Illustration>
          </Feature>
          <Feature reverse>
            <Illustration>
              <img src={featTwo} alt="feature-card" />
            </Illustration>
            <Text>
              <Subtitle>Administre melhor o seu tempo</Subtitle>
              <FeatDescription>
                Com a Clinitic, é mais fácil administrar seu atendimento mensal
                e semanal. Ela é uma ótima ferramenta para melhorar a
                administração de sua clínica.
              </FeatDescription>
            </Text>
          </Feature>
          <Feature>
            <Text>
              <Subtitle>Simplifique sua clínica</Subtitle>
              <FeatDescription>
                Clinitic é uma aplicação de saúde digital que simplifica suas
                operações diárias, gerenciando a administração de sua clínica e
                permitindo que você veja todas as consultas do dia.
              </FeatDescription>
            </Text>
            <Illustration>
              <img src={featThree} alt="feature-card" />
            </Illustration>
          </Feature>
        </Content>
        <Banner>
          <img src={banner} alt="banner-logo" />
        </Banner>
      </Container>
    </>
  );
};

export default Home;
