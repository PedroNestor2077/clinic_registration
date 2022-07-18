import styled from 'styled-components'
import { useClinics } from '../../contexts/ClinicsContext'
import { ClinicAddressSearch } from '../../domain/Clinic'

const CardContainer = styled.div`
  background-color: white;
  min-width: 250px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  padding: 10px;
  margin-right: 30px;
  color: #808080d3;
  :hover {
    color: gray;
  }
  cursor: pointer;
`
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const LatLongContainer = styled(ContentContainer)`
  justify-content: flex-end;
`
const Title = styled.h3`
  font-family: sans-serif;
  font-weight: 400;
  color: grey;
`
const Info = styled.p`
  font-size: 15px;
  font-family: sans-serif;
`

interface Props {
  clinic: ClinicAddressSearch
}

const ClinicCard = ({ clinic }: Props) => {
  const { setClinic } = useClinics()
  const {
    Clinic: { Name },
    Logradouro,
    Bairro,
    Latitude,
    Longitude,
  } = clinic

  const handleClick = () => {
    setClinic(clinic)
  }

  return (
    <CardContainer onClick={handleClick}>
      <ContentContainer>
        <Title>{Name}</Title>
      </ContentContainer>
      <ContentContainer>
        <Info>{`${Logradouro} ,${Bairro}`}</Info>
      </ContentContainer>
      <LatLongContainer>
        <Info>{`${Latitude} , ${Longitude}`}</Info>
      </LatLongContainer>
    </CardContainer>
  )
}

export default ClinicCard
