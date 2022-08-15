import "./createUser.css";

import PortalPage from "../../../../components/ui/portalPage/PortalPage";
import SchoolCreateUser from "../../../../components/school/users/createUser/createUser";
import GoBack from "../../../../../../components/ui/goBack/GoBack";

const SchoolCreateUserScreen = () => {
  return (
    <PortalPage title="School users" className="school_user_create">
      <GoBack to={"/school/users"} />
      <SchoolCreateUser />
    </PortalPage>
  );
};

export default SchoolCreateUserScreen;
