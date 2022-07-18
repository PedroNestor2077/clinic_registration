import SearchBar from '../SearchBar'
import { useFindClinicByAddress } from '../../queries/clinics/findClinics'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useClinics } from '../../contexts/ClinicsContext'

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
  background-color: white;
  z-index: 10000;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media (max-width: 800px) {
    top: 10vh;
  }
`
const Search = () => {
  const { setClinics } = useClinics()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data } = useFindClinicByAddress(searchTerm)

  const handleSearch = (value: any) => {
    setSearchTerm(value)
  }

  useEffect(() => setClinics(data), [data])

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
    </Container>
  )
}

export default Search
