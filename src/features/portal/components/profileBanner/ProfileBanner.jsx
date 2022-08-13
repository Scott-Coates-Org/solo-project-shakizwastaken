import "./profileBanner.css";

import { useCurrentUser } from "../../../../hooks/useCurrentUser";

const ProfileBanner = () => {
  const {
    user: { firstName, lastName },
  } = useCurrentUser();

  return (
    <div className="profileNav">
      <h1>
        <span className="text-complementary">Welcome back, </span>
        {firstName} {lastName}
      </h1>
      <div className="profileNav_pfp"></div>
    </div>
  );
};

export default ProfileBanner;
