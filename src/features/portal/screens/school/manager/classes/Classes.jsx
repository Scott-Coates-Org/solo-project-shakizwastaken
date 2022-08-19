import "./classes.css";

import PortalPage from "../../../../components/ui/portalPage/PortalPage";
import SchoolCreateClass from "../../../../components/school/classes/createClass/CreateClass";
import SchoolViewClasses from "../../../../components/school/classes/viewClasses/ViewClasses";

const SchoolClasses = () => {
  return (
    <PortalPage
      className="school_classes_manager_container"
      title="School Classes"
    >
      <SchoolCreateClass />
      <SchoolViewClasses />
    </PortalPage>
  );
};

export default SchoolClasses;
