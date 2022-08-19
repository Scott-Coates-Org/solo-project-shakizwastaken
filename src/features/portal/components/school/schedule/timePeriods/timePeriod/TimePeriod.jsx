import { getHourMin } from "../../utils/date";
import "./timePeriod.css";

const SchoolClassScheduleTimePeriod = ({ startTime, endTime }) => {
  return (
    <div className="school_class_schedule_timePeriod">{`${getHourMin(
      startTime
    )}-${getHourMin(endTime)}`}</div>
  );
};

export default SchoolClassScheduleTimePeriod;
