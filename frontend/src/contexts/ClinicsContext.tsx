import { useState, useContext, createContext, ReactNode, Dispatch } from 'react'
import Clinic, { ClinicAddressSearch } from '../domain/Clinic'
import GeocodeAddress from '../domain/GeocodeAddress'

export const ClinicsContext = createContext({})

interface Props {
  children: ReactNode
}
interface Context {
  Clinics: Clinic[] | undefined
  setClinics: Dispatch<React.SetStateAction<Clinic[] | undefined>>
  Clinic: ClinicAddressSearch | undefined
  setClinic: Dispatch<React.SetStateAction<ClinicAddressSearch | undefined>>
  Address: GeocodeAddress | undefined
  setAddress: Dispatch<React.SetStateAction<GeocodeAddress | undefined>>
}
const ClinicsProvider = ({ children }: Props) => {
  const [Clinics, setClinics] = useState<Clinic[] | undefined>(undefined)
  const [Clinic, setClinic] = useState<Clinic | undefined>(undefined)
  const [Address, setAddress] = useState<GeocodeAddress | undefined>(undefined)

  return (
    <ClinicsContext.Provider value={{ Clinics, setClinics, Clinic, setClinic, Address, setAddress }}>
      {children}
    </ClinicsContext.Provider>
  )
}

export const useClinics = () => {
  const context: Context = useContext<any>(ClinicsContext)
  return context
}
export default ClinicsProvider
