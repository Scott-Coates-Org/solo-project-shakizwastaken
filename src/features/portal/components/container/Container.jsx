import "./container.css";

import Navbar from "../navbar/Navbar";
import UserProfile from "../userProfile/UserProfile";

import { Outlet } from "react-router-dom";

const PortalContainer = () => {
  return (
    <div className="portal">
      <Navbar />

      <UserProfile />
      <div className="portal_container">
        <Outlet />
      </div>
    </div>
  );
};

export default PortalContainer;
