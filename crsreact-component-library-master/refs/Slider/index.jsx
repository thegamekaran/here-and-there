export default function Slider({ id, className, ...props }) {
  return (
      <input
        type="range"
        className={`slider-input ${className || ""}`}
        name={"slider"}
        id={id || ""}
        {...props}
      />
  );
}
