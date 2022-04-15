import { Container, Title, Content, Indicator } from "./styles";

const IndicatorCard = ({ children, indicator, icon: Icon, color }) => {
  return (
    <Container>
      <Title>{children}</Title>
      <Content>
        <Indicator>
          {indicator}
          {Icon && <Icon color={color} />}
        </Indicator>
      </Content>
    </Container>
  );
};

export default IndicatorCard;
