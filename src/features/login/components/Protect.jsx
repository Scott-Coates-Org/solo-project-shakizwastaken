import React from "react";

import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Navigate, useLocation } from "react-router-dom";

const LoginProtect = ({ children }) => {
  const { isAuth } = useCurrentUser();
  const location = useLocation();

  return !isAuth ? (
    children
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default LoginProtect;
