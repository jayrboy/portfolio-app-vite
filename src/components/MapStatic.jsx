import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/images/marker-shadow.png'

const MapStatic = () => {
  const position = [13.8207, 100.5164]

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '450px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          King Mongkut&apos;s University of Technology North Bangkok
          <br /> 1518 ถนน ประชาราษฎร์1 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร
          10800
        </Popup>
      </Marker>
    </MapContainer>
  )
}
export default MapStatic
