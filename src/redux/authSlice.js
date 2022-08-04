import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  email: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { paylod }) => {
      state.user = paylod.displayName;
      state.email = paylod.email;
      state.accessToken = paylod.accessToken;
      console.log(state.user);
    },
    logout: (state) => {
      state.user = "";
      state.email = "";
      state.accessToken = "";
      console.log(state.user);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
