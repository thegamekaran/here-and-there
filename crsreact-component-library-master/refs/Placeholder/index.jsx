export default function Placeholder({ className }) {
  return <div className={`placeholder ${className ? className : ""}`}></div>;
}
