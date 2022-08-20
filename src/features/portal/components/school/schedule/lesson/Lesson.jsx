import "./lesson.css";

import { useState } from "react";
import Loading from "../../../../../../components/utils/loading/Loading";
import Lesson from "../../../../../../services/firebase/controllers/classes/lesson";
import { useEffect } from "react";
import { getHourMin } from "../../../../utils/date";
import SchoolClassScheduleNoLesson from "./noLesson/NoLesson";
import SchoolClassScheduleDisplayLesson from "./displayLesson/DisplayLesson";
import SchoolClassScheduleCreateLesson from "./createLesson/CreateLesson";
import { useClassSchedule } from "../../../../context/scheduleContext";

const SchoolScheduleLesson = ({ startTime, endTime, dayId, day }) => {
  const {
    state: {
      classData: { id: classId },
      isEditMode,
    },
  } = useClassSchedule();

  const [isLoading, setLoading] = useState(true);
  const [lessonData, setLessonData] = useState(null);

  const getLesson = async () => {
    setLoading(true);

    const lessons = await Lesson.getLessonFromDateClass({
      startTime: getHourMin(startTime),
      dayId,
      classId,
    });

    //no lesson found
    if (!lessons?.length) return setLoading(false);

    //lesson found
    setLessonData(lessons[0]);
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading) getLesson();
    const unsubscribe = Lesson.onUpdate(getLesson);
  }, []);

  return (
    <div
      onClick={() => {
        console.log(lessonData);
      }}
      className="school_class_schedule_lesson"
    >
      {isLoading ? (
        <Loading />
      ) : lessonData ? (
        <SchoolClassScheduleDisplayLesson lessonData={lessonData} />
      ) : isEditMode ? (
        <SchoolClassScheduleCreateLesson
          startTime={startTime}
          endTime={endTime}
          day={day}
          dayId={dayId}
        />
      ) : (
        <SchoolClassScheduleNoLesson />
      )}
    </div>
  );
};

export default SchoolScheduleLesson;
