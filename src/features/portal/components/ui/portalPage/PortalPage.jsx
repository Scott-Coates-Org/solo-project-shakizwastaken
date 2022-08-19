import "./portalPage.css";

import PortalScreenTitle from "../screenTitle/ScreenTitle";
import { PopupProvider } from "../../../context/popupContext";
import PortalPopup from "../popup/Popup";

const PortalPage = ({ children, title, className }) => {
  return (
    <PopupProvider>
      <PortalScreenTitle title={title} />

      <div className={`portal_container_content ${className}`}>
        <PortalPopup />
        {children}
      </div>
    </PopupProvider>
  );
};

export default PortalPage;
