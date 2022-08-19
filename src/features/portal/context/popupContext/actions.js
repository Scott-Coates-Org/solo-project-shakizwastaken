import { popupActions } from "./constants";

export const openPopup = (children) => {
  return {
    type: popupActions.popupSet,
    payload: children,
  };
};

export const closePopup = () => {
  return { type: popupActions.closePopup };
};
