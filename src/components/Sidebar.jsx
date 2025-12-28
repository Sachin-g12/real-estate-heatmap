import { layersData } from "../data/layers";

export default function Sidebar({ activeLayer, setActiveLayer }) {
  return (
    <aside className="sidebar">
      <h3>Analysis Layers</h3>
      {Object.keys(layersData).map(key => (
        <button
          key={key}
          className={activeLayer === key ? "active" : ""}
          onClick={() => setActiveLayer(key)}
        >
          {layersData[key].label}
        </button>
      ))}
    </aside>
  );
}
