import {Container, Content, LogoContainer, MenuContainer, SpanHeader} from './styles'

function Header() {
    return (
      <Container>
        <Content>
          <LogoContainer>
            <img src="/images/logo.png"/>
            
          </LogoContainer>
          <MenuContainer>
              <SpanHeader>HOME</SpanHeader>
              <SpanHeader>QUEM SOMOS</SpanHeader>
              <SpanHeader>O QUE FAZEMOS</SpanHeader>
              <SpanHeader>CLIENTES</SpanHeader>
              <SpanHeader>CONTATO</SpanHeader>
            </MenuContainer>
        </Content>
      </Container>
    )
  }
  
  export default Header;
  