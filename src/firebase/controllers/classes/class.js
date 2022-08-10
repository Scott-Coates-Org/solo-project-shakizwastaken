import { Controller } from "../main";
import Lessons from "./lesson";
import Instructor from "../users/instructor";
import Student from "../users/student";
import User from "../users/user";

/*

    levelId,

*/

let Class = new Controller("classes");

//get class instructors
Class.getLessons = async function (id) {
  const ids = await Lessons.findAll({
    where: ["classId", "==", id],
    raw: true,
  });

  return Promise.all(
    ids.map(async ({ classId, instructorId, ...rest }) => {
      const instructor = await Instructor.findFromId(instructorId, {
        raw: true,
      });

      return { ...rest, instructor };
    })
  );
};

//get all students
Class.getStudents = async function (id) {
  //all students
  const students = await Student.findAll({
    raw: true,
    where: ["classId", "==", id],
  });

  //include users
  return Promise.all(
    students.map(async ({ classId, userId }) => {
      const user = await User.findFromId(userId, { raw: true });

      return { classId, user };
    })
  );
};

//get class lessons
Class.getLessons = function (id) {};

export default Class;
