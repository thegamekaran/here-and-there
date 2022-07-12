export default function Input({ buttonText, onButtonClick, ...props }) {
  return (
    <div className="input-wrap f fa fs">
      <input {...props} />
      {buttonText && (
        <h4 className="ck" onClick={onButtonClick}>
          {buttonText}
        </h4>
      )}
    </div>
  );
}
