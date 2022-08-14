import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";

import Button from "../ui/button/Button";

const RoleAuthorization = ({ allowedRoles, children }) => {
  const {
    user: { role },
  } = useCurrentUser();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return allowedRoles.includes(role) ? (
    children
  ) : (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold text-complementary">
        You are not allowed to access this page
      </h1>

      <Button
        onClick={handleGoBack}
        className="bg-complementary text-white rounded-md p-2"
      >
        Dashboard
      </Button>
    </div>
  );
};

export default RoleAuthorization;
