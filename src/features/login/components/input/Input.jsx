import "./input.css";

const LoginInput = ({ label, children, err }) => {
  return (
    <div className="login_input">
      <label>{label}</label>
      {children}
      {err?.message && <h1 className="login_input_err">{err.message}</h1>}
    </div>
  );
};

export default LoginInput;
