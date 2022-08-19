import { createContext, useContext, useReducer } from "react";
import { popupActions } from "./constants";

const initialState = {
  isOpen: false,
  children: null,
};

const popupReducer = (state, { type, payload }) => {
  switch (type) {
    case popupActions.closePopup:
      return initialState;

    case popupActions.popupSet:
      return { children: payload, isOpen: true };

    default:
      return state;
  }
};

export const popupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(popupReducer, initialState);

  return (
    <popupContext.Provider value={{ state, dispatch }}>
      {children}
    </popupContext.Provider>
  );
};

export const usePortalPopup = () => {
  return useContext(popupContext);
};
