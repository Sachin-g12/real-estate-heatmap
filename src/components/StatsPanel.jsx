import { layersData } from "../data/layers";

export default function StatsPanel({ activeLayer }) {
  return (
    <div className="stats">
      <strong>{layersData[activeLayer].stats}</strong>
    </div>
  );
}
