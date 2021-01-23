import Header from "../Header";
import Fazemos from "../../pages/fazemos";
import Clientes from "../../pages/clientes";
import Link from "next/link";
import { Container, ImgTitle, Title,Yellow, Headerr, ImgWpp } from "./styles";

export default function Layout() {
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
          <ImgTitle>
            <img src="/images/imgTitle.svg" />
          </ImgTitle>
        </Headerr>
        <button>DIRETO AO ASSUNTO</button>
      </Container>
      <Fazemos />
      <Clientes />
    </>
  );
}
