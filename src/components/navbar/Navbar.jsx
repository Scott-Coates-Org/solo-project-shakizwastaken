import "./navbar.css";

import NavLink from "./NavLink";
import NavLinks from "./NavLinks";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        {isOpen ? "Logo" : "L"}
      </h1>
      <NavLinks isOpen={isOpen} />
      <NavLink
        isOpen={isOpen}
        label="Settings"
        to="/user/settings"
        icon={<FontAwesomeIcon icon={faGear} />}
      />
    </nav>
  );
};

export default Navbar;
