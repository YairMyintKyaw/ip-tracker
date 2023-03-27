import { memo } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

const Map = ({ lat, lng }) => {
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
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default memo(Map);
