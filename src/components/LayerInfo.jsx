import { layersData } from "../data/layers";

export default function LayerInfo({ activeLayer }) {
  return (
    <div className="layer-info">
      <h4>About this layer</h4>
      <p>{layersData[activeLayer].description}</p>
    </div>
  );
}
