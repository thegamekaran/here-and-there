export default function Switch({ on, handleChange, color }) {
  return (
    <div
      className={`switch ck f fa ${on ? "on" : ""}`}
      style={{ borderColor: color }}
      onClick={handleChange}
    >
      <div className={`toggle br `} style={{ background: color }}></div>
    </div>
  );
}
