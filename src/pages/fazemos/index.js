import {Container, Cards} from './styles'
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
