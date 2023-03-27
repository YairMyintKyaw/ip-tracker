import { memo } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../../node_modules/leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: "./src/assets/pin.png",
  iconSize: [35, 35],
  iconAnchor: [15, 15],
});

const Map = ({ lat, lng, city }) => {
  return (
    <div className="h-2/3 overflow-hidden">
      <MapContainer
        key={Date.now()}
        className="z-10 h-[70vh] md:h-[75vh]"
        style={{ width: "100vw" }}
        center={[lat, lng]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          className=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default memo(Map);
