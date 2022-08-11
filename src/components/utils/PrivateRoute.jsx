import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const AuthRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthRoute;
