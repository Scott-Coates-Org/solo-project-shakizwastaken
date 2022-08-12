import "./input.css";

const Input = ({ label, children, err }) => {
  return (
    <div className="input_container">
      <label>{label}</label>
      {children}
      {err?.message && <h1 className="input_err">{err.message}</h1>}
    </div>
  );
};

export default Input;
