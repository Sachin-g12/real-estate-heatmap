export default function Header({ dark, setDark }) {
  return (
    <header className="header">
      <h2>🏘 Real Estate Heatmap</h2>
      <button onClick={() => setDark(d => !d)}>
        {dark ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
