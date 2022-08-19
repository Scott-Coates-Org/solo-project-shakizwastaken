import { actions } from "./constants";

export const setClass = (id) => {
  return { type: actions.setClass, payload: id };
};

export const setLoading = (boolean) => {
  return { type: actions.setLoading, payload: boolean };
};
