import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 5px;
  font-family: sans-serif;
  font-weight: bold;
  color: #808080d3;
  background-color: transparent;
  cursor: pointer;
  border: none;
  :hover {
    color: gray;
  }
`

interface Props {
  text: string
  onClick?: (e: any) => void
}

const DefaultButton = ({ text, onClick }: Props) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}

export default DefaultButton
