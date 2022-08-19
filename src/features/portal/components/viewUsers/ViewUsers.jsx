import "./viewUsers.css";

import { useGetData } from "../../../../services/firebase/hooks/useGetData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import User from "../../../../services/firebase/controllers/users/user";
import Button from "../../../../components/ui/button/Button";
import UsersFilters from "./usersFilters/UsersFilters";
import ViewUsersUser from "./user/User";
import {
  setLoading,
  setUsers,
  UsersProvider,
  useUsersContext,
} from "./context/viewUsersContext";

const ViewUsers = () => {
  const navigate = useNavigate();

  //get context
  const {
    state: { displayedUsers },
    dispatch,
  } = useUsersContext();

  //get users data
  const [users, isLoading] = useGetData({
    controller: User,
  });

  //set users data to context
  useEffect(() => {
    if (isLoading) return dispatch(setLoading(true));
    dispatch(setUsers(users));
  }, [users, isLoading, dispatch]);

  //render users
  const renderUsers = () =>
    displayedUsers.map((user) => {
      return <ViewUsersUser key={user.id} {...user} />;
    });

  return (
    <div className="viewUsers_container">
      <Button
        onClick={() => {
          navigate("/school/user/create");
        }}
        className="btn_viewUsers_users"
      >
        Add User
      </Button>

      <UsersFilters />

      <h1>Users List</h1>

      <div className="viewUsers_users">{renderUsers()}</div>
    </div>
  );
};

export default ViewUsers;
