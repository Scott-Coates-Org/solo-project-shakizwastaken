import "./usersFilters.css";

import SchoolUsersByTypeDropdown from "./usersByType/UsersByType";
import SchoolUsersBySearch from "./usersBySearch/UsersBySearch";

const UsersFilters = () => {
  return (
    <div className="school_users_filters">
      <SchoolUsersBySearch />
      <SchoolUsersByTypeDropdown />
    </div>
  );
};

export default UsersFilters;
