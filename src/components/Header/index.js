import {Container, Content, Logo, Table} from './styles'

function Header() {
    return (
      <Container>
        <Content>
          <Logo>
            <img src="/images/logo.png"/>
            
          </Logo>
          <Table>
              <tr>
                <th>HOME</th>
                <th>QUEM SOMOS</th>
                <th>O QUE FAZEMOS</th>
                <th>CLIENTES</th>
                <th>CONTATO</th>
              </tr>
            </Table>
        </Content>
      </Container>
    )
  }
  
  export default Header;
  