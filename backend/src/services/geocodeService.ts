import mapsClient from '../config/mapsApi'
import { getMapsApiKey } from '../config/environmentVariables'

const searchAddress = async (address: string) => {
  try {
    const result = await mapsClient.geocode({
      params: {
        address,
        key: getMapsApiKey(),
      },
    })
    return result
  } catch (error) {
    console.error(`Catch error on searchAddress. Error: ${JSON.stringify(error)}`)
    return false
  }
}

export { searchAddress }
