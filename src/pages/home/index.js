import styled from "styled-components";

export default function Home() {
  return (
    <Container id="home">
      <Content>
        <Title>
          <h1>
            WE SKIP THE <br />
            BULLSH*T!
          </h1>
          <p id="who">
            Nós somos <Yellow>A CoolHunters.</Yellow>
          </p>
          <p>
            Uma agência de marketing digital que reuniu jovens talentos para{" "}
            <Yellow>mudar a cena do digital no Brasil.</Yellow>
          </p>
          <p>
            Com braços, mentes e corpos nos Estados Unidos, um dos maiores polos
            de criação de conteúdo do mundo. Assim, asseguramos.
          </p>
          <p>
            Aqui, a gente vai direto ao assunto e entrega o que você realmente
            busca: <Yellow>fazer a sua empresa crescer.</Yellow>
          </p>
        </Title>
      </Content>
      <button>DIRETO AO ASSUNTO</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* background: #0d0d0d; */
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url("https://images3.alphacoders.com/635/thumb-1920-63519.jpg"), #0d0d0d;
  background-position: center;
  background-repeat: inherit;

  > button {
    border: none;
    padding: 10px;
    border-radius: 50px;
    width: 200px;
    background: linear-gradient(to left, #ffba08, #980021 120%);
    color: #fff;
    transition: 0.5s;

    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    background-image: none;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: row;
`;

const Title = styled.header`
  width: 50%;

  > h1 {
    color: #fff;
    font-size: 60px;
    font-family: "Muli", Helvetica, Arial, Lucida, sans-serif;
  }

  > p {
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Yellow = styled.span`
  color: #f7cc00;
`;
