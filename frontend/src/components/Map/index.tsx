import { LatLngExpression, LatLngTuple } from 'leaflet'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useClinics } from '../../contexts/ClinicsContext'
import MapMarker from './MapMarker'

const MapController = () => {
  const map = useMap()
  const { Clinic } = useClinics()
  const mapCord: LatLngTuple | undefined = Clinic?.Latitude
    ? [Number(Clinic?.Latitude), Number(Clinic?.Longitude)]
    : undefined

  const isLatLngTuple = (value?: any): value is LatLngTuple => value

  useEffect(() => {
    if (isLatLngTuple(mapCord)) map.setView(mapCord, 12)
  }, [mapCord])
  return null
}

const Map = () => {
  const { Clinics } = useClinics()
  const defaultView: LatLngExpression = [-23.5475, -46.63611]

  return (
    <MapContainer center={defaultView} zoom={3} scrollWheelZoom={true} zoomControl={false}>
      <MapController />

      {Clinics &&
        Clinics.map(({ id, Latitude, Longitude, Clinic: { Name } }: any) => (
          <MapMarker key={`Clinic-${id}`} location={[Latitude, Longitude]} name={Name} />
        ))}

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default Map
