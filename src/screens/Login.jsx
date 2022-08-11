import LoginContainer from "../features/login/components/Container";
import LoginProtect from "../features/login/components/Protect";

const LoginScreen = () => {
  return (
    <LoginProtect>
      <LoginContainer />
    </LoginProtect>
  );
};

export default LoginScreen;
