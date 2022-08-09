import "./navbar.css";

import NavLink from "./NavLink";
import NavLinks from "./NavLinks";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Logo
      </h1>

      <NavLinks />

      <NavLink label="Settings" to="/settings" />
    </nav>
  );
};

export default Navbar;
