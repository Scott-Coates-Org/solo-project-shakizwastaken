import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../firebase/client";
import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";
import { login, logout } from "../redux/authSlice";

import User from "../firebase/controllers/users/user";

export const useAuth = () => {
  const dispatch = useDispatch();

  //handle login through firebase email/password auth
  const handleLogin = async (userData) => {
    try {
      let user = await User.getUserFromEmail(userData.email);

      if (!user?.role) {
        //user not found in database or user has no role (somehow created without role), logout and delete user from firebase

        console.log("an error has occured, logging out...");

        //reset state
        dispatch(logout());

        //delete user from firebase
        await deleteUser(auth.currentUser);

        if (auth.currentUser) {
          //sign out from firebase
          await signOut(auth);
        }
      }

      dispatch(login(user));

      console.log("login success", user);
    } catch (err) {
      console.log("login failed", err);
    }
  };

  //handle logout from firebase
  const handleLogout = async () => {
    dispatch(logout());
    await signOut(auth.currentUser);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        //user signed in
        //dispatch login
        await handleLogin(userData);
      } else {
        //user signed out
        //dispatch logout
        console.log("logged out");
      }
    });
  }, []);
};

export const useAuthState = () => {
  const authState = useSelector((state) => state.auth);

  return { auth: authState };
};
