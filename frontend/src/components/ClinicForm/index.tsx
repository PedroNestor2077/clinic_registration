import styled from 'styled-components'
import DefaultButton from '../Buttons'
import Input from '../Inputs'
import SearchBar from '../SearchBar'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useFindAddress } from '../../queries/clinics/findAddress'
import { useClinics } from '../../contexts/ClinicsContext'
import { useClinicMutation } from '../../queries/clinics/createClinic'
import showMessage from '../../messages'

const LatLogContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  input {
    width: 25%;
    justify-content: space-evenly;
    margin-right: 5px;
  }
`
const Container = styled.form`
  width: 15vw;
  min-width: 300px;
  height: 300px;
  background-color: white;
  z-index: 10000;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    position: absolute;
    display: ${(props: any) => (props.hidden ? 'none' : 'flex')};
    top: 30vh;
  }
`
const Title = styled.h3`
  font-size: medium;
  font-family: sans-serif;
  font-weight: 500;
  color: gray;
`
const HideButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  border: none;
  display: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media (max-width: 800px) {
    display: inline;
    pointer-events: all;
    position: fixed;
    bottom: 200px;
    right: 10px;
  }
`
type ClinicForm = {
  Name: string
  CNPJ: number
  Latitude: number
  Longitude: number
}
const isClinicForm = (value?: any): value is ClinicForm =>
  value?.Name && value?.CNPJ && value?.Latitude && value?.Longitude

const ClinicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm()

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [hidden, setHidden] = useState(true)
  const [searchValueControl, setSearchValueControl] = useState<any>()

  const { mutate: createNewClinic } = useClinicMutation()
  const { Address, setAddress } = useClinics()
  const { data: addressData } = useFindAddress(searchTerm)

  const getAddFildOrThrow = (field: string) => {
    if (Address) {
      const { address_components: addressList } = Address
      const data = addressList.find((o: any) => o.types.includes(field))?.short_name
      if (!data) throw new Error()
      return data
    }
  }

  const handleSearch = (value: any, setValue: any) => {
    if (value) {
      setSearchTerm(value)
    } else {
      setSearchTerm('')
    }

    setSearchValueControl(setValue)
  }

  useEffect(() => {
    setAddress(addressData)
  }, [addressData])

  useEffect(() => {
    if (Address) {
      const {
        geometry: {
          location: { lat, lng },
        },
      } = Address
      setValue('Latitude', lat)
      setValue('Longitude', lng)
    }
  }, [Address])

  const handleCreate = (data: any) => {
    try {
      if (isClinicForm(data)) {
        const { Name, CNPJ, Latitude, Longitude } = data

        const numberField = getAddFildOrThrow('street_number')
        const Logradouro = getAddFildOrThrow('route')
        const Bairro = getAddFildOrThrow('sublocality')
        const Cidade = getAddFildOrThrow('administrative_area_level_2')
        const Estado = getAddFildOrThrow('administrative_area_level_1')
        const Pais = getAddFildOrThrow('country')
        const Numero = Number(numberField)

        const clinic = {
          Clinic: {
            Name,
            CNPJ,
          },
          Address: {
            Numero,
            Logradouro,
            Bairro,
            Cidade,
            Estado,
            Pais,
            Latitude,
            Longitude,
          },
        }
        createNewClinic(clinic)
        reset()
        setSearchTerm('')
        if (searchValueControl) searchValueControl('')
      }
    } catch (error) {
      showMessage('Endereço invalido.', true)
    }
  }

  return (
    <>
      <Container onSubmit={handleSubmit((data) => handleCreate(data))} hidden={hidden}>
        <Title>CADASTRO DE CLÍNICA</Title>
        <Input
          {...register('Name', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
          placeholder="Nome da Clínica"
        />
        <Input
          {...register('CNPJ', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
          placeholder="CNPJ"
        />
        <SearchBar onSearch={handleSearch} />
        <LatLogContainer>
          <Input
            {...register('Latitude', {
              valueAsNumber: true,
              validate: (value) => !isNaN(value),
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder="LAT"
            disabled={Address ? true : false}
          />
          <Input
            {...register('Longitude', {
              valueAsNumber: true,
              validate: (value) => !isNaN(value),
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder="LGN"
            disabled={Address ? true : false}
          />
        </LatLogContainer>
        <DefaultButton text="CADASTRAR" />
      </Container>
      <HideButton onClick={() => setHidden(!hidden)}>{hidden ? '+' : '-'}</HideButton>
    </>
  )
}

export default ClinicForm
