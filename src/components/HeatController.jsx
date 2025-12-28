export default function HeatController({ radius, setRadius }) {
  return (
    <div className="controller">
      <label>Heat Radius</label>
      <input
        type="range"
        min="10"
        max="70"
        value={radius}
        onChange={e => setRadius(+e.target.value)}
      />
    </div>
  );
}
