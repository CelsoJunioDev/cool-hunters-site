import React, { useState } from "react";
import styled from "styled-components";

import Link from "next/link";
import Home from "./home";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Fazemos from "./fazemos";
import Clientes from "./clientes";
import Footer from '../components/Footer'

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Link href="https://api.whatsapp.com/send?phone=5561983257893">
        <a target="_blank">
          <ImgWpp src="/images/whatsapp.svg" />
        </a>
      </Link>
      <Home />
      <Fazemos />
      <Clientes />
      <Footer>
        <Footer.Header>
          <span>© 2020 coolhunters DIGITAL | TODOS OS DIREITOS RESERVADOS</span>
        </Footer.Header>
        <Footer.Media>
          <img src="/images/whatsapp.svg"/>
          <img src="/images/whatsapp.svg"/>
          <img src="/images/whatsapp.svg"/>
          <img src="/images/whatsapp.svg"/>
        </Footer.Media>
      </Footer>
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
