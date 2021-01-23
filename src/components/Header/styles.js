import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
position: fixed;
top: 0;
left: 0;
height: 70px;
background: #2C1448;
z-index: 1000;
`
export const Content = styled.div`
display: flex;
height: 100%;
justify-content: space-between; 
align-items: center;
padding: 0 70px;

`
export const LogoContainer = styled.div`
display: block;
> img{
    width: 200px;
    margin-left: 4px;
    position: relative;
    top: --2px;

}
`
export const LogoIcon = styled.img`
    width: 97px;
    margin-left: 4px;
    position: relative;
    top: --2px;
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;

`
export const SpanHeader = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 15px;
    transition: 0.3s;
    
    :hover{
        cursor: pointer;
        opacity: 0.5;
    }

`