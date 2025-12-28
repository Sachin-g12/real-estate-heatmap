import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet.heat";
import { layersData } from "../data/layers";

function HeatLayer({ activeLayer, radius, intensity }) {
  const map = useMap();
  const heatRef = useRef(null);

  useEffect(() => {
    if (!heatRef.current) {
      heatRef.current = L.heatLayer(
        layersData[activeLayer].points,
        { radius, maxZoom: 6 }
      ).addTo(map);
    } else {
      heatRef.current.setLatLngs(layersData[activeLayer].points);
      heatRef.current.setOptions({ radius, maxZoom: 6 });
    }
  }, [activeLayer, radius, intensity, map]);

  return null;
}

export default function MapView({ activeLayer, radius, intensity }) {
  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={12}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatLayer
        activeLayer={activeLayer}
        radius={radius}
        intensity={intensity}
      />
    </MapContainer>
  );
}
