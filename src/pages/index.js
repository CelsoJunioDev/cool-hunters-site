import styled from "styled-components";

import Header from '../components/Header'
import Fazemos from '../pages/fazemos'
import Clientes from '../pages/clientes'
import Link from 'next/link'

function Index() {
  return (
    <>
      <Header />
      <Link href="https://api.whatsapp.com/send?phone=5561983257893">
        <a target="_blank">
          <ImgWpp src="/images/whatsapp.svg" />
        </a>
      </Link>
      <Container>
        <Headerr>
          <Title>
            <h1>WE SKIP THE <br/>BULLSH*T!</h1>
            <span>
              Nós somos <Yellow>A CoolHunters.</Yellow>
              <br/> 
              Uma agência de marketing digital que reuniu jovens talentos para <Yellow>mudar a cena do digital no Brasil.</Yellow> 
              <br/> 
              Com braços, mentes e corpos nos Estados Unidos, um dos maiores polos de criação de conteúdo do mundo. Assim, asseguramos.
              <br/> 
              Aqui, a gente vai direto ao assunto e entrega o que você realmente busca: <Yellow>fazer a sua empresa crescer.</Yellow>
            </span>
          </Title>
          
        </Headerr>
        <button>DIRETO AO ASSUNTO</button>
      </Container>
      <Fazemos />
      <Clientes />
    </>
  )
}

export default Index;

const Container = styled.div`
  display: flex;
  /* background: #0d0d0d; */
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;
  background: linear-gradient(
          rgba(0, 0, 0, 0.8), 
          rgba(0, 0, 0, 0.2)
        ),url("https://images3.alphacoders.com/635/thumb-1920-63519.jpg"),  #0d0d0d ;
background-position: center;
background-repeat: inherit;

  > button {
    border: none;
    padding: 10px;
    border-radius: 50px;
    width: 200px;
    background: linear-gradient( to left, #ffba08, #980021  120%);
    color: #fff;
    transition: 0.5s;

    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  @media (max-width: 768px){
    background-image: none;
  }
`;

const Headerr = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  width: 50%;

  > h1 {
    color: #fff;
    font-size: 60px;
    font-family: "Muli", Helvetica, Arial, Lucida, sans-serif;
  }

  > span {
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Yellow = styled.span`
  color: #f7cc00;
`;

const ImgTitle = styled.div`
  width: 50%;

  > img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImgWpp = styled.img`
  position: fixed;
  width: 50px;
  border-radius: 50px;
  bottom: 25px;
  right: 25px;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

