import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  background: #2c1448;
  z-index: 1000;

  display: flex;
  justify-content: space-around;
  align-items: center;

  
`;

export const NavMenu = styled.ul`
display: flex;
    justify-content: center;
    li {
    margin: 15px;
    list-style: none;
    
    font-size: 14px;
    font-weight: bold;
    :hover {
      cursor: pointer;
      opacity: 0.5;

      
    }
  }
  @media (max-width: 768px){
    display: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const SidebarLink = styled(LinkScroll)`
  color: #fff;
        text-decoration: none;
  

`

export const Logo = styled.div`
  > img {
    width: 200px;
    margin-left: 4px;
    position: relative;
    top: --2px;
  }
`;

