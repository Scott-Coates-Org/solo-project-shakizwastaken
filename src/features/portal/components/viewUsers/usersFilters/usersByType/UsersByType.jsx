import "./usersByType.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { filterByRole, useUsersContext } from "../../context/viewUsersContext";

const SchoolUsersByTypeDropdown = () => {
  const [value, setValue] = useState("");

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  const { dispatch } = useUsersContext();

  const types = [
    {
      display: "Student",
      value: "STUDENT",
    },
    {
      display: "Instructor",
      value: "INSTRUCTOR",
    },
  ];

  const renderTypes = () => {
    const handleSetValue = (role) => () => {
      setValue(role);
      dispatch(filterByRole(role.value));
    };

    return types.map(({ display, value }) => (
      <div
        className="school_users_byTypeDropdown_value"
        onClick={handleSetValue({ display, value })}
      >
        {display}
      </div>
    ));
  };

  const handleClear = () => {
    setValue("");
    dispatch(filterByRole(""));
  };

  return (
    <div onClick={toggleOpen} className="school_users_byTypeDropdown">
      <div className="school_users_byTypeDropdown_currentValue">
        {value ? (
          <>
            {value.display}{" "}
            <FontAwesomeIcon onClick={handleClear} icon={faXmarkCircle} />
          </>
        ) : (
          "Filter by roles"
        )}
      </div>
      {isOpen && (
        <div className="school_users_byTypeDropdown_values">
          {renderTypes()}
        </div>
      )}
    </div>
  );
};

export default SchoolUsersByTypeDropdown;
