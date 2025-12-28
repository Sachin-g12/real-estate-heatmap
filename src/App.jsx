import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";
import StatsPanel from "./components/StatsPanel";
import LayerInfo from "./components/LayerInfo";
import HeatController from "./components/HeatController";
import "./styles.css";

export default function App() {
  // 🔹 EXISTING STATES
  const [activeLayer, setActiveLayer] = useState("price");
  const [radius, setRadius] = useState(30);
  const [intensity] = useState(1);

  // 🔹 DARK MODE STATE (THIS WAS MISSING)
  const [dark, setDark] = useState(false);

  return (
    // 🔥 ROOT WRAPPER FOR DARK MODE
    <div className={dark ? "dark" : ""}>
      {/* 🔹 PASS DARK MODE PROPS */}
      <Header dark={dark} setDark={setDark} />

      <div className="layout">
        <Sidebar
          activeLayer={activeLayer}
          setActiveLayer={setActiveLayer}
        />

        <div className="map-area">
          <StatsPanel activeLayer={activeLayer} />

          <MapView
            activeLayer={activeLayer}
            radius={radius}
            intensity={intensity}
          />

          <HeatController
            radius={radius}
            setRadius={setRadius}
          />

          <LayerInfo activeLayer={activeLayer} />
        </div>
      </div>
    </div>
  );
}
