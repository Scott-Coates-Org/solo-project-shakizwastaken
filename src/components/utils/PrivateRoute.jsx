import { useCurrentUser } from "../../hooks/useCurrentUser";

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthRoute = () => {
  const { isAuth, isLoading } = useCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) return console.log("logged in");
  }, [isAuth, isLoading, navigate]);

  return isLoading ? (
    <h1 className="text-2xl font-bold">loading ...</h1>
  ) : isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthRoute;
