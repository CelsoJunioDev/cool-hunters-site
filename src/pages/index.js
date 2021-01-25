import styled from "styled-components";

import Home from "./home";
import Header from "../components/Header";
import Fazemos from "./fazemos";
import Clientes from "./clientes";
import Link from "next/link";

function Index() {
  return (
    <>
      <Header />
      <Link href="https://api.whatsapp.com/send?phone=5561983257893">
        <a target="_blank">
          <ImgWpp src="/images/whatsapp.svg" />
        </a>
      </Link>
      <Home />
      <Fazemos />
      <Clientes />
    </>
  );
}

export default Index;

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
