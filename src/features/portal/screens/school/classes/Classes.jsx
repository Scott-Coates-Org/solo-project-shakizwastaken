import "./classes.css";

import PortalPage from "../../../components/ui/portalPage/PortalPage";
import SchoolCreateClass from "../../../components/school/classes/createClass/CreateClass";

const SchoolClasses = () => {
  return (
    <PortalPage
      className="school_classes_manager_container"
      title="School Classes"
    >
      <SchoolCreateClass />
    </PortalPage>
  );
};

export default SchoolClasses;
