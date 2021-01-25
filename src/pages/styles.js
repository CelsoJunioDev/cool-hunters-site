import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #0d0d0d;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;

  > button {
    border: none;
    padding: 10px;
    border-radius: 50px;
    width: 200px;
    background: #341f97;
    color: #fff;
    transition: 0.5s;

    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

export const Headerr = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
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

export const Yellow = styled.span`
  color: #f7cc00;
`;

export const ImgTitle = styled.div`
  width: 50%;

  > img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgWpp = styled.img`
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
