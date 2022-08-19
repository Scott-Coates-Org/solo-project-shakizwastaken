import "./viewUsers.css";

import PortalPage from "../../../../../components/ui/portalPage/PortalPage";
import ViewUsers from "../../../../../components/viewUsers/ViewUsers";
import { UsersProvider } from "../../../../../components/viewUsers/context/viewUsersContext";

const SchoolViewUsersScreen = () => {
  return (
    <PortalPage title="School users" className="school_users_view">
      <UsersProvider>
        <ViewUsers />
      </UsersProvider>
    </PortalPage>
  );
};

export default SchoolViewUsersScreen;
