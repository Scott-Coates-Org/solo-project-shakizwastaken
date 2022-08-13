import "./userType.css";

import Input from "../../../../../../../components/ui/input/Input";

const UserType = ({ register, err }) => {
  return (
    <div className="school_user_create_type">
      <Input label={"User role"} err={err}>
        <select className="school_user_create_type_input" {...register("role")}>
          <option value={"STUDENT"}>Student</option>
          <option value={"INSTRUCTOR"}>Instructor</option>
        </select>
      </Input>
    </div>
  );
};

export default UserType;
