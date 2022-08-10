import { useSelector } from "react-redux";
import "./userProfile.css";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profileNav">
      <h1>Welcome,{user.user}</h1>
    </div>
  );
};

export default UserProfile;
