import "./createLevel.css";

import { useForm } from "react-hook-form";

import Button from "../../../../../../components/ui/button/Button";
import Input from "../../../../../../components/ui/input/Input";
import Level from "../../../../../../services/firebase/controllers/classes/level";
import { useCurrentUser } from "../../../../../../hooks/useCurrentUser";

const CreateLevel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    user: { firstName, lastName },
  } = useCurrentUser();

  const onSubmit = async ({ title, shortVersion, color }) => {
    try {
      //add level to database
      const level = await Level.createLevel({
        title,
        shortVersion,
        color,
        createdBy: `${firstName}_${lastName}`,
        weight: 0,
      });

      //reset values
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="school_createLevel">
      <h1>Add new level</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Title:" err={errors.title}>
          <input
            placeholder="level's title"
            {...register("title", { required: true })}
          />
        </Input>

        <Input label="Shortned version:" err={errors.shortVersion}>
          <input
            placeholder="level's abreviation"
            {...register("shortVersion", { required: true })}
          />
        </Input>

        <Input label="Color:" err={errors.color}>
          <input
            className="color_picker"
            type="color"
            placeholder="level's abreviation"
            {...register("color", { required: true })}
          />
        </Input>

        <Button type="submit" className="school_createLevel_submit">
          Create level
        </Button>
      </form>
    </div>
  );
};

export default CreateLevel;
