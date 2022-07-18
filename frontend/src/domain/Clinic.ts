export default interface Clinic {
  Clinic: {
    Nome: string
    CNPJ: number
  }
  Address: {
    Logradouro: string
    Bairro?: string
    Numero: number
    Complemento?: string
    Estado: string
    Pais: string
    Latitude: number
    Longitude: number
  }
}

export interface ClinicAddressSearch {
  Clinic: {
    Name: string
    CNPJ: number
  }
  Logradouro: string
  Bairro?: string
  Numero: number
  Complemento?: string
  Estado: string
  Pais: string
  Latitude: number
  Longitude: number
}
