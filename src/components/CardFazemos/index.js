import { Container, CardTop, CardBottom } from "./styles";

function CardFazemos({img, text}) {
  return (
    <Container>
      <CardTop>
          <img src={img} width="55"/>
      </CardTop>
      <CardBottom>{text}</CardBottom>
    </Container>
  );
}

export default CardFazemos;
