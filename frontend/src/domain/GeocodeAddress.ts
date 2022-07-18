export default interface GeocodeAddress {
  address_components: [
    {
      long_name: string
      short_name: string
      types: string[]
    }
  ]
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
}
