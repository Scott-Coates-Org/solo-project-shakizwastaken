import { Controller } from "../main";

/*

    start time,
    end time,
    duration,
    subject,
    classId,
    instructorId,

*/

let Lesson = new Controller("lessons");

Lesson.createLesson = async function (
  instructorId,
  classId,
  subject,
  startTime,
  endTime,
  duration
) {
  return await this.createOne(
    { instructorId, classId, subject, startTime, endTime, duration },
    { raw: true }
  );
};

export default Lesson;
