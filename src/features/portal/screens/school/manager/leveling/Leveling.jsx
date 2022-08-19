import "./leveling.css";

import PortalPage from "../../../../components/ui/portalPage/PortalPage";
import CreateLevel from "../../../../components/school/leveling/createLevel/CreateLevel";
import ViewLevels from "../../../../components/school/leveling/viewLevels/ViewLevels";

const SchoolLeveling = () => {
  return (
    <PortalPage
      className="school_leveling_manager_container"
      title="School leveling"
    >
      <CreateLevel />
      <ViewLevels />
    </PortalPage>
  );
};

export default SchoolLeveling;
