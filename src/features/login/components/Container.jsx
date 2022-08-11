import "./login.css";

import LoginForm from "./Form";
import LoginForgot from "./Forgot";

const LoginContainer = () => {
  return (
    <div className="login_container">
      <h1 className="login_title">Login</h1>
      <LoginForm />
      <LoginForgot />
    </div>
  );
};

export default LoginContainer;
