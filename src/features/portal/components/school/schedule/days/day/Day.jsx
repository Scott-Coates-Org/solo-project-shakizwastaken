import "./day.css";

import SchoolScheduleLesson from "../../lesson/Lesson";
import { useClassSchedule } from "../../../../../context/scheduleContext";
import { getTimePeriods } from "../../../../../utils/date";

const SchoolClassScheduleDay = ({ dayId, day }) => {
  const {
    state: { timeInterval },
  } = useClassSchedule();
  const timePeriods = getTimePeriods(timeInterval);

  const renderContent = () =>
    timePeriods.map((timePeriod, i) => (
      <SchoolScheduleLesson key={i} dayId={dayId} {...timePeriod} day={day} />
    ));

  return (
    <div className="school_class_schedule_day">
      <div className="school_class_schedule_dayTitle">{day}</div>
      {renderContent()}
    </div>
  );
};

export default SchoolClassScheduleDay;
