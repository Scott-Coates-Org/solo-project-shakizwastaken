import "./popup.css";

import { usePortalPopup } from "../../../context/popupContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { closePopup } from "../../../context/popupContext/actions";

const PortalPopup = () => {
  const {
    state: { isOpen, children },
    dispatch,
  } = usePortalPopup();

  const handleClose = () => {
    dispatch(closePopup());
  };

  return isOpen ? (
    <div className="portal_popup">
      <div className="portal_popup_container">
        <div className="portal_popup_header">
          <FontAwesomeIcon
            className="portal_popup_close"
            icon={faCircleXmark}
            onClick={handleClose}
          />
        </div>
        <div className="portal_popup_content">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PortalPopup;
