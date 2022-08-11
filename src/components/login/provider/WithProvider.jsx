import "./withProvider.css";

/* not used right now, perhaps for later */

const LoginWithProvider = ({
  icon,
  providerName,
  action,
  onClick,
  className,
  handleClick,
}) => {
  return (
    <div className="login_provider btn" onClick={onClick}>
      <div className="login_provider_icon">{icon}</div>
      <h1>{`${action} with ${providerName}`}</h1>
    </div>
  );
};

export default LoginWithProvider;
