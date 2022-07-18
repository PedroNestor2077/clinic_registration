import { LatLngTuple } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'

interface Props {
  location: LatLngTuple
  name: string
}
const MapMarker = ({ location, name }: Props) => {
  return (
    <Marker position={location}>
      <Popup>{name}</Popup>
    </Marker>
  )
}

export default MapMarker
