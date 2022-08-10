import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    id: "",
    user: "",
    email: "",
    accessToken: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload: { id, user, email, accessToken } }) => {
      return { ...state, user: { id, user, email, accessToken } };
    },

    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
