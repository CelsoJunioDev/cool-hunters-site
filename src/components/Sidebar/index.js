import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper } from './styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="who" onClick={toggle}>Quem somos</SidebarLink>
          <SidebarLink to="what" onClick={toggle}>O que fazemos</SidebarLink>
          <SidebarLink to="clients" onClick={toggle}>Clientes</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contato</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
