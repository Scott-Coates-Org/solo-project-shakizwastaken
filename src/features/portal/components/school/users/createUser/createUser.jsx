import "./createUser.css";

import { useForm } from "react-hook-form";

import UserType from "./userType/UserType";
import UserInfo from "./userInfo/UserInfo";

import Button from "../../../../../../components/ui/button/Button";

const SchoolCreateUser = () => {
  const { register, watch } = useForm({ defaultValues: { role: "STUDENT" } });

  return (
    <form className="school_users_create">
      <UserType register={register} />
      <UserInfo userRole={watch("role")} register={register} />

      <Button type="submit" className="school_users_create_submit">
        Create user
      </Button>
    </form>
  );
};

export default SchoolCreateUser;
