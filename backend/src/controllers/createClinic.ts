import { ClinicCreationResult } from '../domain/Clinic'
import { EndpointMethod } from '../middleware'
import createOnDb from '../services/createClinic'

const isValidClinic = (value?: any) =>
  value &&
  value?.Clinic &&
  value?.Clinic?.Name &&
  value?.Clinic?.CNPJ &&
  value?.Address?.Cidade &&
  value?.Address?.Estado &&
  value?.Address?.Pais &&
  value?.Address?.Latitude &&
  value?.Address?.Longitude

const createClinic: EndpointMethod<ClinicCreationResult> = async ({ body: clinicData }) => {
  if (!isValidClinic(clinicData)) throw new Error('invalidPayload')

  const isCreated = await createOnDb(clinicData)
  if (!isCreated) throw new Error('externalServiceError')

  return { isCreated }
}

export default createClinic
