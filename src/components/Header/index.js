import { Container, Logo, SidebarLink } from "./styles";

function Header() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <nav>
      <ul>
        <li>
          <SidebarLink to="home"
        smooth={true}
        duration={500}
        exact="true"
        offset={-80} >HOME</SidebarLink>
        </li>
        <li>
          <SidebarLink to="who"
        smooth={true}
        duration={500}
        exact="true"
        offset={-80} >QUEM SOMOS</SidebarLink>
        </li>
        <li>
          <SidebarLink to="what"
        smooth={true}
        duration={500}
        exact="true"
        offset={-80}>O QUE FAZEMOS</SidebarLink>
        </li>
        <li>
          <SidebarLink to="clients"
        smooth={true}
        duration={500}
        exact="true" 
        offset={-80}>CLIENTES</SidebarLink>
        </li>
        <li>
          <SidebarLink to="contact"
        smooth={true}
        duration={500}
        exact="true"
        offset={-80} >CONTATO</SidebarLink>
        </li>
      </ul>
      </nav>
    </Container>
  );
}

export default Header;
