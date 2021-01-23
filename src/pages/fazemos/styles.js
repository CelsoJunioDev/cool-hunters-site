import styled from 'styled-components'

export const Container = styled.div`
     display: flex;
background: #000;
flex-direction: column;
align-items: center;
justify-content: flex-start;
min-height: 350px;

h1{
    color: #fff;
}

`
export const Cards = styled.div`
width: 100%; 
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 768px){
    flex-direction: column;
    align-items: center;
}
`

export default styled