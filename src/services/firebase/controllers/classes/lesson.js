import { getDocs, query, where } from "firebase/firestore";
import { Controller } from "../main";
import Instructor from "../users/instructor";
import User from "../users/user";

/*

    start time,
    end time,
    duration,
    subject,
    classId,
    instructorId,

*/

let Lesson = new Controller("lessons");

Lesson.createLesson = async function ({
  instructorId,
  weekDay,
  classId,
  subject,
  startTime,
  endTime,
}) {
  return await this.createOne(
    { instructorId, weekDay, classId, subject, startTime, endTime },
    { raw: true }
  );
};

Lesson.getLessonFromDateClass = async function (
  startTime,
  endTime,
  dayId,
  classId
) {
  const q = query(
    this._ref,
    where("startTime", "==", startTime),
    where("endTime", "==", endTime),
    where("weekDay", "==", dayId),
    where("classId", "==", classId)
  );

  const docs = await getDocs(q);

  if (docs.empty) return null;

  let data = [];

  docs.forEach(async (docSnap) => {
    const docData = docSnap.data();
    data.push({ id: docSnap.id, ...docData });
  });

  return await Promise.all(
    data.map(async ({ instructorId, ...data }) => {
      let instructor = {};
      let userData = {};

      if (instructorId) {
        console.log("instructor");
        instructor = await Instructor.findFromId(instructorId, {
          raw: true,
        });
        userData = await User.findFromId(instructor.userId, { raw: true });
      }
      return { ...data, instructor: { ...instructor, ...userData } };
    })
  );
};

export default Lesson;
