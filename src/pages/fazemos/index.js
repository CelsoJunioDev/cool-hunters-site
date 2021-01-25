import styled from 'styled-components'
import CardFazemos from '../../components/CardFazemos'

function Fazemos() {
  return (
      <Container>

          <h1>O QUE FAZEMOS</h1>
          <Cards>

          <CardFazemos img="/images/img1.svg" text="SOLUÇÕES EM MARKETING DIGITAL"/>
          <CardFazemos img="/images/img2.svg" text="CONTEÚDO ESTRATÉGICO"/>
          <CardFazemos img="/images/img3.svg" text="MÍDIA DIRECIONADA"/>
          <CardFazemos img="/images/img4.svg" text="DESENVOLVIMENTO DE SITES E PEÇAS GRÁFICAS"/>
          </Cards>
      </Container>
  )
}

export default Fazemos;


const Container = styled.div`
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
const Cards = styled.div`
width: 100%; 
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 768px){
    flex-direction: column;
    align-items: center;
}
`

