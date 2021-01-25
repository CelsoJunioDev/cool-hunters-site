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

  ul {
    display: flex;
    justify-content: center;
    a{
      color: #fff;
        text-decoration: none;

        :visited{
          color: #fff;
        }
      }
  }

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
`;

export const SidebarLink = styled(LinkScroll)`
  
  

`

export const Logo = styled.div`
  display: block;
  margin-left: 70px;
  > img {
    width: 200px;
    margin-left: 4px;
    position: relative;
    top: --2px;
  }
`;

