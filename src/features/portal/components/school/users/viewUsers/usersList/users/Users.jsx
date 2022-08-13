import User from "../../../../../../../services/firebase/controllers/users/user";
import { useGetData } from "../../../../../../../services/firebase/hooks/useGetData";
import "./users.css";

const SchoolUsers = () => {
  const [users, isLoading, getData] = useGetData({
    controller: User,
    queryOptions: {},
  });

  const renderUsers = () => users?.map();

  return <div className="school_users_users">{renderUsers()}</div>;
};

export default SchoolUsers;
