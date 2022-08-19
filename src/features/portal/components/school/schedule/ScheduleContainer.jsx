import "./schedule.css";

import SchoolClassScheduleDays from "./days/Days";
import SchoolClassScheduleTimePeriods from "./timePeriods/TimePeriods";

const SchoolClassScheduleContainer = () => {
  return (
    <div className="school_classSchedule_container">
      <SchoolClassScheduleTimePeriods />
      <SchoolClassScheduleDays />
    </div>
  );
};

export default SchoolClassScheduleContainer;
