import { Controller } from "../main";

import Lesson from "../classes/lesson";
import Class from "../classes/class";
import Level from "../classes/level";
import User from "./user";

/*

    subject,

*/

let Instructor = new Controller("instructors");

//get instructor's classes
Instructor.getLessons = async function (id) {
  const ids = await Lesson.findAll({
    where: ["instructorId", "==", id],
    raw: true,
  });

  return await Promise.all(
    ids.map(async ({ instructorId, classId, ...rest }) => {
      //get class
      const { levelId, ...classObj } = await Class.findFromId(classId, {
        raw: true,
      });

      //get level data
      const level = await Level.findFromId(levelId, { raw: true });

      //get students
      const students = await Class.getStudents(classId);

      return { ...rest, class: { ...classObj, level, students } };
    })
  );
};

Instructor.registerInstructor = async function (userData, instructorData) {
  return await User.registerUser(
    { ...userData, role: "INSTRUCTOR" },
    (userId) => {
      return { ...instructorData, userId };
    }
  );
};

Instructor.getInstructors = async function () {
  const instructors = await this.findAll({ raw: true });
  return await Promise.all(
    instructors.map(async ({ userId, ...instructorData }) => {
      let user = {};
      user = await User.findFromId(userId, { raw: true });

      return { ...user, ...instructorData };
    })
  );
};

export default Instructor;
