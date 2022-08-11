import LoginContainer from "../components/login/Container";
import LoginProtect from "../components/login/Protect";

const LoginScreen = () => {
  return (
    <LoginProtect>
      <LoginContainer />
    </LoginProtect>
  );
};

export default LoginScreen;
