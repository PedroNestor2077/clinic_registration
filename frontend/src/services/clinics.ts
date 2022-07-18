import backendApi from '../config/BackendApiConfig'
import Clinic from '../domain/Clinic'

const findMany = async () => {
  const { data } = await backendApi.get('/clinics')
  return data.result
}

const findByAddress = async (address: string) => {
  const { data } = await backendApi.get('/clinic', {
    params: {
      address,
    },
  })

  return data.result
}

const createClinic = async (clinic: Clinic) => {
  await backendApi.post('/clinic', clinic)
}

export { findMany, findByAddress, createClinic }
