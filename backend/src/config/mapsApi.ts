import { Client } from '@googlemaps/google-maps-services-js'
import { getMapsApiKey } from './environmentVariables'

const mapsClient = new Client({
  config: {
    params: {
      key: getMapsApiKey(),
    },
  },
})

export default mapsClient
