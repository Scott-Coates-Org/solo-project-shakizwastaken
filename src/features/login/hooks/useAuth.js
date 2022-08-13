import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { login, logout, setLoading } from "../../../redux/authSlice";

import { auth } from "../../../services/firebase/client";
import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";

import User from "../../../services/firebase/controllers/users/user";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

export const useAuth = () => {
  const dispatch = useDispatch();

  //handle login through firebase email/password auth
  const handleLogin = async (userData) => {
    try {
      dispatch(setLoading(true));
      let user = await User.getUserFromEmail(userData.email);

      if (!user?.role) {
        //user not found in database or user has no role (somehow created without role), logout and delete user from firebase

        console.log("an error has occured, logging out...");

        //set loading false
        dispatch(setLoading(false));

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
    } catch (err) {
      dispatch(setLoading(false));
      console.log("login failed", err);
    }
  };

  const {
    user: { id },
  } = useCurrentUser();

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

    if (id) {
      User.onUserUpdate(id, () => {
        handleLogin(auth.currentUser);
      });
    }
  }, []);
};
