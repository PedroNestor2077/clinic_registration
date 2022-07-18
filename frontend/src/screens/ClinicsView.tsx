import ClinicForm from '../components/ClinicForm'
import ClinicsList from '../components/ClinicsList/intex'
import Map from '../components/Map'
import Search from '../components/Search'
import styled from 'styled-components'
const ClinicsView = () => {
  const Container = styled.div`
    position: fixed;
    z-index: 1000000000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 95vw;
    margin: 20px;
    pointer-events: none;
    form {
      pointer-events: all;

      margin-right: 3vw;
    }
    div {
      pointer-events: all;
    }
  `
  return (
    <>
      <Container>
        <ClinicForm />
        <Search />
      </Container>
      <ClinicsList />
      <Map />
    </>
  )
}

export default ClinicsView
