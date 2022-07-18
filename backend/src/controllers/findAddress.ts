import { GeocodeResult } from '@googlemaps/google-maps-services-js'
import { EndpointMethod } from '../middleware'
import { searchAddress } from '../services/geocodeService'

const findAddress: EndpointMethod<GeocodeResult[]> = async ({ query }) => {
  const { search } = query
  if (!search) return []

  const result = await searchAddress(String(search))
  if (!result) throw new Error('externalServiceError')
  const {
    data: { results },
  } = result
  return results
}

export default findAddress
