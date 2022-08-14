import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: { ...payload },
      };
    },

    //logout
    logout: () => initialState,

    //setLoading
    setLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;
