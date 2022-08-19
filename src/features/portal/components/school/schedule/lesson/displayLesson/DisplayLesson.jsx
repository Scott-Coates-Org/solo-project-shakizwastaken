import "./displayLesson.css";

const SchoolClassScheduleDisplayLesson = ({
  lessonData: {
    title,
    subject,
    instructor: { firstName, lastName },
  },
}) => {
  return (
    <div className="school_class_schedule_displayLesson">
      <div className="school_class_schedule_displayLesson_subject">
        {subject}
      </div>
      <div className="school_class_schedule_displayLesson_instuctor">{`${firstName} ${lastName}`}</div>
    </div>
  );
};

export default SchoolClassScheduleDisplayLesson;
