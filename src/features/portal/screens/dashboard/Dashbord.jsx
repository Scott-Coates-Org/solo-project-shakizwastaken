import "./dashboard.css";

import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { ROLES } from "../../constants";

import InstructorPortalDashboard from "./instructor/Instructor";
import ManagerPortalDashboard from "./manager/Manager";
import StudentPortalDashboard from "./student/Student";
import CheckRole from "../../../../components/utils/CheckRole";

const PortalDashboard = () => {
  const {
    user: { role },
  } = useCurrentUser();

  //returns user portal
  const getPortal = () => {
    switch (role) {
      case ROLES.student:
        return <StudentPortalDashboard />;

      case ROLES.manager:
        return <ManagerPortalDashboard />;

      case ROLES.instructor:
        return <InstructorPortalDashboard />;

      default:
        return console.log("invalid role");
    }
  };

  return <CheckRole getComponent={getPortal} />;
};

export default PortalDashboard;
