import "./days.css";

import { weekDays } from "../utils/date";
import SchoolClassScheduleDay from "./day/Day";

const SchoolClassScheduleDays = () => {
  const renderDays = () =>
    weekDays.map((day, i) => (
      <SchoolClassScheduleDay key={i} dayId={i} day={day} />
    ));

  return (
    <div className="school_classSchedule_container_days">{renderDays()}</div>
  );
};

export default SchoolClassScheduleDays;
