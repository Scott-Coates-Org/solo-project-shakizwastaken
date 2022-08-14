import "./createUser.css";

import { useForm } from "react-hook-form";

import UserType from "./userType/UserType";
import UserInfo from "./userInfo/UserInfo";

import Button from "../../../../../../components/ui/button/Button";
import Student from "../../../../../../services/firebase/controllers/users/student";
import Instructor from "../../../../../../services/firebase/controllers/users/instructor";
import { useEffect } from "react";

const SchoolCreateUser = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { role: "STUDENT" },
  });

  const onSubmit = async (data) => {
    console.log("submited");

    try {
      const { role, email, password, classId, subject } = data;

      const userData = { email, password };

      if (!role) return;

      if (role === "STUDENT") {
        const student = await Student.registerStudent(userData, { classId });
      }
      if (role === "INSTRUCTOR") {
        const instructor = await Instructor.registerInstructor(userData, {
          subject,
        });
      }

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form className="school_users_create" onSubmit={handleSubmit(onSubmit)}>
      <UserType register={register} />
      <UserInfo userRole={watch("role")} register={register} />

      <Button type="submit" className="school_users_create_submit">
        Create user
      </Button>
    </form>
  );
};

export default SchoolCreateUser;
