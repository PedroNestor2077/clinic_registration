import styled from 'styled-components'
import { ClinicCard } from '../Cards'
import { useClinics } from '../../contexts/ClinicsContext'

const Container = styled.div`
  width: 95vw;
  background-color: transparent;
  position: fixed;
  z-index: 10000;
  bottom: 2vh;
  left: 1vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
  flex-wrap: nowrap;
`

const ClinicsList = () => {
  const { Clinics } = useClinics()
  return (
    <Container>
      {Clinics && Clinics?.map((clinic: any) => <ClinicCard key={clinic.id} clinic={clinic} />)}
    </Container>
  )
}

export default ClinicsList
