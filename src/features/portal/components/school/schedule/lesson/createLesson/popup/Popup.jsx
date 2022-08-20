import "./popup.css";

import { useForm } from "react-hook-form";
import Input from "../../../../../../../../components/ui/input/Input";
import Lesson from "../../../../../../../../services/firebase/controllers/classes/lesson";
import { getHourMin } from "../../../../../../utils/date";
import Button from "../../../../../../../../components/ui/button/Button";
import { closePopup } from "../../../../../../context/popupContext/actions";
import { usePortalPopup } from "../../../../../../context/popupContext";
import InstuctorDropdown from "../../instuctorDropdown/InstuctorDropdown";

const SchoolClassCreateLessonPopup = ({
  day,
  dayId,
  startTime,
  endTime,
  classId,
}) => {
  const { register, handleSubmit } = useForm();

  const { dispatch } = usePortalPopup();

  const onSubmit = async ({ subject, instructorId }) => {
    try {
      dispatch(closePopup());
      const lesson = await Lesson.createLesson({
        classId,
        subject,
        instructorId,
        startTime: getHourMin(startTime),
        endTime: getHourMin(endTime),
        weekDay: dayId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="school_schedule_createClass_popup">
      <h1>{`Create Lesson for ${day} between ${getHourMin(
        startTime
      )} and ${getHourMin(endTime)}`}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="school_schedule_createClass_popup_form"
      >
        <Input label="lesson's subject:">
          <input
            placeholder="lesson's subject"
            {...register("subject", { required: true })}
          />
        </Input>

        <Input label="lesson's instuctor:">
          <InstuctorDropdown register={register} />
        </Input>

        <Button className="school_schedule_createClass_popup_submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SchoolClassCreateLessonPopup;
