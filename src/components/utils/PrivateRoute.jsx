import { useCurrentUser } from "../../hooks/useCurrentUser";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { isAuth, isLoading } = useCurrentUser();
  const location = useLocation();

  return !isLoading ? (
    isAuth ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  ) : (
    <h1 className="text-2xl font-bold">loading ...</h1>
  );
};

export default AuthRoute;
