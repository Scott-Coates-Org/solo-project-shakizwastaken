import "./navbar.css";

import NavLink from "./NavLink";
import NavLinks from "./NavLinks";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../../../../redux/authSlice";
import { auth } from "../../../../services/firebase/client";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  const navigate = useNavigate();

  //logout handling
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        {isOpen ? "Logo" : "L"}
      </h1>

      <NavLinks isOpen={isOpen} />

      <div>
        <NavLink
          isOpen={isOpen}
          label="Settings"
          to="/user/settings"
          icon={<FontAwesomeIcon icon={faGear} />}
        />

        <div className="nav_logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faDoorOpen} />
          <h1>Logout</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
