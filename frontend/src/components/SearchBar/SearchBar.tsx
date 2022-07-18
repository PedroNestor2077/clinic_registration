import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import Button from '../Buttons'
import Input from '../Inputs'

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom: 1.5px solid #808080d3;
`
const CustomInput = styled(Input)`
  border: none;
`
interface Props {
  onSearch: (value: string, setValue?: Dispatch<SetStateAction<string>>) => void
}
const SearchBar = ({ onSearch }: Props) => {
  const [value, setValue] = useState<string>('')

  const handleChange = ({ target: { value } }: any) => {
    setValue(value)
  }

  const handleSubmit = () => {
    onSearch(value, setValue)
  }

  return (
    <SearchBarContainer>
      <CustomInput placeholder="ENDEREÇO" value={value} onChange={handleChange} />
      <Button text="BUSCAR" onClick={handleSubmit} />
    </SearchBarContainer>
  )
}

export default SearchBar
