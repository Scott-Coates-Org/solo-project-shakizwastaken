import React from "react";

import { useAuthState } from "../../hooks/authHooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const LoginProtect = () => {
  const { isAuth } = useAuthState();

  console.log(isAuth);

  const location = useLocation();

  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default LoginProtect;
