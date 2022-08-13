import "./users.css";

import PortalPage from "../../../components/ui/portalPage/PortalPage";
import SchoolCreateUser from "../../../components/school/users/createUser/createUser";

const SchoolUsers = () => {
  return (
    <PortalPage title="School users" className="school_users_manager">
      <SchoolCreateUser />
    </PortalPage>
  );
};

export default SchoolUsers;
