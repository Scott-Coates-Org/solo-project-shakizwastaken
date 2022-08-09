import { useNavigate } from "react-router-dom";

const NavLink = ({ label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="nav_link" onClick={handleClick}>
      {label}
    </div>
  );
};

export default NavLink;
