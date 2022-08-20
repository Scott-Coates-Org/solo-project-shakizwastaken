import "./manager.css";

import PortalPage from "../../../components/ui/portalPage/PortalPage";
import ManagerDashboardDataStats from "../../../components/dashboard/manager/dataStats/DataStats";

const ManagerPortalDashboard = () => {
  return (
    <PortalPage title={"Manager Dashboard"}>
      <ManagerDashboardDataStats />
    </PortalPage>
  );
};

export default ManagerPortalDashboard;
