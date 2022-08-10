import styles from "./login.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/client";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, loading, err] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [user, isAuth, navigate, dispatch]);

  const loginHandler = async () => {
    try {
      const user = await signInWithGoogle();
      console.log(user);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <button onClick={loginHandler} className={styles.button}>
        <img src="/images/googlelogo.png" alt="Google Logo" />
        Continue with Google
      </button>

      <button onClick={logoutHandler} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
};

export default Login;
