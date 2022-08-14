import "./userInfo.css";

import Input from "../../../../../../../components/ui/input/Input";
import SchoolClassesDropdown from "./classDropdown/ClassesDropdown";

const UserInfo = ({ userRole, register }) => {
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const roles = {
    STUDENT: {
      roleTitle: "Student",
      inputs: [
        {
          label: "First name",
          input: (
            <input
              placeholder="user's first name"
              {...register("firstName", { required: true })}
            />
          ),
        },
        {
          label: "Last name",
          input: (
            <input
              placeholder="user's last name"
              {...register("lastName", { required: true })}
            />
          ),
        },
        {
          label: "Email",
          input: (
            <input
              placeholder="user's email"
              {...register("email", { required: true })}
            />
          ),
        },
        {
          label: "Password",
          input: (
            <input
              type="password"
              placeholder="user's password"
              {...register("password", {
                required: true,
                validate: validatePassword,
              })}
            />
          ),
        },
        {
          label: "Student's class",
          input: <SchoolClassesDropdown register={register} />,
        },
      ],
    },
    INSTRUCTOR: {
      roleTitle: "Instructor",
      inputs: [
        {
          label: "First name",
          input: (
            <input
              placeholder="user's first name"
              {...register("firstName", { required: true })}
            />
          ),
        },
        {
          label: "Last name",
          input: (
            <input
              placeholder="user's last name"
              {...register("lastName", { required: true })}
            />
          ),
        },
        {
          label: "Email",
          input: (
            <input
              placeholder="user's email"
              {...register("email", { required: true })}
            />
          ),
        },
        {
          label: "Password",
          input: (
            <input
              placeholder="user's password"
              {...register("password", { required: true })}
            />
          ),
        },
        {
          label: "Subject",
          input: (
            <input
              placeholder="instructor's subject"
              {...register("subject")}
            />
          ),
        },
      ],
    },
  };

  const { roleTitle, inputs } = roles[userRole];

  const renderInputs = () =>
    inputs.map(({ label, input }, i) => (
      <Input key={i} label={label}>
        {input}
      </Input>
    ));

  return (
    <div className="school_users_create_userInfo">
      <h1>{`${roleTitle} info`}</h1>
      <div className="school_users_create_userInfo_inputs">
        {renderInputs()}
      </div>
    </div>
  );
};

export default UserInfo;
