import { useNavigate } from "react-router-dom";

const NavLink = ({ label, icon, to, isOpen }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="nav_link" onClick={handleClick}>
      {icon}
      {isOpen && label}
    </div>
  );
};

export default NavLink;
