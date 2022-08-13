import "./container.css";

import Navbar from "../../navbar/Navbar";
import ProfileBanner from "../../profileBanner/ProfileBanner";

import { Outlet } from "react-router-dom";

const PortalContainer = () => {
  return (
    <div className="portal">
      <Navbar />

      <ProfileBanner />
      <div className="portal_container">
        <Outlet />
      </div>
    </div>
  );
};

export default PortalContainer;
