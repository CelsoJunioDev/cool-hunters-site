import styled from 'styled-components'

export const Footer = styled.div`
width: 100%;
height: 70px;
background: #2C1448;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
Footer.Header = styled.header`
span{
    color: #fff;
}
`
Footer.Media = styled.div`
>img{
    width: 25px;
    border-radius: 50%;
    margin-left: 5px;
}
`


export default Footer;