import "./user.css";

import { roleTags } from "./roleTag";

const ViewUsersUser = ({ id, firstName, lastName, role }) => {
  const roleTag = roleTags[role];

  return (
    <div className="viewUsers_user_container">
      <div className="viewUsers_user_pfpContainer">
        <img
          src="https://i.pinimg.com/564x/8f/1b/09/8f1b09269d8df868039a5f9db169a772.jpg"
          alt="pfp"
        />
      </div>
      <div className="viewUsers_user_info">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="viewUsers_user_info_details">{role}</div>
      </div>
      <div className={`viewUsers_user_roleTag ${roleTag.bg}`}>
        {roleTag.label}
      </div>
    </div>
  );
};

export default ViewUsersUser;
