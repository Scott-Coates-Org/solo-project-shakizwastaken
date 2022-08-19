import { createContext, useContext, useReducer } from "react";

const initialState = {
  isLoading: false,
  displayedUsers: [],
  users: [],
  filterByRole: "",
  filterBySearch: "",
};

const UsersContext = createContext();

const actions = {
  setLoading: "SET_LOADING",

  setUsers: "SET_USERS",
  clearUsers: "CLEAR_USERS",

  setDisplayedUsers: "SET_DISPLAYED_USERS",
  clearDisplayedUsers: "CLEAR_DISPLAYED_USERS",

  filterBySearch: "FILTER_BY_SEARCH",
  filterByRole: "FILTER_BY_ROLE",
};

export const setLoading = (state) => {
  return { type: actions.setLoading, payload: state };
};

export const setUsers = (newUsers) => {
  return { type: actions.setUsers, payload: newUsers };
};
export const clearUsers = () => {
  return { type: actions.clearUsers };
};

export const setDisplayedUsers = (newUsers) => {
  return { type: actions.setDisplayedUsers, payload: newUsers };
};
export const resetDisplayedUsers = () => {
  return { type: actions.clearDisplayedUsers };
};

export const filterBySearch = (searchValue) => {
  return { type: actions.filterBySearch, payload: searchValue };
};
export const filterByRole = (roleValue) => {
  return { type: actions.filterByRole, payload: roleValue };
};

export const filterDisplayedUsers = ({
  users,
  filterBySearch,
  filterByRole,
}) => {
  //clone users
  let result = [...users];

  //apply filters
  //filter by role
  if (filterByRole) {
    result = result.filter((user) => user.role === filterByRole);
  }

  //filter by serach
  if (filterBySearch) {
    result = result.filter(
      (user) =>
        user.firstName?.includes(filterBySearch) ||
        user.lastName?.includes(filterBySearch) ||
        user.lastName?.concat(" ", user.firstName).includes(filterBySearch) ||
        user.firstName?.concat(" ", user.lastName).includes(filterBySearch) ||
        user.id.includes(filterBySearch)
    );
  }

  return result;
};

const usersReducer = (state, { payload, type }) => {
  switch (type) {
    //loading state
    case actions.setLoading:
      return { ...state, isLoading: payload };

    //users state
    case actions.setUsers:
      return {
        ...state,
        isLoading: false,
        users: payload,
        displayedUsers: payload,
      };
    case actions.clearUsers:
      return { ...state, isLoading: false, users: [] };

    //displayed users state
    case actions.setDisplayedUsers:
      return {
        ...state,
        isLoading: false,
        displayedUsers: filterDisplayedUsers(state),
      };
    case actions.clearDisplayedUsers:
      return {
        ...state,
        isLoading: false,
        displayedUsers: filterDisplayedUsers(state),
      };

    //set filter values
    case actions.filterBySearch:
      return {
        ...state,
        filterBySearch: payload,

        displayedUsers: filterDisplayedUsers({
          ...state,
          filterBySearch: payload,
        }),
      };
    case actions.filterByRole:
      console.log(payload);
      return {
        ...state,
        filterByRole: payload,

        displayedUsers: filterDisplayedUsers({
          ...state,
          filterByRole: payload,
        }),
      };

    default:
      return state;
  }
};

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const value = { state, dispatch };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
};
