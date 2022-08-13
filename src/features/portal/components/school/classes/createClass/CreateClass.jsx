import "./createClass.css";

import { useForm } from "react-hook-form";
import { useCurrentUser } from "../../../../../../hooks/useCurrentUser";

import Class from "../../../../../../services/firebase/controllers/classes/class";
import SchoolCreateInstance from "../../../createInstance/CreateInstance";
import SchoolLeveLDropdown from "./levelDropdown/LeveLDropdown";
import Input from "../../../../../../components/ui/input/Input";

const SchoolCreateClass = () => {
  const { register, handleSubmit, reset } = useForm();

  const {
    user: { firstName, lastName },
  } = useCurrentUser();

  const onSubmit = async ({ title, levelId }) => {
    try {
      //add level to database
      const classData = await Class.createClass({
        title,
        levelId,
        createdBy: `${firstName}_${lastName}`,
      });

      //reset values
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SchoolCreateInstance
      className={"school_create_class"}
      handleSubmit={handleSubmit(onSubmit)}
      lowerCaseName={"class"}
    >
      <Input label="Title">
        <input
          placeholder="class title"
          {...register("classTitle", { required: true })}
        />
      </Input>
      <SchoolLeveLDropdown register={register} />
    </SchoolCreateInstance>
  );
};

export default SchoolCreateClass;
