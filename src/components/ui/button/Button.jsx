import "./button.css";

const Button = ({ children, className, onClick, type }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick && handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
