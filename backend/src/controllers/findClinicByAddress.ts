import { Model } from 'sequelize/types'
import { EndpointMethod } from '../middleware'
import { findByAddress } from '../services/findClinic'

const findClinicByAddress: EndpointMethod<Model<any, any>[]> = async ({ query }) => {
  const { address } = query
  if (!address) return []

  const result = await findByAddress(String(address))
  if (!result) throw new Error('externalServiceError')

  return result
}

export default findClinicByAddress
