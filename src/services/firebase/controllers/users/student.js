import { Controller } from "../main";
import Class from "../classes/class";
import User from "./user";
import Assignment from "../classes/assignment";

/*

    classId,
    birth date,

*/

let Student = new Controller("students");

//get student's class
Student.getClass = async function (id) {
  const student = await this.findFromId(id);

  const classId = student.data().classId;
  if (!classId) throw new Error("student is not part of a class");

  return await Class.findFromId(classId);
};

//return student's classmates
Student.getClassmates = async function (id) {
  const student = await this.findFromId(id, { raw: true });

  //get class id from student
  const { classId } = student;

  //all students
  const students = await Student.findAll({
    raw: true,
    where: ["classId", "==", classId],
  });

  //include users
  return Promise.all(
    students.map(async ({ classId, userId }) => {
      const user = await User.findFromId(userId, { raw: true });

      return { classId, user };
    })
  );
};

//get student's assignments
Student.getAssignments = async function (id) {
  const student = this.findFromId(id, { raw: true });

  const { classId } = student;
  return await Assignment.findAll({
    where: ["classId", "==", classId],
    raw: true,
  });
};

Student.registerStudent = async function (userData, studentData) {
  if (!studentData.classId) throw new Error("please provide a classId");

  return await User.registerUser({ ...userData, role: "STUDENT" }, (userId) => {
    return { ...studentData, userId };
  });
};

export default Student;
