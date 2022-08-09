import styles from "./login.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/client";
import { login, logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      dispatch(
        login({
          id: user.user.uid,
          displayName: user.user.displayName,
          email: user.user.email,
          accessToken: user.user.accessToken,
        })
      );

      navigate("/");
    }
  }, [user, isAuth, navigate, dispatch]);

  const loginHandler = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
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
