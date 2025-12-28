import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import { layersData } from "../data/layers";

export default function HeatLayer({ layer, radius }) {
  const map = useMap();
  const heatRef = useRef(null);

  useEffect(() => {
    if (!layersData[layer] || !layersData[layer].points.length) return;

    // 🔥 Create custom pane ABOVE tiles
    if (!map.getPane("heatPane")) {
      map.createPane("heatPane");
      map.getPane("heatPane").style.zIndex = 450;
    }

    const points = layersData[layer].points;

    if (!heatRef.current) {
      heatRef.current = L.heatLayer(points, {
        radius,
        blur: 20,
        maxZoom: 18,
        pane: "heatPane"
      }).addTo(map);
    } else {
      heatRef.current.setLatLngs(points);
      heatRef.current.setOptions({ radius });
    }

    return () => {
      if (heatRef.current && map.hasLayer(heatRef.current)) {
        map.removeLayer(heatRef.current);
        heatRef.current = null;
      }
    };
  }, [layer, radius, map]);

  return null;
}
