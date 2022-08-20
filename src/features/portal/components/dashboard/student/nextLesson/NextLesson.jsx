import "./nextLesson.css";

import { useEffect, useState } from "react";
import { useCurrentUser } from "../../../../../../hooks/useCurrentUser";
import Lesson from "../../../../../../services/firebase/controllers/classes/lesson";
import { useClassSchedule } from "../../../../context/scheduleContext";
import {
  findClosestDate,
  getHourMin,
  getTimePeriods,
  useGetClosestLesson,
  useTimeLeft,
} from "../../../../utils/date";

const StudentDashboardNextLesson = () => {
  //get time interval
  const {
    state: { timeInterval },
  } = useClassSchedule();

  //get user classId
  const {
    user: {
      student: { classId },
    },
  } = useCurrentUser();

  let {
    lessonData: { subject },
    isLoading,
    timeLeft,
  } = useGetClosestLesson({
    classId,
    timeInterval,
  });

  return (
    <div className="student_dashboard_nextLesson_container">
      <div className="student_dashboard_nextLesson_group">
        <div className="student_dashboard_nextLesson_title">
          Time left until next class:
        </div>
        <div className="student_dashboard_nextLesson_tillNext">{timeLeft}</div>
      </div>
      <div className="student_dashboard_nextLesson_group">
        <div className="student_dashboard_nextLesson_title">next class:</div>
        <div className="student_dashboard_nextLesson_subject">{subject}</div>
      </div>
    </div>
  );
};

export default StudentDashboardNextLesson;
