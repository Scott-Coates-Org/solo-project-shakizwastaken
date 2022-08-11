import React from "react";

import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const LoginProtect = () => {
  const { isAuth } = useCurrentUser();
  const location = useLocation();

  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default LoginProtect;
