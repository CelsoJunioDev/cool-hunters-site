import { Container, Logo, SidebarLink, NavMenu, MobileIcon } from "./styles";
import { FaBars } from "react-icons/fa";

function Header({ toggle }) {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <nav>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <li>
            <SidebarLink
              to="home"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              HOME
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              to="who"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              QUEM SOMOS
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              to="what"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              O QUE FAZEMOS
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              to="clients"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              CLIENTES
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              to="contact"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              CONTATO
            </SidebarLink>
          </li>
        </NavMenu>
      </nav>
    </Container>
  );
}

export default Header;
