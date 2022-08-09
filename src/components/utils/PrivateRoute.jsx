import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/login");
  }, [isAuth, navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
