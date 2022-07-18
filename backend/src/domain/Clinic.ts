export interface ClinicCreationResult {
  isCreated: boolean
}

export default interface Clinic {
  Clinic: {
    Name: string
    CNPJ: string
  }
  Address: {
    Logradouro: string
    Numero: number
    Bairro: string
    Complemento: string
    Cidade: string
    Estado: string
    Pais: string
    Latitude: number
    Longitude: number
  }
}
