import "./createLesson.css";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { usePortalPopup } from "../../../../../context/popupContext";
import { openPopup } from "../../../../../context/popupContext/actions";
import SchoolClassCreateLessonPopup from "./popup/Popup";

const SchoolClassScheduleCreateLesson = ({
  startTime,
  endTime,
  dayId,
  day,
}) => {
  const { id: classId } = useParams();

  const { dispatch } = usePortalPopup();

  const handleClick = () => {
    dispatch(
      openPopup(
        <SchoolClassCreateLessonPopup
          day={day}
          dayId={dayId}
          startTime={startTime}
          endTime={endTime}
          classId={classId}
        />
      )
    );
  };

  return (
    <div onClick={handleClick} className="school_class_schedule_createLesson">
      <FontAwesomeIcon
        className="school_class_schedule_createLesson_icon"
        icon={faPlusCircle}
      />
    </div>
  );
};

export default SchoolClassScheduleCreateLesson;
