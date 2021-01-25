import { Container, Logo, Table } from "./styles";

function Header() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <nav>
      <ul>
        <li>HOME</li>
        <li>QUEM SOMOS</li>
        <li>O QUE FAZEMOS</li>
        <li>CLIENTES</li>
        <li>CONTATO</li>
      </ul>
      </nav>
    </Container>
  );
}

export default Header;
