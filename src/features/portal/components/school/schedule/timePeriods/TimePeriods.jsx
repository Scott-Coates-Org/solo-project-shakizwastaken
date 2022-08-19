import "./timePeriods.css";

import SchoolClassScheduleTimePeriod from "./timePeriod/TimePeriod";
import { useClassSchedule } from "../../../../context/scheduleContext";
import { getTimePeriods } from "../utils/date";

const SchoolClassScheduleTimePeriods = () => {
  const {
    state: { timeInterval },
  } = useClassSchedule();
  const timePeriods = getTimePeriods(timeInterval);

  const renderTimePeriods = () =>
    timePeriods.map((timePeriod, i) => (
      <SchoolClassScheduleTimePeriod key={i} {...timePeriod} />
    ));

  return (
    <div className="school_classSchedule_container_timePeriods">
      {/* empty box */}
      <div></div>
      {/* empty box */}

      {renderTimePeriods()}
    </div>
  );
};

export default SchoolClassScheduleTimePeriods;
